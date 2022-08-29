import {Reading} from 'redux/state';
import {catalog, constant, match} from 'variant';
import {Event} from './event';
import {Person} from './person';

export const Opinion = catalog({
    hate: -15,
    dislike: -5,
    neutral: 0,
    like: 5,
    love: 15,
});

/**
 * Get the resulting opinion of a reading.
 * @param reading
 */
export function resultOpinion(reading: Reading) {
    const customer = reading.customer;

    let opinion = 0;

    for (const event of reading.timeline) {
        opinion += eventOpinion(reading.customer, event);
    }

    return opinion;
}

/**
 * Get a person's opinion for a specific event.
 * @param person
 * @param event
 * @returns
 */
export function eventOpinion(person: Person, event: Event) {
    return match(event, {
        Relic: ({outcome}) =>
            match(outcome, {
                pass: constant(Opinion.neutral),
                buy: constant(Opinion.dislike),
                haggle: constant(Opinion.like),
            }),
        FoundMoney: ({outcome}) =>
            match(outcome, {
                keep: constant(Opinion.like),
                return: constant(Opinion.love),
                turnIn: constant(Opinion.like),
                ignore: constant(Opinion.neutral),
            }),
        Drowning: ({outcome}) =>
            match(outcome, {
                help: constant(Opinion.like),
                save: constant(Opinion.love),
                drown: constant(Opinion.hate),
                ignore: constant(Opinion.dislike),
            }),
        Mugged: ({outcome}) =>
            match(outcome, {
                victory: constant(Opinion.love),
                paid: constant(Opinion.neutral),
                injured: constant(Opinion.dislike),
                died: constant(Opinion.hate),
                saved: constant(Opinion.like),
            }),
        Love: ({outcome}) =>
            match(outcome, {
                taken: constant(Opinion.neutral),
                reject: constant(Opinion.dislike),
                mutual: constant(Opinion.like),
            }),
        Arrival: ({outcome}) =>
            match(outcome, {
                bankrupt: constant(Opinion.hate),
                late: constant(Opinion.dislike),
                success: constant(Opinion.like),
            }),
        Fork: ({outcome}) =>
            match(outcome, {
                wrong: constant(Opinion.dislike),
                correct: constant(Opinion.like),
                wait: constant(Opinion.neutral),
            }),
        Prostitute: ({outcome}) =>
            match(outcome, {
                chat: constant(Opinion.like),
                baby: constant(Opinion.love),
                std: constant(Opinion.dislike),
            }),
        Fight: ({outcome}) =>
            match(outcome, {
                join: constant(Opinion.neutral),
                authority: constant(Opinion.like),
                watch: constant(Opinion.dislike),
            }),
        Breakup: ({outcome}) =>
            match(outcome, {
                violent: constant(Opinion.hate),
                unpleasant: constant(Opinion.dislike),
                amicable: constant(Opinion.like),
                sad: constant(Opinion.dislike),
            }),
        Child: ({outcome}) =>
            match(outcome, {
                healthy: constant(Opinion.love),
                sick: constant(Opinion.dislike),
                betrayal: constant(Opinion.dislike),
                stillbirth: constant(Opinion.hate),
            }),
    });
}
