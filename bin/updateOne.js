const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb://cu2301100047:2301100047@ac-wxltvtg-shard-00-00.op2bauu.mongodb.net:27017,ac-wxltvtg-shard-00-01.op2bauu.mongodb.net:27017,ac-wxltvtg-shard-00-02.op2bauu.mongodb.net:27017/?ssl=true&replicaSet=atlas-wwtd0m-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const movies = database.collection('notes');
// idが１のデータを更新
const movie = await movies.replaceOne(
{
id: 1,
title: 'ノート１のタイトルです',
subTitle: 'ノート１のサブタイトルです',
bodyText: 'ノート１の本文です'
},
{
id: 1,
title: 'ノート１のタイトル更新しました',
subTitle: 'ノート１のサブタイトルです',
bodyText: 'ノート１の本文です'
});
console.log(movie);
// 最後にクロースする
await client.close();
}
run()