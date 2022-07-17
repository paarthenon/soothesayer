import {Event} from "core/event";
import {match, partial} from "variant"
import {EventProps} from "./EventProps";
import {ImageMap} from "./ImageMap";
import {IconButton} from "@chakra-ui/react";

import { Arrival } from "./Arrival";
import { Breakup } from "./Breakup";
import { Child } from "./Child";
import { Drowning } from "./Drowning";
import { Fight } from "./Fight";
import { Fork } from "./Fork";
import { FoundMoney } from "./FoundMoney";
import { Love } from "./Love";
import { Mugging } from "./Mugging";
import { Prostitute } from "./Prostitute";
import { Relic } from "./Relic";

const ProfileIcon = (props: EventProps) => 
    ImageMap[props.event.type]

const RenderEventLine = (props: EventProps) => {
    return match(props.event, partial({
        Relic: event => <Relic event={event} context={props.context} />,
        FoundMoney: event => <FoundMoney event={event} context={props.context} />,
        Drowning: event => <Drowning event={event} context={props.context} />,
        Mugged: event => <Mugging event={event} context={props.context} />,
        Love: event => <Love event={event} context={props.context} />,
        Arrival: event => <Arrival event={event} context={props.context} />,
        Fork: event => <Fork event={event} context={props.context} />,
        Prostitute: event => <Prostitute event={event} context={props.context} />,
        Fight: event => <Fight event={event} context={props.context} />,
        Breakup: event => <Breakup event={event} context={props.context} />,
        Child: event => <Child event={event} context={props.context} />,

        default: () => <>Unimplemented</>,
    }));
}

const RerollEventButtons = (props: EventProps) => {

}

export const RenderEvent = (props: EventProps) => <>
    <ProfileIcon {...props} />
    <RenderEventLine {...props}/>
    {/* <RerollEventButtons /> */}
</>