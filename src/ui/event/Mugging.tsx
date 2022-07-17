import {Box} from "@chakra-ui/react";
import {match} from "variant";
import {EventProps} from "./EventProps";

export const Mugging = ({context, event}: EventProps<'Mugged'>) => {
    return (
        <>
            {context.subject.name} was mugged and he

            {match(event.outcome, {
                died: _ => <>died</>,
                injured: _ => <>got hurt</>,
                paid: _ => <>paid them off</>,
                victory: _ => <>fought back and won</>,
            })}

            
        </>
    )

}