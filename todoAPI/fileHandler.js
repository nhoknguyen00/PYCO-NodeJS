const fs = require('fs')
const FILE_NAME = 'todo_list.txt'

// const deleteStringsInStringArrayAndReturn = (deleteStrings, stringArray) => {
//     const shortenedStringArray = stringArray.reduce((result, string) => {
//         if (!deleteStrings.includes(string)) {
//             result.push(string);
//         }
//         return result;
//     }, [])

//     return shortenedStringArray;
// }

// const deleteStringInStringArray = (deleteString, stringArray) => {
//     const shortenedStringArray = stringArray.filter((string) => string !== deleteString)
//     console.log('shortenedStringArray: ', shortenedStringArray)
//     return shortenedStringArray;
// }

const addTodo = (todo) => {
    fs.writeFileSync(FILE_NAME, todo + '\n',{ flag: 'a+' });//a+: append
}

const getAll = () => {
    const fileContents = fs.readFileSync(FILE_NAME, 'utf8');
    const todoArray = fileContents.split(/\r?\n/);
    return todoArray;
}

const deleteTodo = (todo) => {
    const fileContents = fs.readFileSync(FILE_NAME, 'utf8');
    fs.writeFileSync(FILE_NAME, fileContents.replace(todo + '\n', ''));
}

module.exports = { addTodo, getAll, deleteTodo }