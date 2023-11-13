console.clear();

const skaiciai = [10, 2, 8, 4, 6, 12]
 
// VIDURKIS

function average (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++ ) {
        sum += array[i];
        
    }
    return sum / array.length
}

const vidurkis = average(skaiciai)

console.log(vidurkis)
console.log('------------------')

// MEDIANA


function median(array) {
    array.sort((a, b) => a - b);
    const middle = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2;
    } else {
        return array[middle];
    }
}

const mediana = median(skaiciai);
console.log(mediana)