const express = require('express')

const router = express.Router()


router.get('/', (req, res) =>{
    res.send('Welcome to my first node application')
})

router.post('/',(req,res)=>{
    res.send('Welcome to my first node application')
})

router.put('/',(req,res)=>{
    res.send('Welcome to  my first node application')
})

router.delete('/',(req,res)=>{
    res.send('Welcome to my first node application')
})

module.exports = router;

