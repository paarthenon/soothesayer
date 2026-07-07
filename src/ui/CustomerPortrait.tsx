import {Appearance, Person} from '@/core/person';
import {he, she} from '@/core/pronoun';
import {Image} from '@chakra-ui/react';
import {PORTRAIT_HEIGHT, PORTRAIT_WIDTH} from '@/gen/defaults';

import PatriarchFem from '@/img/Patriarch.png';
import PatriarchMasc from '@/img/Rembrandt Self-portrait 1937.1.72.jpg';
import Gypsy from '@/img/Gypsy.png';
import Mercenary from '@/img/Mercenary.jpg';
import BeggarMale from '@/img/MaleBeggar - 1987.1140.1.jpg';

export interface CustomerPortraitProps {
    customer: Person
}

export const CustomerPortrait = ({customer}: CustomerPortraitProps) => {
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
