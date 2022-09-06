import {Health} from 'core/context';
import {Appearance, Person, Wealth} from 'core/person';
import {she} from 'core/pronoun';
import {resultOpinion} from 'core/resultOpinion';
import {View} from 'core/view';
import {genEvent} from 'gen/event';
import {genPerson} from 'gen/person';
import {genTimeline} from 'gen/timeline';
import produce from 'immer';
import {just, match, matcher, types} from 'variant';
import {Action, AppAction, GameAction} from './actions';
import {GameState, initState, RootState} from './state';

const noop = () => {};

export const appReducer = (state: RootState, action: AppAction) => {
    return produce(state, s => {
        match(action, {
            GoTo({payload}) {
                s.view = payload;
            },
            StartGame() {
                s.game = {
                    silver: 10,
                    gold: 1,
                };
                s.view = View.Game();
            },
        });
    });
};

export const gameReducer = (game: GameState, action: GameAction) => {
    return produce(game, g => {
        match(action, {
            AlterDice({position, rerollType}) {
                if (rerollType == 'gold' && g.activeReading != undefined) {
                    if (g.gold > 0) {
                        g.activeReading.timeline[position] = genEvent();
                        g.gold--;
                    }
                }
                if (rerollType == 'silver' && g.activeReading != undefined) {
                    if (g.silver > 0) {
                        g.activeReading.timeline[position] = genEvent(
                            g.activeReading.timeline[position].type
                        );
                        g.silver--;
                    }
                }
            },
            GreetCustomer({}) {
                const person: Person = genPerson();
                g.activeReading = {
                    customer: person,
                    subject: person,
                    stage: 'greeting',
                    timeline: [],
                    context: {
                        subject: person,
                        health: Health.Healthy,
                        tags: {},
                    },
                    payment: {gold: 0, silver: 0},
                };
            },
            BeginReading() {
                if (g.activeReading) {
                    g.activeReading.stage = 'prophesy';
                    const timeline = genTimeline(g.activeReading.context);

                    g.activeReading.timeline.push(...timeline);
                }
            },
            ReportReading() {
                if (g.activeReading) {
                    const opinion = resultOpinion(g.activeReading);
                    const goldPayment = Math.max(Math.floor(opinion / 12), 0);
                    const silverPayment = Math.max(Math.floor(3 + opinion / 6), 0);
                    g.gold += goldPayment;
                    g.silver += silverPayment;
                    g.activeReading.stage = 'conclusion';
                    g.activeReading.payment = {
                        gold: goldPayment,
                        silver: silverPayment,
                    };
                }
            },
        });
    });
};

export const rootReducer = (state = initState, action: Action) => {
    return matcher(action)
        .when(types(AppAction), _ => appReducer(state, _))
        .when(types(GameAction), _ =>
            state.game ? {...state, game: gameReducer(state.game, _)} : state
        )
        .else(just(state)); // return state for unhandled actions
};
