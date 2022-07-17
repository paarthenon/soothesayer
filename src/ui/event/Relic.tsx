import {match} from "variant";
import {EventProps} from "./EventProps";

export const Relic = ({context, event}: EventProps<'Relic'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} met a trader who offered a magical relic in exchange for a large sum of money and {person.pronoun.they}
            {' '}
            {match(event.outcome, {
                pass: _ => <>decided it wasn't worth the cost</>,
                buy: _ => <>eagerly forked over their money for it</>,
                haggle: _ => <>haggled with the merchant until they could get it for a fair price</>,
            })}

            
        </>
    )

}