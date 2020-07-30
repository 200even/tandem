import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors.json';

interface Props {
    backgroundColor?: string;
    statTitle: string;
    statValue: string;
}

export const StatTile: React.FC<Props> = ({backgroundColor, statTitle, statValue}) => {
    return (
        <View style={[styles.card, {backgroundColor}]}>
            <View style={styles.statContainer}>
                <Text style={styles.titleText}>{statTitle}</Text>
                <Text style={styles.valueText}>{statValue}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: colors.urbanCity,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
        paddingVertical: 20,
        margin: 10,
        width: 175,
    },
    statContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        color: colors.vintage,
        fontWeight: 'bold',
        padding: 10,
    },
    valueText: {
      color: colors.vintage
    },
});
