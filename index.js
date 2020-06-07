
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.get("/", (req, res) => {
   console.log("GET request init!");
   res.sendFile(__dirname + "/post.html");
})
app.post("/", (req, res) => {
   console.log("POST request init!");
   console.log(req.body);
   res.redirect(`/thanks`);
})

app.get('/thanks', (req, res) => {
    res.send("Thank for sending the infos")
}) */

/////

let students = [{id: 1, name:"Matti", email:"abc@matti.com" }, {id: 2, name:"antti", email:"abc@matti.com" }];

app.get('/student/delete/', (req, res) =>{
    res.sendFile(__dirname + "/deleteStudent.html");
})

app.post('/student/delete/', (req, res) =>{
    const id = req.body.id;
    console.log(id)
    console.log(students, "before")
    students = students.filter(element => element.id !== id)
    console.log(students)
    res.send(`Student with ID ${id} deleted from the database permanently`)
})

app.get('/student/:id' , (req, res) => {
    const id = Number(req.params.id);
    const theStudent = students.filter(element => element.id === id)
    console.log(theStudent)
    if(theStudent.length > 0){
        res.send(theStudent)
    }else{
        res.send("No student found with that id")
    }  
})

app.get('/student/', (req, res) => {
    res.sendFile(__dirname + "/post.html");
})

app.post('/student', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    const id = students.length + 1;

    const newStudent = {id: id, name: name, password: password, email: email}

    students.push(newStudent)
    console.log(students)

    res.redirect('/great')

})



app.get('/great', (req, res) => {
    res.send("Thank for sending the infos")
})

app.get('/totalstudents', (req, res) => {
    if(students.length < 1){
        res.send("No students to show")
    }else {
        res.send(students)
    }
})


////

let count1 = 0;

app.get('/counters', (req, res) => {
    count1 +=1;
    const name = req.params.name;
   
    res.send(`<h1> Requested times: ${count}</h1> `)
    console.log(count)
})


let names = [{name: "Hari", count:0},];

app.get('/counter/:name', )


app.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query)
    const quer = req.query.name;
    res.send(`hello there ${id} and your name is ${quer}`);
})



app.listen(4000, () => {
    console.log("Listening at 4000!!");
})

