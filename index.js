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

const myReduce = function(collection, callback, acc) {
    let newCollection = inputStandard(collection)
    if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = (callback(acc, newCollection[i], newCollection))
    } return acc
}

function myFind(collection, predicate){
    let newCollection = inputStandard(collection)
    let filteredArray = []
    for (let i = 0; i < newCollection.length; i++){
        let result = predicate(newCollection[i])
        if(result){
            filteredArray.push(newCollection[i])
        }return filteredArray
    }
}

