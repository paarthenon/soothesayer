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

export const MuggingOutcome = catalog([
    'victory',
    'paid',
    'injured',
    'died',
])
export type MuggingOutcome = keyof typeof MuggingOutcome;

export const Event = variant({
    Mugged: fields<{
        outcome: MuggingOutcome;
    }>(),
})
export type Event<T extends TypeNames<typeof Event> = undefined> = VariantOf<typeof Event, T>;

