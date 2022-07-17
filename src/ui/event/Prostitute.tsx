import {match} from "variant";
import {EventProps} from "./EventProps";

export const Prostitute = ({context, event}: EventProps<'Prostitute'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} met a prostitute and 
            {' '}
            {match(event.outcome, {
                chat: _ => <>they spent the chatting in comfort</>,
                baby: _ => <>they got pregnant</>,
                std: _ => <>{person.pronoun.they} contracted an STD</>,
            })}

            
        </>
    )

}