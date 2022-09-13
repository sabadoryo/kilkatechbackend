const redis = require('redis')

const client = redis.createClient(process.env.CACHE_PORT || 6379, process.env.CACHE_HOST, {
    no_ready_check: true
});

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;
