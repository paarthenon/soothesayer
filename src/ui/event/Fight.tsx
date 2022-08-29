import {match} from 'variant';
import {EventProps} from './EventProps';

export const Fight = ({context, event}: EventProps<'Fight'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} saw two people fighting and {person.pronoun.they}{' '}
            {match(event.outcome, {
                join: _ => <>jumped in to stop the fight, getting hurt in the process</>,
                authority: _ => <>reported this event to the authorities</>,
                watch: _ => <>just watched from afar</>,
            })}
        </>
    );
};
