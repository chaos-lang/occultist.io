const MongoClient = require('mongodb').MongoClient;

export default (req, res) => {
    if (req.method === 'GET') {
        const {
            query: { name },
        } = req
        const query = { name: name };
        MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
            if (err) {
                console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
                res.status(500).json({});
            }

            client.db("ocultist").collection("spells").find(query).toArray(function(mongoErr, mongoRes) {
                if (mongoErr) {
                    res.status(409).json({ error: mongoErr });
                } else {
                    client.close();
                    res.status(200).json(mongoRes);
                }
            });
        });
    } else {
        res.status(405).json({});
    }
}
