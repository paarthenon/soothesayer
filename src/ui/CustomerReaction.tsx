import {resultOpinion} from '@/core/resultOpinion';
import {caps} from '@/core/stringUtil';
import {Reading} from '@/redux/state';

export interface CustomerReactionProps {
    reading: Reading;
}
export const CustomerReaction = ({reading}: CustomerReactionProps) => {
    const opinion = resultOpinion(reading);
    let reaction = '';

    if (opinion > 15) {
        reaction = reading.customer.pronoun.they + ' is very pleased!';
    }
    if (opinion > 5 && opinion <= 15) {
        reaction =
            reading.customer.pronoun.they +
            ' is happy with what ' +
            reading.customer.pronoun.they +
            ' heard.';
    }
    if (opinion > -5 && opinion <= 5) {
        reaction = reading.customer.pronoun.they + ' is neither pleased nor displeased.';
    }
    if (opinion > -15 && opinion <= -5) {
        reaction = reading.customer.pronoun.they + ' is unhappy with this reading.';
    }
    if (opinion <= -15) {
        reaction =
            reading.customer.pronoun.they +
            ' loathes what ' +
            reading.customer.pronoun.they +
            ' heard.';
    }

    reaction = caps(reaction);

    const payment = (reading.payment.gold == 0 && reading.payment.silver == 0)
        ? caps(reading.customer.pronoun.they) + ' refuses to pay.'
        : caps(reading.customer.pronoun.they) +
            ' hands you ' +
            reading.payment.gold +
            ' gold coin(s) and ' +
            reading.payment.silver +
            ' silver coin(s).'


    return (
        <>
            You report your findings to {reading.customer.pronoun.them}. {reaction}{' '}
            {payment}
        </>
    );
};