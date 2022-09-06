import {Appearance, Person, Wealth} from 'core/person';
import {Pronoun, she, he} from 'core/pronoun';
import chance from './chance';
import {values} from 'lodash';

export function genPerson(): Person {
    const appearance = chance.pickone(values(Appearance))();
    const pronoun = she;
    const name = genName(pronoun);

    const person: Person = {
        name,
        appearance,
        pronoun,
        wealth: Wealth.Poor,
    };

    return person;
}

export const NAMES_FEMININE = [
    'Margaret',
    'Annika',
    'Elidar',
    'Ishkar',
    'Selamin',
    'Pelock',
    'Melena',
];

export const NAMES_MASCULINE = [
    'Roderick',
    'Belan',
    'Sej',
    'Garth',
    'Coradin',
];

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

