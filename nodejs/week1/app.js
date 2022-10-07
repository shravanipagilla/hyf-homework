
// @ts-ignore
const knex = require('knex')({
    client :'mysql2',
    connection: {
        host : '127.0.0.1',
        port : 33061,
        user:'root',
        password: 'bharath143',
        database: 'hyf_node_week1'
    }
     })


const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=> {
    res.send('hello Class!')

}),


app.get("/", (req, res) => {
    res.send(`
  <head>
    <title>HyF Node.js | Week 1</title>
  </head>
  <body>
    <p>This page shows the number of users.</p>
    <div id="user-count" style="font-size: 72px; color: blue; text-align: center">
      N/A
    </div>
    <div style="color: blue; text-align: center">
      user(s)
    </div>
    <script type="text/javascript">
      let interval = null
      async function updateUserCount() {
        try {
          const response = await fetch("/user-count")
          const { count } = await response.json()
          document.getElementById("user-count").innerHTML = count
        } catch (e) {
          console.error(e)
          if (interval !== null) {
            clearInterval(interval)
          }
        }
      }
      updateUserCount().finally(() => {})
      interval = setInterval(updateUserCount, 2000)
    </script>
  </body>
    `)
  }),


app.get("/info", async (req, res) => {
    try {
      const [rows] = await knex.raw("SELECT VERSION()")
  
      res.json({
        nodeVersion: process.version,
        mysqlVersion: rows[0]["VERSION()"],
      })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Internal server error" })
    }
  }),


app.get('/all-users',async(req,res)=> {
    //res.send({"nodeversion":process.version})
   const dbResult = await knex.raw('SELECT * FROM users ORDER BY id')
   const row = dbResult[0];
   res.send(row)
}),
app.get('/unconfirmed-users',async(req,res)=> {
    //res.send({"nodeversion":process.version})
   const dbResult = await knex.raw('SELECT * FROM users where conformed_at IS NULL')
   //const row = dbResult[0];
   res.send(dbResult)
}),

app.get('/gmail-users',async(req,res)=> {
    //res.send({"nodeversion":process.version})
   const dbResult = await knex.raw("SELECT * from users where email LIKE  '%@gmail.com%'")
   //const row = dbResult[0];
   res.send(dbResult) 
}),
app.get('/2022-users',async(req,res)=> {
   const dbResult = await knex.raw("SELECT * from users WHERE YEAR(created_at) = 2022")
   res.send(dbResult) 
}),
app.get('/user-count',async(req,res)=> {
   const dbResult = await knex.raw("SELECT count(id) from users ")
   res.send(dbResult) 
}),
app.get('/last-name-count',async(req,res)=> {
   const dbResult = await knex.raw("SELECT count(last_name) from users ")
   res.send(dbResult) 
}),
app.get("/first-user", async (req, res) => {
    try {
      const [rows] = await knex.raw("SELECT * FROM users ORDER BY id LIMIT 1")
      if (rows.length > 0) {
        res.json(rows[0])
      } else {
        res.status(404).json({ error: "No user found" })
      }
    } catch (e) {
      console.error(e)
      res.status(500).send("Internal server error")
    }
  })
app.listen(port,()=> {
    console.log(`Listening on port ${port}`)
})
