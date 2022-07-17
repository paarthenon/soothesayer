import {match} from "variant";
import {EventProps} from "./EventProps";

export const Fork = ({context, event}: EventProps<'Fork'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} happened upon a fork in the road and {person.pronoun.they}
            {' '}
            {match(event.outcome, {
                wrong: _ => <>took the wrong path, losing a day of travel time</>,
                correct: _ => <>took the correct path, completely by chance</>,
                wait: _ => <>waited for other travelers, who could give them directions</>,
            })}

            
        </>
    )

}