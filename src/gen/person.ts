import {Appearance, Person, Wealth} from 'core/person';
import {she} from 'core/pronoun';
import chance from './chance';
import {values} from 'lodash';

export function genPerson(): Person {
    const appearance = chance.pickone(values(Appearance))();
    const name = chance.name({gender: 'female'});

    const person: Person = {
        name,
        appearance,
        pronoun: she,
        wealth: Wealth.Poor,
    };

    return person;
}

export function genName() {
    return chance.pickone([
        'Margaret',
        'Annika',
        'Elidar',
        'Ishkar',
        'Selamin',
        'Garth',
        'Pelock',
        'Melena',
    ]);
}
