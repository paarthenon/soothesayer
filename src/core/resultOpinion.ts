import {Reading} from "redux/state";
import {catalog, constant, match} from "variant";
import {Event} from "./event";
import {Person} from "./person";

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
        Arrival: ({outcome}) => match(outcome, {
            bankrupt: constant(Opinion.hate),
            late: constant(Opinion.dislike),
            success: constant(Opinion.like),
        }),
        // placeholder below
        Drowning: _ => Opinion.neutral,
        FoundMoney: _ => Opinion.neutral,
        Mugged: constant(Opinion.neutral),
        Relic: constant(Opinion.neutral),
    })
}