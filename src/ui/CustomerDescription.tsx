import {Image} from '@chakra-ui/react';
import {Appearance, Person} from 'core/person';
import {caps} from 'core/stringUtil';
import {match} from 'variant';
import Patriarch from 'img/Patriarch.png';
import Gypsy from 'img/Gypsy.png';

interface CustomerDescriptionProps {
    customer: Person;
}
export const CustomerDescription = ({customer}: CustomerDescriptionProps) => {
    return match(customer.appearance, {
        FamilyHead: _ => (
            <>
                {caps(customer.pronoun.they)} is wearing a fine outfit today.{' '}
                {caps(customer.pronoun.their)} clothes are tastefully tailored with modest
                but well-crafted decorations.
            </>
        ),
        Worker: _ => (
            <>
                {caps(customer.pronoun.they)} is dressed in simple work clothes. The
                fabric is wrinkled and lightly stained, but functional.{' '}
            </>
        ),
    });
};

export const CustomerPortrait = ({customer}: CustomerDescriptionProps) => {
    const DEFAULT_IMAGE = 'https://via.placeholder.com/250x400';
    let srcMap: Record<Appearance['type'], string> = {
        FamilyHead: Patriarch,
        Worker: Gypsy,
    };

    return <Image src={srcMap[customer.appearance.type] ?? DEFAULT_IMAGE}></Image>;
};
