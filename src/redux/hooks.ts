import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {GameState, RootState} from './state';

export const useAppState: TypedUseSelectorHook<RootState> = useSelector;
export function useGame(): GameState;
export function useGame<T>(selector: (game: GameState) => T): T;
export function useGame<T>(selector?: (game: GameState) => T) {
    const game = useAppState(s => s.game);
    if (game) {
        return selector ? selector(game) : game;
    } else {
        throw new Error('Attempted to render without a game save loaded.');
    }
}
