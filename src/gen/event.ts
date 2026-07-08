import {
    AncestorOutcome,
    ArrivalOutcome,
    BreakupOutcome,
    ChildOutcome,
    DrowningOutcome,
    Event,
    FightOutcome,
    ForkOutcome,
    FoundMoneyOutcome,
    LoveOutcome,
    MuggingOutcome,
    ProstituteOutcome,
    RelicOutcome,
} from '@/core/event';
import {match, types, TypesOf} from 'variant';
import chance from './chance';

/**
 * Generate one event of the timeline (including outcome)
 * @param requestedType specific type of event.
 * @returns 
 */
export function genEvent<T extends TypesOf<typeof Event>>(requestedType?: T) {
    const actualType = requestedType ?? chance.pickone(types(Event));

    return match(actualType, {
        Ancestor: () => {
            const outcome = chance.pickone(Object.values(AncestorOutcome));
            return Event.Ancestor({outcome});
        },
        Arrival: () => {
            const outcome = chance.pickone(Object.values(ArrivalOutcome));
            return Event.Arrival({
                outcome,
            });
        },
        Breakup: () => {
            const outcome = chance.pickone(Object.values(BreakupOutcome));
            return Event.Breakup({outcome});
        },
        Child() {
            const outcome = chance.pickone(Object.values(ChildOutcome));
            return Event.Child({outcome});
        },
        Drowning() {
            const outcome = chance.pickone(Object.values(DrowningOutcome));
            return Event.Drowning({outcome});
        },
        Fight() {
            const outcome = chance.pickone(Object.values(FightOutcome));
            return Event.Fight({outcome});
        },
        Fork() {
            const outcome = chance.pickone(Object.values(ForkOutcome));
            return Event.Fork({outcome});
        },
        FoundMoney() {
            const outcome = chance.pickone(Object.values(FoundMoneyOutcome));
            return Event.FoundMoney({outcome});
        },
        Love() {
            const outcome = chance.pickone(Object.values(LoveOutcome));
            return Event.Love({outcome});
        },
        Mugged() {
            const outcome = chance.pickone(Object.values(MuggingOutcome));
            return Event.Mugged({outcome});
        },
        Prostitute() {
            const outcome = chance.pickone(Object.values(ProstituteOutcome));
            return Event.Prostitute({outcome});
        },
        Relic() {
            const outcome = chance.pickone(Object.values(RelicOutcome));
            return Event.Relic({outcome});
        },
    });
}
