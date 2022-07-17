import {Box, Heading, Text, List, ListItem, useDisclosure, Image} from '@chakra-ui/react';
import {View} from 'core/view';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState} from "redux/hooks";
import {Link} from 'ui/Link';
import cover from 'img/cover.png';

export interface MainMenuProps { }
export const MainMenu = ({ }: MainMenuProps) => {
    const isGameRunning = useAppState(s => s.game != undefined);
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
            <List>
                {isGameRunning && (
                    <ListItem>
                        <Link text='Resume' goto={View.Game()} />
                    </ListItem>
                )}
                <ListItem>
                    <Link text='New Game' onClick={newGame}/>
                </ListItem>
                <ListItem>
                    <Link text='Options' goto={View.Options()} />
                </ListItem>
                <ListItem>
                    <Link text='About' goto={View.About()} />
                </ListItem>
            </List>
        </Box>
    );
}