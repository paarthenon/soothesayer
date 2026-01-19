import {HStack, VStack, Text} from '@chakra-ui/react';
import {Person} from 'core/person';
import {caps} from 'core/stringUtil';
import {CustomerPortrait, CustomerDescription} from './CustomerDescription';

export interface GreetCustomerProps {
    customer: Person;
}
export const GreetCustomer = ({customer}: GreetCustomerProps) => {

    return (
        <HStack maxWidth={'800'}>
            <CustomerPortrait customer={customer} />
            <VStack spacing={4}>
                <Text>
                    The bell rings marking another customer coming through the door. You
                    wave to {customer.pronoun.them}, welcoming <b>{customer.name}</b> into your
                    shop.
                </Text>
                <Text>
                    <CustomerDescription customer={customer} />
                </Text>

                <Text>
                    {caps(customer.pronoun.they)} takes a seat, glancing around the shop.{' '}
                    <i>They always do this</i>. The new customers stare in awe of the
                    devices strewn about the room. The returning ones note what's changed
                    since their last visit. But inevitably it comes to the reading. The
                    moment that the person on the other side of the table asks for your
                    insight... and your power.
                </Text>
            </VStack>
        </HStack>
    );
};
