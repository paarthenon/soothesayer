import {Box, List, ListItem, VStack, Text, Divider, Button, Fade} from "@chakra-ui/react"
import {Event} from "core/event";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Action} from "redux/actions";
import {useGame} from "redux/hooks";
import {RenderEvent} from "./event/RenderEvent";

export const Reading = () => {
    const dispatch = useDispatch();

    const [showText, setShowText] = useState(false);

    const customer = useGame(g => g.activeReading!.customer);
    const reading = useGame(g => g.activeReading!);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 150)
    }, [])

    return (
        <Box margin={4}>
            <Text>You commune with the Altar of fate, placing your palm flat against its top. Gold and silver coins litter the surface, stacked between melting candles.</Text>
            <Text>The vision takes you. The mind's eye resolves to the beginning of an image...</Text>

            <Fade in={showText} style={{
                transitionDuration: 'var(--chakra-transition-duration-ultra-slow)'
            }}>
                <VStack gap={2} margin={4} opacity={.5}>
                    {reading.timeline.map(te => (
                        <RenderEvent event={te} context={reading.context} />
                    ))}
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