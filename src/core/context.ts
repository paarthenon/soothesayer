import {fields, TypeNames, variant, VariantOf} from 'variant';
import {Person} from './person';

type place = string;

// /**
//  * Person or item. For now, keep it to people because the events are probably too different.
//  */
// export const Subject = variant({
//     Person: {},
// })
// export type Subject<T extends TypeNames<typeof Subject> = undefined> = VariantOf<typeof Subject, T>

export const Situation = variant({
    Home: fields<{place: string;}>(),
    Traveling: fields<{from: string, to: string}>(),
})
export type Situation<T extends TypeNames<typeof Situation> = undefined> = VariantOf<typeof Situation, T>;

/**
 * This is the data-object used by the fate engine to calculate the likely events
 * at any given time. For example you are not going to find a tasteful cafe while
 * on the road. Such events will only happen in the city.
 */
export interface Context {
    subject: Person;
    situation: Situation;
    health: unknown;
    relationships: unknown;
}

