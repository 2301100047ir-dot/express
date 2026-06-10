var express = require('express');
var router = express.Router();



// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb://cu2301100047:2301100047@ac-wxltvtg-shard-00-00.op2bauu.mongodb.net:27017,ac-wxltvtg-shard-00-01.op2bauu.mongodb.net:27017,ac-wxltvtg-shard-00-02.op2bauu.mongodb.net:27017/?ssl=true&replicaSet=atlas-wwtd0m-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;
