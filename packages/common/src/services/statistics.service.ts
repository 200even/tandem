import {calculateMean, calculateMedian, calculateMode, calculateStandardDeviation} from "../utils/calculate";
import firstDataSet from '../data/data-1234.json';

export const getStatistics = async () => {
  try {
    // sf: using a local node server to alternate the response between number sets. local data file catch as backup for dev/testing
    const response = await fetch('http://localhost:8888/getNumbers')
        .catch(() => ({json: () => firstDataSet}));
    const {data} = await response.json();
    const mean = calculateMean(data).toFixed(6);
    const median = calculateMedian(data).toFixed(6);
    const standardDeviation = calculateStandardDeviation(data).toFixed(6);
    const mode = calculateMode(data).toFixed(6);
    return {mean, median, standardDeviation, mode};
  } catch (err) {
    console.error('statistics.service::getStatistics', err);
    return {mean: '0', median: '0', standardDeviation: '0', mode: '0'};
  }
};
