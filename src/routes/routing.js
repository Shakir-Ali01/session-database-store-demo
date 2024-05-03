const express = require('express');
const router = express.Router();

router.post('/session', (req, res, next) => {
    req.session.username = 'john doe';
    res.send('Users Session Created in DB');
})

router.get('/session', (req, res, next) => {
    res.send(req.session.username);
})

router.put('/update-session', (req, res, next) => {
    req.session.username = 'Maria Johnson';
    res.send("session updated");
})

router.delete('/delete-session', (req, res, next) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.send("session destroyed successfully from db");
    })
})

module.exports = router;