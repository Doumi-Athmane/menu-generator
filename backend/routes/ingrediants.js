const router = require('express').Router();

router.get('/', (req, res) => {
    // get all entries of ingrediant
    res.send('test')
});

router.get('/:id', (req, res) => {
    // get ingrediant entry of id
});

router.post('/', (req, res) => {
    // store new ingrediant
});

module.exports = router;