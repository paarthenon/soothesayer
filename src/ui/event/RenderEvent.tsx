import {Event} from "core/event";
import {match} from "variant"
import {EventProps} from "./EventProps";
import {Mugging} from "./Mugging";



export const RenderEventLine = (props: EventProps) => {
    return match(props.event, {
        Mugged: () => <Mugging {...props} />
    });
}


export const RenderEvent = (props: EventProps) => <>
    {/* <ProfileIcon src={ImageMap[event.type]} />
    <RenderEventLine />
    <RerollEventButtons /> */}
</>