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

export const LoveOutcome = catalog([
    'taken',
    'reject',
    'mutual',
])
export type LoveOutcome = keyof typeof LoveOutcome;

/**
 * Travel events
 */

export const ArrivalOutcome = catalog([
    'success',
    'late',
    'bankrupt',
])
export type ArrivalOutcome = keyof typeof ArrivalOutcome;

export const ForkOutcome = catalog([
    'wrong',
    'correct',
    'wait',
])
export type ForkOutcome = keyof typeof ForkOutcome;

/**
 * City events
 */

export const ProstituteOutcome = catalog([
    'chat',
    'baby',
    'std',
])
export type ProstituteOutcome = keyof typeof ProstituteOutcome;

export const FightOutcome = catalog([
    'join',
    'authority',
    'watch',
])
export type FightOutcome = keyof typeof FightOutcome;

/**
 * Relationship events
 * 
 * - Finding love
 * - losing love
 * - commiting to marriage
 * 
 */

export const BreakupOutcome = catalog([
    'violent',
    'unpleasant',
    'amicable',
    'sad'
])
export type BreakupOutcome = keyof typeof BreakupOutcome;

export const ChildOutcome = catalog([
    'healthy',
    'sick',
    'betrayal',
    'stillbirth'
])
export type ChildOutcome = keyof typeof ChildOutcome;

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
    Love: fields<{
        outcome: LoveOutcome;
    }>(),
    Arrival: fields<{
        outcome: ArrivalOutcome;
    }>(),
    Fork: fields<{
        outcome: ForkOutcome;
    }>(),
    Prostitute: fields<{
        outcome: ProstituteOutcome;
    }>(),
    Fight: fields<{
        outcome: FightOutcome;
    }>(),
    Breakup: fields<{
        outcome: BreakupOutcome;
    }>(),
    Child: fields<{
        outcome: ChildOutcome;
    }>(),
})
export type Event<T extends TypeNames<typeof Event> = undefined> = VariantOf<typeof Event, T>;

