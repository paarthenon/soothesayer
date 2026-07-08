import {MainMenu} from './ui/MainMenu';
import {useAppState} from './redux/hooks';
import {match} from 'variant';
import {AboutPage} from '@/ui/AboutPage';
import {OptionsPage} from '@/ui/OptionsPage';
import {Game} from '@/ui/Game';
import {Box, Button, Center, Grid, VStack} from '@chakra-ui/react';
import {AudioPlayer} from '@/ui/AudioPlayer';
import {ErrorBoundary} from 'react-error-boundary';
import {useDispatch} from 'react-redux';
import {DebugAction} from '@/redux/actions';
import {ColorModeButton} from './components/ui/color-mode';

export function App() {
    const view = useAppState(s => s.view);
    const dispatch = useDispatch();

    function resetEverything() {
        dispatch(DebugAction.ResetEverything());
        window.location.reload();
    }

    return (
        <ErrorBoundary fallback={
            <Box>
                The application has entered an error state.

                <Button onClick={resetEverything}>
                    Reset
                </Button>
            </Box>
        }>
            <Center>

            <Box className="App" maxW={'60rem'}>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <VStack gap={8}>
                            {match(view, {
                                About: _ => <AboutPage />,
                                Game: _ => <Game />,
                                MainMenu: _ => <MainMenu />,
                                Options: _ => <OptionsPage />,
                            })}
                        </VStack>
                    </Grid>
                </Box>

                <Box position={'absolute'} top={0} left={0} margin={0}>
                    <AudioPlayer></AudioPlayer>
                </Box>
                <Box position={'absolute'} top={0} right={0} margin={0}>
                    <ColorModeButton></ColorModeButton>
                </Box>
            </Box>
            </Center>

        </ErrorBoundary>
    );
}
