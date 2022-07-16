import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
} from "@chakra-ui/react"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store, persister} from "redux/store"
import {App} from "App"

export const Container = () => (
    <Provider store={store}>
        <PersistGate persistor={persister} loading={
            <div>
                Your app is loading.
            </div>
        }>
            <ChakraProvider theme={theme}>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <VStack spacing={8}>
                            <App />
                        </VStack>
                    </Grid>
                </Box>
            </ChakraProvider>
        </PersistGate>
    </Provider>
)
