const router = require('express').Router();

router.get('userReg/', (req, res) => {
    res.send('user SignUp');
});

module.exports = router;