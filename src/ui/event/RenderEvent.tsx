import {Event} from "core/event";
import {match, partial} from "variant"
import {EventProps} from "./EventProps";
import {Mugging} from "./Mugging";



export const RenderEventLine = (props: EventProps) => {
    return match(props.event, partial({
        Mugged: event => <Mugging event={event} context={props.context} />,

        default: () => <>Unimplemented</>,
    }));
}


export const RenderEvent = (props: EventProps) => <>
    {/* <ProfileIcon src={ImageMap[event.type]} />
    <RenderEventLine />
    <RerollEventButtons /> */}
</>