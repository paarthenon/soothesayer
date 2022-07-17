import {Context} from 'core/context';
import {Event} from 'core/event';
import {TypesOf, TypeNames} from 'variant';

export interface EventProps<T extends TypeNames<typeof Event> = undefined> {
    event: Event<T>;
    context: Context;
}
