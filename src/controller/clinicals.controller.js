import dao from './../models/clinicals.dao'
import mongodb from 'mongodb'

exports.getAll = (req,res) => {
    dao.get({patient: mongodb.ObjectID(req.params.patientId)}, (err, clinicalData) => {
        if(err) console.log(err)

        res.send(clinicalData)
    })
}

exports.create = (req,res) => {
    var clinicals = req.body
    dao.create(clinicals, (err, response) => {
        if(err) console.log(err)
        
        res.send(response)
    })
    
}