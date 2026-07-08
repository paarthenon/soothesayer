import * as React from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { Steps, ChakraProvider } from '@chakra-ui/react';
import {myTheme} from './Container';

const AllProviders = ({children}: {children?: React.ReactNode}) => (
    <ChakraProvider value={myTheme}>{children}</ChakraProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, {wrapper: AllProviders, ...options});

export {customRender as render};
