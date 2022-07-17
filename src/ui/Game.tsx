
import {Box, Button, Center, Divider, Fade, HStack, IconButton, Modal, ModalContent, ModalOverlay, Text, useDimensions} from '@chakra-ui/react';
import {Appearance} from 'core/person';
import {View} from 'core/view';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState, useGame} from "redux/hooks";
import {Link} from 'ui/Link';
import {CustomerDescription} from './CustomerDescription';
import {Reading} from './Reading';

export const Game = () => {
    const gold = useGame(g => g.gold);
    const silver = useGame(g => g.silver);

    const dispatch = useDispatch();

    const reading = useGame(g => g.activeReading);
    const customer = useGame(g => g.activeReading && g.activeReading.customer);

    function greetCustomer() {
        dispatch(Action.GreetCustomer());
    }

    function beginReading() {
        dispatch(Action.BeginReading());
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

            {customer && (
                <>
                    <GreetCustomer />
                </>
            )}


            {reading?.stage === 'greeting' && <>
                <Button onClick={beginReading}>
                    Begin reading
                </Button>
            </>}

            {reading?.stage === 'conclusion' ? <Text>
                You report your findings to {reading.customer.pronoun.them}. She is not pleased.
            </Text> : null} 

            {(reading == undefined || reading.stage === 'conclusion') && (
                <Button onClick={greetCustomer}>
                    Greet new customer
                </Button>
            )}


            <Divider m={8} />
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

    return (
        <Box>
            <Text>
                Welcome, {customer.name}.
            </Text>
            <CustomerDescription customer={customer} />

        </Box>
    )
}