import {match} from "variant";
import {EventProps} from "./EventProps";

export const Drowning = ({context, event}: EventProps<'Drowning'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} saw someone drowning and {person.pronoun.they}
            {' '}
            {match(event.outcome, {
                help: _ => <>found someone who could help</>,
                save: _ => <>jumped in to save them</>,
                drown: _ => <>tried to save them but failed</>,
                ignore: _ => <>kept on walking</>,
            })}

            
        </>
    )

}