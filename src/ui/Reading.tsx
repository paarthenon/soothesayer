import {Box, List, ListItem, VStack, Text, Divider, Button, Fade} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Action} from "redux/actions";

export const Reading = () => {
    const dispatch = useDispatch();

    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 150)
    }, [])

    return (
        <Box margin={4}>
            <Text>You commune with the Altar of Omens</Text>
            <Text>Here is what the future has in store...</Text>

            <Fade in={showText} style={{
                transitionDuration: 'var(--chakra-transition-duration-ultra-slow)'
            }}>
                <VStack gap={2} margin={4} opacity={.5}>
                    <Text>Tyranel went to the city of Amaranth to pick up a package they inherited from their father.</Text>
                    <Text>When he arrived, everything was more expensive than expected. He could only afford to stay in a shady part of town.</Text>
                    <Text>Tyranel got mugged. They demanded his property. He fought back and was killed.</Text>
                </VStack>
            </Fade>


            <Button onClick={() => {
                dispatch(Action.ReportReading());
            }}>
                End reading
            </Button>
        </Box>
    )
}