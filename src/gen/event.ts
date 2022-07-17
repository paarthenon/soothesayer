import {ArrivalOutcome, Event} from "core/event";
import {values} from "lodash";
import {match, partial, TypeNames, types, TypesOf} from "variant";
import chance from "./chance";

export function genEvent<T extends TypesOf<typeof Event>>(requestedType?: T) {
    const actualType = requestedType ?? chance.pickone(types(Event));

    return match(actualType, {
        Arrival: () => {
            const outcome = chance.pickone(values(ArrivalOutcome));
            return Event.Arrival({
                outcome
            })
        },
        Breakup() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Child() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Drowning() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Fight() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Fork() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        FoundMoney() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Love() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Mugged() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Prostitute() {
            return Event.FoundMoney({outcome: 'keep'})
        },
        Relic() {
            return Event.FoundMoney({outcome: 'keep'})
        },
    })
}