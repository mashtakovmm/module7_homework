// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

const person = {job : 'Developer',
    city : 'Moscow',
    age : 35,
    male : true
};

function hasProperty(keyName, obj) {
    keyFound = false
    for (let key in obj) {
        if (key == keyName) {
            keyFound = true
        } 
    }
    console.log(keyFound)
    return keyFound
}

hasProperty("city", person)

hasProperty("job", person)

hasProperty("age", person)

hasProperty("fdsfs", person)