# PYCO-NodeJS
Lưu Tuấn Nguyên - NodeJS Intern

**Use HTTP module to read dynamic query and print on response**

Request: <code>localhost:3000/?language=javascript&&technology=nodejs</code>

=> Response: <code>Dynamic query: {"language":"javascript","technology":"nodejs"}</code>

**Use HTTP module to read 'POST' data and print on Response**

Request body:

<code>
{
  "language": "javascript", 
  "technology": "nodejs"    
}
</code>

=> Response:

<code>
{
  "language": "javascript", 
  "technology": "nodejs"    
}
</code>

**To do API Examples**:
- Add todo: <code>localhost:3000/buy fish</code>

- Get all todos: <code>localhost:3000</code>

- Delete todo: <code>localhost:3000/?delete=buy egg</code>

=> Response:
<code>You just add a todo: buy fish</code>

<code>You just delete a todo: buy egg</code>

<code>Your to do list: buy flower,buy fish,</code>
