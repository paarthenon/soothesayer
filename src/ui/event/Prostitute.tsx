import {match} from "variant";
import {EventProps} from "./EventProps";

export const Prostitute = ({context, event}: EventProps<'Prostitute'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} met a prostitute and {person.pronoun.they}
            {' '}
            {match(event.outcome, {
                chat: _ => <>spent the chatting in comfort</>,
                baby: _ => <>they got pregnant</>,
                std: _ => <>contracted an STD</>,
            })}

            
        </>
    )

}