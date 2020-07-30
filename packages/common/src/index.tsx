import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {Home} from "./ui/screens/Home";

export const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Home />
            </SafeAreaView>
        </>
    );
};
