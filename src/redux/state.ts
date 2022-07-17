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
    /**
     * @todo:
     * 
     * Consider replacing this with something like a stage, featuring events
     * Greeting
     * Reading
     * Conclusion
     */
    stage: ReadingStage;
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

