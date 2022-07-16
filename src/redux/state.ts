import {Person} from 'core/person';
import {View} from 'core/view';

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
    communing: boolean;
}

export const initState: RootState = {
    view: View.MainMenu(),
}

