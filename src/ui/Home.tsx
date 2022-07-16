
import {Box, Text} from '@chakra-ui/react';
import {View} from 'core/view';
import {useAppState, useGame} from "redux/hooks";
import {Link} from 'ui/Link';

export const Home = () => {
    // const game = useGame();
    return (
        <Box>
            <Text>The game itself</Text>

            <Link text='Main menu' goto={View.MainMenu()} />
        </Box>
    );
}