
import {Box, Button, Center, Divider, Fade, Flex, Grid, HStack, IconButton, Image, Modal, ModalContent, ModalOverlay, Text, useDimensions, VStack} from '@chakra-ui/react';
import {Appearance} from 'core/person';
import {caps} from 'core/stringUtil';
import { resultOpinion } from 'core/resultOpinion';
import {View} from 'core/view';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState, useGame} from "redux/hooks";
import {Link} from 'ui/Link';
import {CustomerDescription, CustomerPortrait} from './CustomerDescription';
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


            <Box padding={8} maxWidth={800}>
                {reading?.stage === 'greeting' && <>
                    <Button onClick={beginReading}>
                        Begin reading
                    </Button>
                </>}

                {reading?.stage === 'conclusion' ? <Text>
                    <CustomerReaction />
                </Text> : null} 

                {(reading == undefined || reading.stage === 'conclusion') && (
                    <Button onClick={greetCustomer}>
                        Greet new customer
                    </Button>
                )}
            </Box>




            <Divider m={8} />
            <Link text='Main menu' goto={View.MainMenu()} />

            <Modal isOpen={isOpen} onClose={() => {}} id='fuckingmodal'>
                <ModalOverlay />
                <ModalContent>
                    <Reading />

                </ModalContent>

            </Modal>
        </Box>
    );
}

export const CustomerReaction = () => {
    const reading = useGame(g => g.activeReading!);
    const opinion = resultOpinion(reading);
    let reaction = "";

    if(opinion > 15){
        reaction = reading.customer.pronoun.they + " is very pleased!"
    }
    if(opinion > 5 && opinion <= 15){
        reaction = reading.customer.pronoun.they + " is happy with what " + reading.customer.pronoun.they + " heard."
    }
    if(opinion > -5 && opinion <= 5){
        reaction = reading.customer.pronoun.they + " is neither pleased nor displeased."
    }
    if(opinion > -15 && opinion <= -5){
        reaction = reading.customer.pronoun.they + " is unhappy with this reading."
    }
    if(opinion <= -15){
        reaction = reading.customer.pronoun.they + " loathes what " + reading.customer.pronoun.they + " heard."
    }

    reaction = caps(reaction)

    const payment = caps(reading.customer.pronoun.they) + " hands you " + reading.payment.gold + " gold coin(s) and " +
        reading.payment.silver + " silver coin(s)."

    return (
        <>
            You report your findings to {reading.customer.pronoun.them}.
            {' '}
            {reaction}
            {' '}
            {payment}
        </>
        
    )
}


export const GreetCustomer = () => {
    const dispatch = useDispatch();

    const customer = useGame(g => g.activeReading!.customer)

    return (
        <HStack maxWidth={'800'}>
            
            <CustomerPortrait customer={customer} />
            <VStack spacing={4}>
                <Text>
                    The bell rings marking another customer coming through the door. You wave at {customer.pronoun.them},
                    welcoming {customer.name} into your shop.
                </Text>
                <Text>
                    <CustomerDescription customer={customer} />
                </Text>

                <Text>
                    {caps(customer.pronoun.they)} takes a seat, glancing around the shop. <i>They always do this</i>. The new customers stare
                    in awe of the devices strewn about the room. The returning ones note what's changed since their last visit.
                    But inevitably it comes to the reading. The moment that the person on the other side of the table asks for your
                    insight... and your power.
                </Text>

            </VStack>
        </HStack>

    )
}