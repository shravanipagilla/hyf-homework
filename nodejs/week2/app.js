// @ts-ignore
const express = require('express')
const router = express.Router
const app = express()
const port = process.env.PORT || 3000
const document = require("./documents.json")


// Support parsing JSON requests
app.use(express.json())

// 1:GET /search  ex: GET /search?q=hello:
app.get('/search',  (req, res) => {
    try{
    // @ts-ignore
    const result =  document.filter(element => Object.values(element).find(word => String(word).includes(req.query.q)));
   if(result){
    res.send(result)
}else{
    res.sendStatus(404).json({message: "Record not found"});
}
}catch(error){
    res.send(error)
}
})
  
// 2:GET /documents/:id
// @ts-ignore
app.get('/documents/:id', (req, res) => {
    try{
    var result =  document.filter(it => it.id === Number(req.params.id));
    if(result){
    res.send(result);
}else{
    res.sendStatus(404).json({message: "Record not found"});
}
}catch(error){
throw error;
}
}),
 
// 3:POST /search
app.post('/search',  (req, res) => {
    
    const fields = req.body.fields;
    var searchResult ;

    if(fields){
    // @ts-ignore
    searchResult =  document.filter(element => Object.keys(element).find(key => String(key).includes(Object.keys(fields))))
    }

    try{
   // @ts-ignore
      if(req.query.q && fields){
        res.status(404).json({ error: "Bad Request: query paramer 'q' and request body 'fields' can not be provided at the same time!" })
      }else if (!fields) {
        res.status(404).json({ error: "Provide Data to Search" })
    }else if (!searchResult) {
        res.status(404).json({ error: "Not Data found" })
    }else{
    res.send(searchResult);      
 }
   }catch(error){
    throw error
    }
})
  

  
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  
})

function searchQuery(searchData) {
    throw new Error('Function not implemented.');
}


