import {
    calculateMean,
    calculateMedian,
    calculateMode,
    calculateStandardDeviation,
} from "./calculate";
import firstDataSet from '../data/data-1234.json';
import secondDataSet from '../data/data-4321.json';

describe('calculate utils', () => {
   describe('calculateMean', () => {
      it('returns the expected mean for all positive integers', () => {
          const data = [1,2,3,4,5,6,7,8,9];
          expect(calculateMean(data)).toBe(5);
      });
      it('returns the expected mean for all negative integers', () => {
          const data = [-1,-2,-3,-4,-5,-6,-7,-8,-9];
          expect(calculateMean(data)).toBe(-5);
      });
      it('returns the expected mean for all zeros', () => {
          const data = [0,0,0,0,0];
          expect(calculateMean(data)).toBe(0);
      });
      it('returns the expected mean for firstDataSet', () => {
          expect(calculateMean(firstDataSet.data).toFixed(6)).toBe('49.457050');
      });
       it('returns the expected mean for firstDataSet with 42 added', () => {
           const data = [...firstDataSet.data];
           data.push(42);
           expect(calculateMean(data).toFixed(6)).toBe('49.451012');
       });
   });

    describe('calculateMedian', () => {
        it('returns the expected median for an EVEN number of entries', () => {
            const data = [1,2,3,4];
            expect(calculateMedian(data)).toBe(2.5);
        });
        it('returns the expected median for test data set', () => {
            expect(calculateMedian(firstDataSet.data)).toBe(49);
        });
        it('returns the expected median for test data set with 42 added', () => {
            const data = [...firstDataSet.data];
            data.push(42);
            expect(calculateMedian(data)).toBe(49);
        });
        it('returns the expected median for test data set', () => {
            expect(calculateMedian(secondDataSet.data)).toBe(51);
        });
        it('returns the expected median for test data set with 42 added', () => {
            const data = [...secondDataSet.data];
            data.push(42);
            expect(calculateMedian(data)).toBe(51);
        });
    });

    describe('calculateMode', () => {
        it('returns the expected mode for a simple set of integers', () => {
            const data = [1,2,3,5,5,5,6,7];
            expect(calculateMode(data)).toBe(5);
        });
        it('returns the expected mode for firstDataSet', () => {
            const data = [...firstDataSet.data];
            expect(calculateMode(data).toFixed(6)).toBe('77.000000');
        });
        it('returns the expected mode for firstDataSet with 42 added', () => {
            const data = [...firstDataSet.data];
            data.push(42);
            expect(calculateMode(data).toFixed(6)).toBe('77.000000');
        });
        it('returns the expected mode for secondDataSet', () => {
            const data = [...secondDataSet.data];
            expect(calculateMode(data).toFixed(6)).toBe('82.000000');
        });
        it('returns the expected mode for secondDataSet with 42 added', () => {
            const data = [...secondDataSet.data];
            data.push(42);
            expect(calculateMode(data).toFixed(6)).toBe('82.000000');
        });
    });

    describe('calculateStandardDeviation', () => {
        it('returns the expected standard deviation for a positive integer set', () => {
           const data = [1,2,3,5,8,13,21];
           expect(calculateStandardDeviation(data).toFixed(6)).toBe('7.207800');
        });
        it('returns the expected standard deviation for firstDataSet', () => {
           expect(calculateStandardDeviation(firstDataSet.data).toFixed(6)).toBe('28.810315');
        });
        it('returns the expected standard deviation for firstDataSet with 42 added', () => {
            const data = [...firstDataSet.data];
            data.push(42);
            expect(calculateStandardDeviation(data).toFixed(6)).toBe('28.799421');
        });
        it('returns the expected standard deviation for secondDataSet', () => {
            expect(calculateStandardDeviation(secondDataSet.data).toFixed(6)).toBe('29.191159');
        });
        it('returns the expected standard deviation for secondDataSet with 42 added', () => {
            const data = [...secondDataSet.data];
            data.push(42);
            expect(calculateStandardDeviation(data).toFixed(6)).toBe('29.188057');
        });
    });
});
