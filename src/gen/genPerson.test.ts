import {he, she} from 'core/pronoun';
import {genName, genPerson, NAMES_FEMININE, NAMES_MASCULINE} from './person';

test('female name gen', () => {
    const name = genName(she);

    expect(NAMES_FEMININE).toContain(name);
})

test('male name gen', () => {
    const name = genName(he);

    expect(NAMES_MASCULINE).toContain(name);
})