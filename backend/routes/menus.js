const router = require('express').Router();

router.get('/', (req, res) => {
    // get all menus
});

router.post('/', (req, res) => {
    // add new menu
});

router.get('/:id', (req, res) => {
    // get menu of id
});

router.get('/:id/plats', (req, res) => {
    // get all plats of menu id
});

module.exports = router;