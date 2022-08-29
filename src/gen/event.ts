import {
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
} from 'core/event';
import {values} from 'lodash';
import {match, partial, TypeNames, types, TypesOf} from 'variant';
import chance from './chance';

export function genEvent<T extends TypesOf<typeof Event>>(requestedType?: T) {
    const actualType = requestedType ?? chance.pickone(types(Event));

    return match(actualType, {
        Arrival: () => {
            const outcome = chance.pickone(values(ArrivalOutcome));
            return Event.Arrival({
                outcome,
            });
        },
        Breakup: () => {
            const outcome = chance.pickone(values(BreakupOutcome));
            return Event.Breakup({outcome});
        },
        Child() {
            const outcome = chance.pickone(values(ChildOutcome));
            return Event.Child({outcome});
        },
        Drowning() {
            const outcome = chance.pickone(values(DrowningOutcome));
            return Event.Drowning({outcome});
        },
        Fight() {
            const outcome = chance.pickone(values(FightOutcome));
            return Event.Fight({outcome});
        },
        Fork() {
            const outcome = chance.pickone(values(ForkOutcome));
            return Event.Fork({outcome});
        },
        FoundMoney() {
            const outcome = chance.pickone(values(FoundMoneyOutcome));
            return Event.FoundMoney({outcome});
        },
        Love() {
            const outcome = chance.pickone(values(LoveOutcome));
            return Event.Love({outcome});
        },
        Mugged() {
            const outcome = chance.pickone(values(MuggingOutcome));
            return Event.Mugged({outcome});
        },
        Prostitute() {
            const outcome = chance.pickone(values(ProstituteOutcome));
            return Event.Prostitute({outcome});
        },
        Relic() {
            const outcome = chance.pickone(values(RelicOutcome));
            return Event.Relic({outcome});
        },
    });
}
