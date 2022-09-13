const redis = require('redis')

const client = redis.createCluster({
    rootNodes: [
      {
        url: process.env.CACHE_URL
      }
    ]
  });

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;
