
import {Box, Button, Center, Fade, HStack, Modal, ModalContent, ModalOverlay, Text, useDimensions} from '@chakra-ui/react';
import {Appearance} from 'core/person';
import {View} from 'core/view';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState, useGame} from "redux/hooks";
import {Link} from 'ui/Link';
import {Reading} from './Reading';

export const Game = () => {
    const gold = useGame(g => g.gold);
    const silver = useGame(g => g.silver);

    const dispatch = useDispatch();

    const customer = useGame(g => g.activeReading && g.activeReading.customer);

    function greetCustomer() {
        dispatch(Action.GreetCustomer());
    }
    console.log('customer', customer);

    const isOpen = useGame(g => g.activeReading ? g.activeReading.stage === 'prophesy' : false);
    return (
        <Box>
            <Text>The game itself</Text>

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

            {customer ? (
                <>
                    <GreetCustomer />
                </>
            ) : (
                <Button onClick={greetCustomer}>
                    Greet Customer
                </Button>
            )}


            <Link text='Main menu' goto={View.MainMenu()} />

            <Modal isOpen={isOpen} onClose={() => {}}>
                <ModalOverlay />
                <ModalContent>
                    <Reading />

                </ModalContent>

            </Modal>
        </Box>
    );
}


export const GreetCustomer = () => {
    const dispatch = useDispatch();

    const customer = useGame(g => g.activeReading!.customer)
    function beginReading() {
        dispatch(Action.BeginReading());
    }
    return (
        <Box>
            <Text>
                Welcome, {customer.name};
            </Text>
            <Button onClick={beginReading}>
                Begin reading
            </Button>
        </Box>
    )
}