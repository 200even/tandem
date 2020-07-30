import React from 'react';
import {
    SafeAreaView,
    Text,
    StatusBar,
} from 'react-native';

export const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Hello Tandem</Text>
            </SafeAreaView>
        </>
    );
};
