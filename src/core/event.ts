import {catalog, fields, TypeNames, variant, VariantOf} from 'variant';


export const TravelEvent = variant({
    /**
     * Arrive in the target destination.
     */
    Arrive: {},
    /**
     * Get lost on the way. Some delay.
     */
    Lost: {},
});
export type TravelEvent<T extends TypeNames<typeof TravelEvent> = undefined> = VariantOf<typeof TravelEvent, T>;

/**
 * General events
 */
 export const RelicOutcome = catalog([
    'pass',
    'buy',
    'haggle',
])
export type RelicOutcome = keyof typeof RelicOutcome;

 export const FoundMoneyOutcome = catalog([
    'keep',
    'return',
    'turnIn',
    'ignore',
])
export type FoundMoneyOutcome = keyof typeof FoundMoneyOutcome;

export const DrowningOutcome = catalog([
    'help',
    'save',
    'drown',
    'ignore',
])
export type DrowningOutcome = keyof typeof DrowningOutcome;

export const MuggingOutcome = catalog([
    'victory',
    'paid',
    'injured',
    'died',
    'saved'
])
export type MuggingOutcome = keyof typeof MuggingOutcome;

/**
 * Travel events
 */

 export const ArrivalOutcome = catalog([
    'success',
    'late',
    'bankrupt',
])
export type ArrivalOutcome = keyof typeof ArrivalOutcome;

/**
 * City events
 */

/**
 * Relationship events
 * 
 * - Finding love
 * - losing love
 * - commiting to marriage
 * 
 */

export const Event = variant({
    Relic: fields<{
        outcome: RelicOutcome;
    }>(),
    FoundMoney: fields<{
        outcome: FoundMoneyOutcome;
    }>(),
    Drowning: fields<{
        outcome: DrowningOutcome;
    }>(),
    Mugged: fields<{
        outcome: MuggingOutcome;
    }>(),
    Arrival: fields<{
        outcome: ArrivalOutcome;
    }>(),
    
})
export type Event<T extends TypeNames<typeof Event> = undefined> = VariantOf<typeof Event, T>;

