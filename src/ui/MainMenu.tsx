import {Box, Text, List, Image } from '@chakra-ui/react';
import {MenuView} from '@/core/view';
import {useDispatch} from 'react-redux';
import {Action} from '@/redux/actions';
import {useAppState} from '@/redux/hooks';
import {Link} from '@/ui/Link';
import cover from '@/img/cover.png';

export interface MainMenuProps {}
export const MainMenu = ({}: MainMenuProps) => {
    const game = useAppState(s => s.game);
    const isGameRunning = game != undefined;
    const dispatch = useDispatch();

    function newGame() {
        dispatch(Action.StartGame());
    }
    return (
        <Box>
            <Image src={cover} />
            <Text>
                Fate can be cruel, but people don't tip for bad news.
                {/* Find what fate has in store, then tell it to fuck off */}
            </Text>
            <List.Root listStyleType='none'>
                {isGameRunning && (
                    <List.Item>
                        <Link text="Resume" goto={MenuView.Game()} />
                    </List.Item>
                )}
                <List.Item>
                    <Link text="New Game" onClick={newGame} />
                </List.Item>
                <List.Item>
                    <Link text="Options" goto={MenuView.Options()} />
                </List.Item>
                <List.Item>
                    <Link text="About" goto={MenuView.About()} />
                </List.Item>
            </List.Root>
        </Box>
    );
};
