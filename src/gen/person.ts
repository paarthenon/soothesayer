import {Appearance, Person, Wealth} from 'core/person';
import {Pronoun, she, he} from 'core/pronoun';
import chance from './chance';
import {values} from 'lodash';
import {uuid} from 'core/util';
import {NAMES_FEMININE, NAMES_MASCULINE} from './defaults';

export function genPerson(): Person {
    const id = uuid();
    const pronoun = chance.pickone([he, she]);
    const name = genName(pronoun);
    const appearance = chance.pickone(values(Appearance))();

    const person: Person = {
        id,
        name,
        appearance,
        pronoun,
        wealth: Wealth.Poor,
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

