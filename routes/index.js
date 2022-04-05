const router = require('express').Router();

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('Where are you going? Turn around, wrong route!')})

module.exports = router;



