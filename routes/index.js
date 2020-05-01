var router = require('express').Router();


// respond with "hello world" when a GET request is made to the homepage
router.post('/api/tester', function (req, res) {
    console.log(req.body)
  res.send('hello world')
})

module.exports = router;