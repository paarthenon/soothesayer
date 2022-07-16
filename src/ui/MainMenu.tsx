import {Box, Heading, Text, List, ListItem} from '@chakra-ui/react';
import {View} from 'core/view';
import {useAppState} from "redux/hooks";
import {Link} from 'ui/Link';

export interface MainMenuProps { }
export const MainMenu = ({ }: MainMenuProps) => {
    const isGameRunning = useAppState(s => s.game != undefined);
    return (
        <Box>
            <Heading>Soothe Sayer</Heading>
            <Text>
                Find what fate has in store, then tell it to fuck off
            </Text>
            <List>
                {isGameRunning && (
                    <ListItem>
                        <Link text='Resume' goto={View.Home()} />
                    </ListItem>
                )}
                <ListItem>
                    <Link text='New Game' goto={View.Home()} />
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