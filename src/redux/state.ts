import {Context} from 'core/context';
import {Event} from 'core/event';
import {Person} from 'core/person';
import {View, MenuView} from 'core/view';
import {catalog, fields, TypeNames, variant, VariantOf} from 'variant';

export interface RootState {
    game?: GameState;
    view: MenuView;
}

export interface GameState {
    coins: CoinPurse;
    activeReading?: Reading;
    people: Record<string, Person>;
    view: View;
}

export interface CoinPurse {
    silver: number;
    gold: number;
    // TODO: Consider retaining some identity of who the coin came from.
    soul: number;
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
        gold: number;
        silver: number;
    };
}

export interface TimelineEvent {
    context: Context;
    event: Event;
}

export const ReadingStage = catalog(['greeting', 'prophesy', 'conclusion']);
export type ReadingStage = keyof typeof ReadingStage;

export const initState: RootState = {
    view: MenuView.MainMenu(),
};
