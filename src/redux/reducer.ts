import {Health} from '@/core/context';
import {Appearance, Person, Wealth} from '@/core/person';
import {she} from '@/core/pronoun';
import {resultOpinion} from '@/core/resultOpinion';
import {View, MenuView} from '@/core/view';
import {genEvent} from '@/gen/event';
import {genPerson} from '@/gen/person';
import {genTimeline} from '@/gen/timeline';
import {produce} from 'immer';
import {just, match, matcher, types} from 'variant';
import {Action, AppAction, DebugAction, GameAction} from './actions';
import {GameState, initState, ReadingStage, RootState} from './state';
import {STARTING_COINS_GOLD, STARTING_COINS_SILVER, STARTING_COINS_SOUL, TOWN_NAMES} from '@/gen/defaults';
import chance from '@/gen/chance';

export const appReducer = (state: RootState, action: AppAction) => {
    return produce(state, s => {
        match(action, {
            GoToMenuView({payload}) {
                s.view = payload;
            },
            GoTo({payload}) {
                if (s.game) {
                    s.game.view = payload;
                }
            },
            StartGame() {
                s.game = {
                    coins: {
                        silver: STARTING_COINS_SILVER,
                        gold: STARTING_COINS_GOLD,
                        soul: STARTING_COINS_SOUL,
                    },
                    people: {},
                    town: {
                        name: chance.pickone(TOWN_NAMES),
                    },
                    view: View.Tutorial(),
                };
                s.view = MenuView.Game();
            },
        });
    });
};

export const gameReducer = (game: GameState, action: GameAction) => {
    return produce(game, g => {
        match(action, {
            AlterDice({position, rerollType}) {
                if (rerollType == 'gold' && g.activeReading != undefined) {
                    if (g.coins.gold > 0) {
                        g.activeReading.timeline[position] = genEvent();
                        g.coins.gold--;
                    }
                }
                if (rerollType == 'silver' && g.activeReading != undefined) {
                    if (g.coins.silver > 0) {
                        g.activeReading.timeline[position] = genEvent(
                            g.activeReading.timeline[position].type
                        );
                        g.coins.silver--;
                    }
                }
            },
            GreetCustomer({}) {
                const person: Person = genPerson();
                g.people[person.id] = person;
                g.activeReading = {
                    customer: person,
                    subject: person,
                    stage: ReadingStage.greeting,
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
                    g.activeReading.stage = ReadingStage.prophesy;
                    const timeline = genTimeline(g.activeReading.context);

                    g.activeReading.timeline.push(...timeline);
                }
            },
            ReportReading() {
                if (g.activeReading) {
                    const opinion = resultOpinion(g.activeReading);
                    const goldPayment = Math.max(Math.floor(opinion / 12), 0);
                    const silverPayment = Math.max(Math.floor(3 + opinion / 6), 0);
                    g.coins.gold += goldPayment;
                    g.coins.silver += silverPayment;
                    g.activeReading.stage = ReadingStage.conclusion;
                    g.activeReading.payment = {
                        gold: goldPayment,
                        silver: silverPayment,
                    };
                }
            },
        });
    });
};

export const debugReducer = (state: RootState, action: DebugAction) => {
    return match(action, {
        ResetEverything() {
            return initState;
        }
    })
}

export const rootReducer = (state = initState, action: Action) => {
    return matcher(action)
        .when(types(AppAction), _ => appReducer(state, _))
        .when(types(GameAction), _ =>
            state.game ? {...state, game: gameReducer(state.game, _)} : state
        )
        .when(types(DebugAction), _ => debugReducer(state, _))
        .else(just(state)); // return state for unhandled actions
};
