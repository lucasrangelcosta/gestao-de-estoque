const router = require("express").Router()

router.get("/",(req,res)=>{
    res.json({msg: "Hello world"})
})

module.exports = router