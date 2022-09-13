const redis = require('redis')

const client = redis.createClient(process.env.CACHE_PORT, process.env.CACHE_HOST);

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;
