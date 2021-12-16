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


function myFirst(array, n){
    if(n){
        return array.slice(0, n)
    } else{
        return array[0]
    } 
}

function myLast(array, n){
    if(n){
        return array.slice(n, array.length-1)
    } else{
        return array[array.length-1]
    } 
}
