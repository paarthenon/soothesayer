import {match} from "variant";
import {EventProps} from "./EventProps";

export const Breakup = ({context, event}: EventProps<'Breakup'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} fell out of love with {person.pronoun.their} partner
            {' '}
            {match(event.outcome, {
                violent: _ => <>and the breakup was messy and violent</>,
                unpleasant: _ => <>and the breakup was unpleasant, but could've been worse</>,
                amicable: _ => <>but now they're on good terms</>,
                sad: _ => <>but they stayed together for some reason</>
            })}

            
        </>
    )

}