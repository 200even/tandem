import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../colors.json';

interface Props {
    label: string;
    onPress: () => void;
}

export const Button: React.FC<Props> = ({label, onPress}) => (
    <TouchableOpacity accessibilityLabel='Refresh' style={styles.button} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 16,
        backgroundColor: colors.blueYonder,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.vintage,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.vintage,
        padding: 20,
    },
});
