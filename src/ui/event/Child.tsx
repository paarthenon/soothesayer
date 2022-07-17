import {match} from "variant";
import {EventProps} from "./EventProps";

export const Child = ({context, event}: EventProps<'Child'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} and {person.pronoun.their} partner had a child together
            {' '}
            {match(event.outcome, {
                healthy: _ => <>and baby is healthy and adorable</>,
                sick: _ => <>but the baby is sick</>,
                betrayal: _ => <>but the child wasn't {person.pronoun.theirs}!</>,
                stillbirth: _ => <>but the baby was a stillbirth</>
            })}

            
        </>
    )

}