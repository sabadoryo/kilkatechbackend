const { getSongs, getFilterData } = require('../../models/songs.model');

async function httpGetSongs(req, res) {
  const data = await getSongs(req.query);

  return res.status(200).send({
    success: true,
    data: {
        data: data.songs,
        total: data.count,
    }
  });
}

async function httpGetFilterData(req, res) {
    return res.status(200).send({
        success: true,
        data: await getFilterData()
    })
}

module.exports = {
    httpGetSongs,
    httpGetFilterData
};