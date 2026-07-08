import {Appearance, Person, Wealth} from '@/core/person';
import {Pronoun, she, he} from '@/core/pronoun';
import chance from './chance';
import {uuid} from '@/core/util';
import {NAMES_FEMININE, NAMES_MASCULINE} from './defaults';

export function genPerson(): Person {
    const id = uuid();
    const pronoun = chance.pickone([he, she]);
    const name = genName(pronoun);
    const appearance = chance.pickone(Object.values(Appearance))();
    const wealth = chance.pickone([Wealth.Poor, Wealth.Middle, Wealth.High, Wealth.Aristocrat]);

    const person: Person = {
        id,
        name,
        appearance,
        pronoun,
        wealth,
    };

    return person;
}

export function genName(pronoun: Pronoun) {
    switch (pronoun) {
        case she:
            return chance.pickone(NAMES_FEMININE);
        case he:
            return chance.pickone(NAMES_MASCULINE)
        default:
            return 'Somebody'
    }
}

