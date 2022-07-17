import {Appearance, Person, Wealth} from 'core/person';
import {she} from 'core/pronoun';
import {View} from 'core/view';
import produce from 'immer';
import {just, match, matcher, types,} from 'variant';
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
                }
                s.view = View.Game();
            },
        })
    });
}

export const gameReducer = (game: GameState, action: GameAction) => {
    return produce(game, g => { 
        match(action, {
            AlterDice: noop,
            GreetCustomer({}) {
                const person: Person = {
                    name: 'Annika',
                    pronoun: she,
                    apperance: Appearance.Worker(),
                    wealth: Wealth.Poor,
                }
                g.activeReading = {
                    customer: person,
                    subject: person,
                    stage: 'greeting',
                }
            },
            BeginReading() {
                if (g.activeReading) {
                    g.activeReading.stage = 'prophesy';
                }
            },
            ReportReading() {
                if (g.activeReading) {
                    g.activeReading.stage = 'conclusion';
                }
            }
        })
    })
}

export const rootReducer = (state = initState, action: Action) => {
    return matcher(action)
        .when(types(AppAction), _ => appReducer(state, _))
        .when(types(GameAction), _ => (
            state.game
                ? {...state, game: gameReducer(state.game, _)}
                : state
        ))
        .else(just(state)); // return state for unhandled actions
}