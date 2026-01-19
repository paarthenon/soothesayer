import {
    Box,
    Button,
    Center,
    Divider,
    HStack,
    Modal,
    ModalContent,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import {MenuView} from 'core/view';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useGame} from 'redux/hooks';
import {Link} from 'ui/Link';
import {Reading as ReadingView} from './Reading';
import {ReadingStage} from 'redux/state';
import {CustomerReaction} from './CustomerReaction';
import {GreetCustomer} from './GreetCustomer';

export const Game = () => {
    const gold = useGame(g => g.coins.gold);
    const silver = useGame(g => g.coins.silver);
    
    const view = useGame(g => g.view);

    const dispatch = useDispatch();

    const reading = useGame(g => g.activeReading);
    const customer = useGame(g => g.activeReading && g.activeReading.customer);

    function greetCustomer() {
        dispatch(Action.GreetCustomer());
    }

    function beginReading() {
        dispatch(Action.BeginReading());
    }

    const isOpen = useGame(g =>
        g.activeReading ? g.activeReading.stage === ReadingStage.prophesy : false
    );
    return (
        <Box>
            <Center>
                <HStack>
                    <Box>
                        <Text>Gold</Text>
                        <Text>{gold}</Text>
                    </Box>
                    <Box>
                        <Text>Silver</Text>
                        <Text>{silver}</Text>
                    </Box>
                </HStack>
            </Center>

            {customer && (
                <>
                    <GreetCustomer customer={customer} />
                </>
            )}

            <Box padding={8} maxWidth={800}>
                {reading?.stage === ReadingStage.greeting && (
                    <>
                        <Button onClick={beginReading}>Begin reading</Button>
                    </>
                )}

                {reading?.stage === ReadingStage.conclusion ? (
                    <Text>
                        <CustomerReaction reading={reading} />
                    </Text>
                ) : null}

                {(reading == undefined || reading.stage === ReadingStage.conclusion) && (
                    <Button onClick={greetCustomer}>Greet new customer</Button>
                )}
            </Box>

            <Divider m={8} />
            <Link text="Main menu" goto={MenuView.MainMenu()} />

            <Modal isOpen={isOpen} onClose={() => {}} id="fuckingmodal">
                <ModalOverlay />
                <ModalContent>
                    <ReadingView />
                </ModalContent>
            </Modal>
        </Box>
    );
};

