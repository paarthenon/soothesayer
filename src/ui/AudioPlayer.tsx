import {Box, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark} from '@chakra-ui/react';
import Song1 from '../music/Stay the Course.mp3';

const audioCtx = new AudioContext();

export const AudioPlayer = () => (
    <Box>
        <audio
            controls
            src={Song1}>
                Your browser does not support the audio element.
            </audio>
    </Box>
);