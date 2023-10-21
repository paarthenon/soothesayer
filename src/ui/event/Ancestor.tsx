import {lookup, match} from 'variant';
import {EventProps} from './EventProps';

export const Ancestor = ({context, event}: EventProps<'Ancestor'>) => {
    const person = context.subject;
    return (
        <>
            {person.name} is secretly the descendant of {' '}
            {match(event.outcome, lookup({
                Prostitute: 'a racous prostitute',
                Royalty: 'local royalty',
                Warlord: 'an infamous warlord',
            }))}
        </>
    );
};
