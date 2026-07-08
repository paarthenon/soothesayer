import {
    Steps,
    Box,
    IconButton,
    Slider,
    SliderTrack,
    SliderThumb,
} from '@chakra-ui/react';
import Song1 from '../music/Stay the Course.mp3';

const audioCtx = new AudioContext();

export const AudioPlayer = () => (
    <Box>
        <audio
            controls
            src={Song1}
            style={{
                width: '100%',
            }}
        >
            Your browser does not support the audio element.
        </audio>
    </Box>
);
