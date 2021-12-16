function inputStandard(data) {
    //checks if the input is an array.
    if (Array.isArray(data)) {
    //if so, return a copy of the array
        return data.slice()
    // if not, return a new array of the objects values     
    } else {
        return Object.values(data)
    }
}

function myEach(collection, callback) {
    let newCollection = inputStandard(collection)
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    } return collection
}

function myMap(collection, callback) {
    let newCollection = inputStandard(collection)
    let result = []
    for (let i = 0; i < newCollection.length; i++) {
        result.push(callback(newCollection[i]))
    } return result
}

const myReduce = function(collection, callback, acc = collection[0]) {
    let newCollection = inputStandard(collection)
    let result = acc
    for (let i = 0; i < newCollection.length; i++) {
        result =+ (callback(acc, newCollection[i], newCollection))
    } return result
}



