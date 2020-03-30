const http = require('http');
const url = require('url');
const fileHandler = require('./fileHandler');

const getDeletedTodoInQuery = (query) => {
    for (let k in query) {
        if (k === 'delete') {
            return query[k];
        }
    }
}

http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);
    let resMessage = '';
    // //decodeURI to accept special character
    // //example: localhost:3000//buy flower => (not decoded) todo = buy%20flower => (decoded) todo = buy flower
    // const todo = decodeURI(parsedUrl.pathname).toString().substr(1);
    // console.log(req.method)
    // fileHandler.addTodo(todo);

    // const deletedTodo = getDeletedTodoInQuery(parsedUrl.query)
    // fileHandler.deleteTodo(deletedTodo);

    // const todoList = fileHandler.getAll();
    // res.end(`You just add a todo: ${todo} \nYou just delete a todo: ${deletedTodo}\nYour to do list: ${todoList}`)
    switch(req.method) {
        case 'GET':
            break;
        case 'POST':
            const todo = decodeURI(parsedUrl.pathname).toString().substr(1);
            fileHandler.addTodo(todo);
            resMessage += `You just add a todo: ${todo} \n`;
            break;
        case 'DELETE':
            //decodeURI to accept special character
            //example: localhost:3000//buy flower => (not decoded) todo = buy%20flower => (decoded) todo = buy flower
            const deletedTodo = decodeURI(parsedUrl.pathname).toString().substr(1);
            fileHandler.deleteTodo(deletedTodo);
            resMessage += `You just delete a todo: ${deletedTodo}\n`
            break;
        default:
            resMessage += 'We dont support this method.';
            break;
    }
    const todoList = fileHandler.getAll();
    resMessage += `Your todo list: ${todoList}`;

    res.end(resMessage);
}).listen(3000, 'localhost');

console.log('Server is running at port 3000');