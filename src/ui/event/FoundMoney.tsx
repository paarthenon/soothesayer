import {match} from 'variant';
import {EventProps} from './EventProps';

export const FoundMoney = ({context, event}: EventProps<'FoundMoney'>) => {
    const person = context.subject;
    return (
        <>
            {context.subject.name} found some money on the ground and{' '}
            {person.pronoun.they}{' '}
            {match(event.outcome, {
                keep: _ => (
                    <>
                        glanced around to make sure no one was watching, and then pocketed
                        it
                    </>
                ),
                return: _ => (
                    <>
                        searched for the owner who gave {person.pronoun.them} a reward for
                        helping
                    </>
                ),
                turnIn: _ => <>handed it over to the proper authorities</>,
                ignore: _ => <>kept on walking</>,
            })}
        </>
    );
};
