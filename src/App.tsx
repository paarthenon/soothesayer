import {MainMenu} from './ui/MainMenu';
import {useAppState} from './redux/hooks';
import {match} from 'variant';
import {AboutPage} from 'ui/AboutPage';
import {OptionsPage} from 'ui/OptionsPage';
import {Game} from 'ui/Game';
import {Box} from '@chakra-ui/react';

export function App() {
    const view = useAppState(s => s.view);
    return (
        <Box className="App">
            {match(view, {
                About: _ => <AboutPage />,
                Game: _ => <Game />,
                MainMenu: _ => <MainMenu />,
                Options: _ => <OptionsPage />,
                Reading: _ => <div>Unimplemented</div>,
            })}
        </Box>
    );
}
