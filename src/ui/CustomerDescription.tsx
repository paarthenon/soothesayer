import {Image} from '@chakra-ui/react';
import {Appearance, Person} from 'core/person';
import {caps} from 'core/stringUtil';
import {match} from 'variant';
import {he, she} from 'core/pronoun';
import {PORTRAIT_HEIGHT, PORTRAIT_WIDTH} from 'gen/defaults';

import PatriarchFem from 'img/Patriarch.png';
import PatriarchMasc from 'img/Rembrandt Self-portrait 1937.1.72.jpg';
import Gypsy from 'img/Gypsy.png';
import Mercenary from 'img/Mercenary.jpg';
import BeggarMale from 'img/MaleBeggar - 1987.1140.1.jpg';

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
        TravelingSoldier: _ => (
            <>
                {caps(customer.pronoun.they)} is sporting a sharp uniform, with reinforced panels
                along {customer.pronoun.their} chestplate and leggings.
            </>
        )
    });
};

export const CustomerPortrait = ({customer}: CustomerDescriptionProps) => {
    const DEFAULT_IMAGE = 'https://via.placeholder.com/250x400';
    let srcMap: Record<Appearance['type'], [male: string, female: string]> = {
        FamilyHead: [PatriarchMasc, PatriarchFem],
        Worker: [BeggarMale, Gypsy],
        TravelingSoldier: [Mercenary, Mercenary],
    };

    let [maleArt, femaleArt] = srcMap[customer.appearance.type];
    const imgSrc = (customer.pronoun.they === he.they) ? maleArt : femaleArt;

    return <Image
        src={imgSrc ?? DEFAULT_IMAGE}
        maxH={PORTRAIT_HEIGHT}
        maxW={PORTRAIT_WIDTH}
    />;
};
