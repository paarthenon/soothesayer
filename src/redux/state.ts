import {Context} from 'core/context';
import {Event} from 'core/event';
import {Person} from 'core/person';
import {View} from 'core/view';
import {catalog, fields, TypeNames, variant, VariantOf} from 'variant';

export interface RootState {
    game?: GameState;
    view: View;
}

export interface GameState {
    silver: number;
    gold: number;
    activeReading?: Reading;
}

export interface Reading {
    customer: Person;
    subject: Person;
    /**
     * @todo Health, Wealth, or Love
     */
    focus?: unknown;
    stage: ReadingStage;
    timeline: Event[];
    context: Context;
    payment: {
        gold: number,
        silver: number
    }
}

export interface TimelineEvent {
    context: Context;
    event: Event;
}

export const ReadingStage = catalog([
    'greeting',
    'prophesy',
    'conclusion',
]);
export type ReadingStage = keyof typeof ReadingStage;

export const initState: RootState = {
    view: View.MainMenu(),
}

