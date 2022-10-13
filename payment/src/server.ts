import express from 'express'

//Create a new application
const app =  express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', (req, res) =>{
    res.send('Hello world')
})

app.listen(3000, () => {
    console.log('Server Up and Running on port' + 3000)
})