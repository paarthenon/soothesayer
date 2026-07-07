import {Box, VStack, Text, Button, Fade, Img} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Action} from '@/redux/actions';
import {useGame} from '@/redux/hooks';
import {RenderEvent} from './event/RenderEvent';
import tableTop from '@/img/Henri_Matisse_-_Still_Life_with_Books_and_Candle_-_(MeisterDrucke-1550504).jpg';

export const Reading = () => {
    const dispatch = useDispatch();

    const [showText, setShowText] = useState(false);

    const customer = useGame(g => g.activeReading!.customer);
    const reading = useGame(g => g.activeReading!);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 150);
    }, []);

    return (
        <Box margin={4}>
            <VStack>
                <Img src={tableTop} />
                <Text>
                    You commune with the Altar of fate, placing your palm flat against its
                    top. Gold and silver coins litter the surface, stacked between melting
                    candles.
                </Text>
                <Text>
                    The vision takes you. Your mind's eye resolves to the beginning of an
                    image... an image of a person that does not yet exist.
                </Text>
            </VStack>

            <Fade
                in={showText}
                style={{
                    transitionDuration: 'var(--chakra-transition-duration-ultra-slow)',
                }}
            >
                <VStack gap={2} margin={4} opacity={0.7}>
                    {reading.timeline.map((timelineEvent, position) => (
                        <RenderEvent
                            key={position}
                            event={timelineEvent}
                            context={reading.context}
                            rerollFunc={metal => {
                                dispatch(
                                    Action.AlterDice({
                                        position,
                                        rerollType: metal,
                                    })
                                );
                            }}
                        />
                    ))}
                </VStack>
            </Fade>

            <Button
                onClick={() => {
                    dispatch(Action.ReportReading());
                }}
            >
                End reading
            </Button>
        </Box>
    );
};
