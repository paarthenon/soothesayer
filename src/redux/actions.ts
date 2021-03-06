import {Person} from 'core/person';
import {fields, payload, TypeNames, variant, VariantOf} from 'variant';
import {View} from '../core/view';

export const Metal = variant([
    'gold',
    'silver',
]);
export type Metal = keyof typeof Metal;

export const AppAction = variant({
    StartGame: {},
    GoTo: payload<View>(),
})
export type AppAction<T extends TypeNames<typeof AppAction> = undefined> = VariantOf<typeof AppAction, T>

export const GameAction = variant({
    GreetCustomer: {},
    /**
     * Start the actual session
     */
    BeginReading: {},
    AlterDice: fields<{
        position: number,
        rerollType: Metal,
    }>(),
    ReportReading: {},
})
export type GameAction<T extends TypeNames<typeof GameAction> = undefined> = VariantOf<typeof GameAction, T>

export const Action = variant({
    ...AppAction,
    ...GameAction,
})
export type Action<T extends TypeNames<typeof Action> = undefined> = VariantOf<typeof Action, T>