const friend = require('../data/friends.js')


module.exports = app => {
    app.get('/api/friends', (req, res) => {
      res.send(friend)
    })

    app.post('/api/friends', (req, res) => {
      friend.push(req.body)
      res.sendStatus(200)
    })
}