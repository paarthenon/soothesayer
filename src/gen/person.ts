import {Appearance, Person, Wealth} from 'core/person';
import {she} from 'core/pronoun';
import chance from './chance';
import {values} from 'lodash';

export function genPerson(): Person {
    const appearance = chance.pickone(values(Appearance))();

    const person: Person = {
        name: 'Annika',
        appearance,
        pronoun: she,
        wealth: Wealth.Poor,
    }
    
    return person;
}

export function genName() {
    return chance.pickone([
        'Margaret',
        'Annika'
    ])
}