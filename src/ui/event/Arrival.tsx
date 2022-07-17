import {match} from "variant";
import {EventProps} from "./EventProps";

export const Arrival = ({context, event}: EventProps<'Arrival'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} arrived at their destination
            {' '}
            {match(event.outcome, {
                success: _ => <>on time with no issues</>,
                late: _ => <>late</>,
                bankrupt: _ => <>with no money or supplies</>,
            })}

            
        </>
    )

}