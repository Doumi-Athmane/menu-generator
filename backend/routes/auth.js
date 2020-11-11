const router = require('express').Router();
const { verify, login, refresh } = require('../auth');


router.post('/login', login);

router.post('/refresh', refresh);

router.get('/verify', verify);  // is it really needed ??

module.exports = router;