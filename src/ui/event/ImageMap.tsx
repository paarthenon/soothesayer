import {Icon} from '@chakra-ui/react';
import {Event} from 'core/event';
import {GiBuyCard} from 'react-icons/gi';
import {GiSwapBag} from 'react-icons/gi';
import {GiDrowning} from 'react-icons/gi';
import {GiBowieKnife} from 'react-icons/gi';
import {GiLovers} from 'react-icons/gi';
import {GiJourney} from 'react-icons/gi';
import {GiCrossroad} from 'react-icons/gi';
import {GiFemaleLegs} from 'react-icons/gi';
import {GiHighPunch} from 'react-icons/gi';
import {GiBrokenHeart} from 'react-icons/gi';
import {GiStorkDelivery} from 'react-icons/gi';

export const ImageMap: Record<Event['type'], JSX.Element> = {
    Relic: <Icon as={GiBuyCard} aria-label="relic" />,
    FoundMoney: <Icon as={GiSwapBag} aria-label="found money" />,
    Drowning: <Icon as={GiDrowning} aria-label="drowning" />,
    Mugged: <Icon as={GiBowieKnife} aria-label="mugging" />,
    Love: <Icon as={GiLovers} aria-label="love" />,
    Arrival: <Icon as={GiJourney} aria-label="arrival" />,
    Fork: <Icon as={GiCrossroad} aria-label="crossroad" />,
    Prostitute: <Icon as={GiFemaleLegs} aria-label="legs" />,
    Fight: <Icon as={GiHighPunch} aria-label="punch" />,
    Breakup: <Icon as={GiBrokenHeart} aria-label="broken heart" />,
    Child: <Icon as={GiStorkDelivery} aria-label="baby" />,
};
