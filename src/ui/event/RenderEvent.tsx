import {match} from "variant"
import {EventProps} from "./EventProps";
import {Mugging} from "./Mugging";


export const RenderEvent = (props: EventProps) => {
    return match(props.event, {
        Mugged: () => <Mugging {...props} />
    });
}