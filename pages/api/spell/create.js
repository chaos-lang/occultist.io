const MongoClient = require('mongodb').MongoClient;

export default (req, res) => {
    if (req.method === 'POST') {
        const name = req.body.name
        const repo = req.body.repo
        const obj = {
            name: name,
            repo: repo
        }
        MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
            if (err) {
                console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
                res.status(500).json({});
            } else {
                client.db("ocultist").collection("spells").insertOne(obj, function(mongoErr, mongoRes) {
                    if (mongoErr) {
                        res.status(409).json({ error: mongoErr });
                    } else {
                        client.close();
                        res.status(200).json(obj);
                    }
                });
            }
        });
    } else {
        res.status(405).json({});
    }
}
