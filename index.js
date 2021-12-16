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
    let target
    for (let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
            return target = newCollection[i]
        }
    }return target
}

function myFilter(collection, predicate){
    let newCollection = inputStandard(collection)
    let filteredArray = []
    for (let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
            filteredArray.push(newCollection[i])
        }
    }return filteredArray
}

function mySize(collection){
    let newCollection = inputStandard(collection)
    return newCollection.length
}

function checkArray(data){
    if(Array.isArray(data)){
        return data.slice
    } else{
        return [data]
    }
}

const arr = [3,2,3,4,5,6]
myFirst(arr, 3)

function myFirst(array, n){
    let arrayStandard = checkArray(array)
    let result
    if(!n){
        result = arrayStandard[0]
    } else{
        result = arrayStandard.slice[0, n - 1]
    } return result
}

