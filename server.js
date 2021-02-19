const fs = require('fs');
const express = require('express');
let events = require('./events.json');
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
  
 
 /*  app.get('/get/events/id', function(req, res){
    const event =events.find(event => event.id === req.params.id)
    res.json(event)
  });
   */
  /* app.get('/get/events:id', (request, response) => {
    console.log('Id är: ', request.params.id);
    //Hämta id från url:en och spara i en variabel
    const id = request.params.id;
    //Läs in events.json
    fs.readFile('events.json', 'utf8', (error, content) => {
        //Gör om till JSON för att kunna loopa igenom
        const events = JSON.parse(content);
        //Använd arraymetoden filter för att loopa igenom och returnera ett matchande objekt
        const currentEvent = events.filter((event) => {
            return event.id === parseInt(id);
        });
        //Skicka tillbaka det hittade objektet
        response.send(currentEvent[0]);
    });
});  */

app.get('/events/:id', (request, response) => {
  console.log('Id är: ', request.params.id);
  //Hämta id från url:en och spara i en variabel
  const id = request.params.id;
  //Läs in events.json
  fs.readFile('events.json', 'utf8', (error, content) => {
      //Gör om till JSON för att kunna loopa igenom
      const events = JSON.parse(content);
      //Använd arraymetoden filter för att loopa igenom och returnera ett matchande objekt
      const foundEvent = events.filter((event) => {
          return event.id === parseInt(id);
      });
      //Skicka tillbaka det hittade objektet
      response.send(foundEvent[0]);
  });
});

 
  app.listen(port, () => {
    console.log(`Server started på ${port}`);
    
});