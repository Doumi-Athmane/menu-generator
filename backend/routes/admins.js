const router = require('express').Router();

router.get('/:id', (req, res) => {
    // get admin of id
});

router.post('/', (req, res) => {
    // add new admin
});

router.get('/:id/menus', (req, res) => {
    // return all menus of admin id
})

router.get('/:id/plats', (req, res) => {
    // return all plats of admin id
})

module.exports = router;