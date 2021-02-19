const fs = require('fs');
const express = require('express');

const app = express();

let port = process.env.PORT || 8000;
const cors = require('cors');



app.use(express.json());
app.use(cors())

 app.get('/get/events', (req, res)=>{
   fs.readFile('events.json', 'utf8', (error, content)=>{
     res.send(content);
   })
 })  
  
 
  app.get('get/events/:id', ( req, res) => {
    const id=req.params.id;
    fs.readFile('events.json', 'utf8', (error, content)=>{
      const events = JSON.parse(content);
      const currentEvent= events.filter((event) =>{
        return event.id===parseInt(id);
      });
      response.send (currentEvent[0]);
    })
  })



  app.listen(port, () => {
    console.log(`Server started på ${port}`);
    
});