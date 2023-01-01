// Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObj() {
    const emptyObj = Object.create(null)
    return emptyObj
}

emptObj = createEmptyObj() 
// emptObj.__proto__ ==> undefined