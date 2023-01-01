// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const person = {city: 'Moscow',
    job: 'Developer'
};

const webDeveloper = Object.create(person)

webDeveloper.age = 35
webDeveloper.male = true

function logOwnProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`key: ${key} || value: ${obj[key]}`);
        }
    } 
}

// Expected result: 
// key: age || value: 35
// key: male || value: true