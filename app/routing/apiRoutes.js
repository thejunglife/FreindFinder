const friend = require('../data/friends.js')


module.exports = app => {

    app.get('/api/friends', (req, res) => {
      res.send(friend)
    })

    app.post('/api/friends', (req, res) => {
      
      // get user info
      let user = req.body
      
      // will be the index of the best matched friend
      let bestMatch = 0
      // default difference for comparing 
      let defaultDiff = 51

      for (let i = 0; i < friend.length; i++) {

        let totalDiff = 0

          for (let j = 0; j < friend[i].scores.length; j++) {
           
            let difference = Math.abs(friend[i].scores[j] - user.scores[j])
            totalDiff += difference
            
          }

          if (totalDiff < defaultDiff) {
            defaultDiff = totalDiff
            bestMatch = i

          }
      
     
      
    }
   
    friend.push(user)

    res.json(friend[bestMatch])
  })

  }
