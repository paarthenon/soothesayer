import {Box, Button, Center, Heading, Text, VStack} from '@chakra-ui/react'
import {View} from 'core/view';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useGame} from 'redux/hooks';

export const TutorialPage = () => {
    const townName = useGame(g => g.town.name)
    const dispatch = useDispatch();

    function beginGame() {
        dispatch(Action.GoTo(View.Home()))
    }

   return (
        <Center>
        <VStack maxWidth={'80%'} padding={0} margin={0}>
            <Heading>Welcome, Soothesayer.</Heading>

            <Text>
                You are a prophet, master of the future unfulfilled.
                You offer your services to the people of {townName},
                but the people are soft. They do not want truth,
                they want <i>validation</i>. They want a promise of effortless success.
                And if they don't get it... they won't pay.
            </Text>

            <Text>
                But you have <i>influence</i> of your own. Spend a silver coin
                to nudge the future, and a gold coin to rewrite fate.
                Walk that delicate balance, spending enough coin to satisfy
                your customers but not empty your coffers. Manage your clientele
                as you guide them through time itself.
            </Text>

            <Button onClick={beginGame}>Begin</Button>
        </VStack>
        </Center>

   )
}

