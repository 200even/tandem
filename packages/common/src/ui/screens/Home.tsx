import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {StatTile} from '../components/StatTile';
import {Button} from '../components/Button';
import colors from '../colors.json';
import {getStatistics} from '../../services/statistics.service';

export const Home: React.FC = () => {
  const [stats, setStats] = useState([{name: 'Mean', value: '0', color: colors.urbanCity}]);
  const [value, onChangeText] = useState('');

  useEffect(() => {
    refreshStats();
  }, []);

  const refreshStats = async() => {
    const {mean, median, standardDeviation, mode} = await getStatistics();
    setStats([
      {
        name: 'Mean',
        value: mean,
        color: colors.passionRed,
      },
      {
        name: 'Median',
        value: median,
        color: colors.ultraViolet,
      },
      {
        name: 'Standard Deviation',
        value: standardDeviation,
        color: colors.urbanCity,
      },
      {
        name: 'Mode',
        value: mode,
        color: colors.blueYonder,
      },
    ])
  };

  const addValue = () => {
    console.log(`adding value: ${value} to numbers array`);
    // TODO: implement adding value to stored numbers and update UI
    onChangeText('');
  };

  return (
    <ScrollView>
      <Text style={styles.headerText}>Calculated Values:</Text>
      <View style={styles.statTilesContainer}>
        {stats.map(stat => {
          return <StatTile key={stat.name} statTitle={stat.name} statValue={stat.value} backgroundColor={stat.color} />
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button label='Refresh' onPress={refreshStats} />
      </View>
      <Text style={styles.headerText}>Add Value:</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={addValue} label={'Add'}/>
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
  textInput: {
    alignSelf: 'center',
    paddingLeft: 10,
    height: 40,
    width: 50,
    borderColor: colors.urbanCity,
    borderWidth: 1,
  },
});
