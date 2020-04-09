const mongoose = require('mongoose').mongo.MongoClient
const ObjectID = require('mongodb').ObjectID;

mongoose.connect('MONGODB BAGALNTI CUMLENIZ',
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (eer, cli) {
        if (!eer) {
            console.log("bağlantı başarılı");

            var dib = cli.db('Library');
            var buCol= dib.collection('books');
            
            //buCol.insertOne( { title: "Javascript", page:2222 } );
           // buCol.deleteOne({ad:"ali"});
            buCol.updateOne(
                { _id: new ObjectID("5e8ec70d2ff9052938b1f20e") },
                { $set: { title: "Javascript", page: 300 } },
                { upsert: true }
            );

           

            buCol.find({}).toArray(function (er, result) {
                if (er) throw er;
                console.log(result);
            });
        }
        if (eer) {
            throw eer;
        }
    });