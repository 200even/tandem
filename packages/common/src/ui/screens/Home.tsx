import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {StatTile} from '../components/StatTile';
import colors from '../colors.json';
import {Button} from "../components/Button";

export const Home: React.FC = () => {
  const [stats, setStats] = useState([
    {
      name: 'Mean',
      value: '0',
      color: colors.passionRed,
    },
    {
      name: 'Median',
      value: '0',
      color: colors.ultraViolet,
    },
    {
      name: 'Standard Deviation',
      value: '0',
      color: colors.urbanCity,
    },
    {
      name: 'Mode',
      value: '0',
      color: colors.blueYonder,
    },
  ]);

  return (
    <ScrollView>
      <Text style={styles.headerText}>Calculated Values:</Text>
      <View style={styles.statTilesContainer}>
        {stats.map(stat => {
          return <StatTile key={stat.name} statTitle={stat.name} statValue={stat.value} backgroundColor={stat.color} />
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button label='Refresh' onPress={() => console.log('Button clicked')} />
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 30,
  },
  statTilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
});
