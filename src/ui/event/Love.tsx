import {match} from "variant";
import {EventProps} from "./EventProps";

export const Love = ({context, event}: EventProps<'Love'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} saw someone beautiful and confessed
            {' '}
            {match(event.outcome, {
                taken: _ => <>but they unfortunately already had a partner</>,
                reject: _ => <>but they weren't interested</>,
                mutual: _ => <>and the feeling was mutual!</>,
            })}

            
        </>
    )

}