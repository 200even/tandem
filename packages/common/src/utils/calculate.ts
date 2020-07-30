export const calculateMean = (data: Array<number>): number => data.reduce((a, b) => a + b) / data.length;

export const calculateMedian = (data: Array<number>): number => {
    const sorted = data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
};

export const calculateStandardDeviation = (data: Array<number>): number => {
    const m = calculateMean(data);
    return Math.sqrt(data.reduce((sq, n) => {
        return sq + Math.pow(n - m, 2);
    }, 0) / (data.length - 1));
};

export const calculateMode = (data: Array<number>): number => {
    const map = new Map();
    let maxFreq = 0;
    let mode = data[0];

    data.forEach(item => {
        let freq = map.has(item) ? map.get(item) : 0;
        freq++;

        if(freq > maxFreq) {
            maxFreq = freq;
            mode = item;
        }

        map.set(item, freq);
    });
    return mode;
};
