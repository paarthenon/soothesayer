import { Steps, Icon } from '@chakra-ui/react';
import {Event} from '@/core/event';
import {RiParentLine} from 'react-icons/ri';
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

export const EventImageMap: Record<Event['type'], JSX.Element> = {
    Ancestor: <Icon aria-label="ancestor revealed" asChild><RiParentLine /></Icon>,
    Relic: <Icon aria-label="relic" asChild><GiBuyCard /></Icon>,
    FoundMoney: <Icon aria-label="found money" asChild><GiSwapBag /></Icon>,
    Drowning: <Icon aria-label="drowning" asChild><GiDrowning /></Icon>,
    Mugged: <Icon aria-label="mugging" asChild><GiBowieKnife /></Icon>,
    Love: <Icon aria-label="love" asChild><GiLovers /></Icon>,
    Arrival: <Icon aria-label="arrival" asChild><GiJourney /></Icon>,
    Fork: <Icon aria-label="crossroad" asChild><GiCrossroad /></Icon>,
    Prostitute: <Icon aria-label="legs" asChild><GiFemaleLegs /></Icon>,
    Fight: <Icon aria-label="punch" asChild><GiHighPunch /></Icon>,
    Breakup: <Icon aria-label="broken heart" asChild><GiBrokenHeart /></Icon>,
    Child: <Icon aria-label="baby" asChild><GiStorkDelivery /></Icon>,
};
