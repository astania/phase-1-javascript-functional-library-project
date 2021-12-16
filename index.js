function myEach(collection, callback) {
    let newCollection = Array.from(collection)
    if (Array.isArray(collection)) {
        for (let i = 0; i < newCollection.length; i++) {
            callback(newCollection[i])
        } return collection
    } else {
        return myEach(Object.values(collection), callback)
    }
}

function myMap(collection, callback) {
    let newCollection = Array.from(collection)
    let result = []
    if (Array.isArray(collection)) {
        for (let i = 0; i < newCollection.length; i++) {
            result.push(callback(newCollection[i]))
        } return result

    } else {
        return myMap(Object.values(collection), callback)
    }
}

function myReduce() { }



