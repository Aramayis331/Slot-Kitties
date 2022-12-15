export const checkCombination = (win) => {
    let count = 1;
    let value = 0;
    for (let i = 0; i < win.length; i++) {
        if (win[i] === win[i + 1]) ++count;
        if (count >= 3) value = win[i];
    }
    return { count, value };
};

export const initialSpinValue = [...Array(3)].reduce((acc, _) => {
    acc.push([...Array(5)].map(() => Math.ceil(Math.random() * 10)))
    return acc;
}, []);

export const array =   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  // used values in radomization
//const weights = [  0.5 ,    0.2 ,  0.3 ];  // specific items probability (0.5 + 0.2 + 0.3 = 1.0) === 50% + 20% + 30% = 100%
const weights = [0.03, 0.02, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.5];

const createDistribution = (weights, size) => {
    const distribution = [];
    const sum = weights.reduce((a, b) => a + b);
    const quant = size / sum;
  	for (let i = 0; i < weights.length; ++i) {
      	const limit = quant * weights[i];
      	for (let j = 0; j < limit; ++j) {
          	distribution.push(i);
        }
    }
  	return distribution;
};

const randomIndex = (distribution) => {
  	const index = Math.floor(distribution.length * Math.random());
    return distribution[index];  
};

const randomItem = (array, distribution) => {
    const index = randomIndex(distribution);
    return array[index];
};

export const distribution = createDistribution(weights, 100);


export const randomItems = (array, distribution) => {
   return [...Array(5)].reduce((acc, _) => {
        acc.push(randomItem(array, distribution));
        return acc;
   }, [])
}

// console.log(randomItems(array, distribution));