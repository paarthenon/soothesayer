import {Event} from "core/event"
import {Person} from "core/person";
import {match} from "variant"

interface EventProps {
    event: Event;
    person: Person;
}
export const RenderEvent = (props: EventProps) => {
    return match(props.event, {
        Mugged: () => <>{props.person.name} got mugged!</>
    });
}