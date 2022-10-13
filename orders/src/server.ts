import express from 'express'
//Create the appliacation to listen for request
const app = express()
//Parse the incoming request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Handle the route
app.use('/', (req, res) => {
    res.send('Hello world')
})
//Listen/start the server.
app.listen(5000, () => {
    console.log('Server running on port ' + 5000 )
})
