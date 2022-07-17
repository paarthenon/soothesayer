import {match} from "variant";
import {EventProps} from "./EventProps";

export const Mugging = ({context, event}: EventProps<'Mugged'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} was mugged and {person.pronoun.they}
            {' '}
            {match(event.outcome, {
                died: _ => <>died</>,
                injured: _ => <>got hurt</>,
                paid: _ => <>paid them off</>,
                victory: _ => <>fought back and won</>,
                saved: _ => <>was saved by a brave passerby</>,
            })}

            
        </>
    )

}