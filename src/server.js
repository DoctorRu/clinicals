import express, { Router } from 'express'
import props from './config/properties'
import db from './config/db'
import bodyParser, { json } from 'body-parser'
import clinicalRoutes from './routes';
db()

var app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var clinicalRouter= express.Router();
clinicalRoutes(clinicalRouter);
app.use('/clinicalsapi',clinicalRouter);

// console.log(clinicalRouter.stack)

app.listen(props.PORT, (err) => {
    if(err) console.log(err)

    console.log("Application started on port: ", props.PORT)
})