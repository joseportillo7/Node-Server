const express = require('express')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.routes()

    }

    routes(){
        this.app.get('/', (req,res)=>{
            res.send('Welcome to my first node server')
        })  
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listening on port ${this.port}`);
        })
    }
}

module.exports = Server;