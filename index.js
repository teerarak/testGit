const Koa = require('koa')
const Router = require('koa-router')
const App = new Koa()
const router = new Router()
const eiei = require('./app/DAL/distance.DAL')
var msg = require('./app/controller/distance.controller')

// App.use(async ctx => {
//   ctx.body = 'Hello World555555555555555'
// })//xxxx
router.get('/:name', (ctx) => {
 ctx.body = ctx.params.name
});

router.use('/distance', msg.routes())
router.use('/distance2', eiei.routes())

App
  .use(router.routes())
  .use(router.allowedMethods())
// App.listen(3000)
// var koa = require('koa')
// var mysql = require('koa-mysql')
 
// // Create a MySQL connection pool (do this once) 
// var db = mysql.createPool({ user: 'root', password: '12345678', database: 'mapthailand', host: 'localhost' })
 
// // Create sample app 
// var App = new koa()
 
// Run sample app 
// App.use(function* () {
//     try {
//         // Execute a sample query (with params) 
//         // var rows = yield db.query("SELECT * FROM amphur a JOIN province p ON a.PROVINCE_ID = p.PROVINCE_ID WHERE p.PROVINCE_ID = '1'", [1, 2])
//         var rows = yield db.query("SELECT * FROM table5", [1, 2])
//         var AMPHUR = []
//         // rows.forEach(element => {
//         //   AMPHUR.push({name: element.AMPHUR_NAME_ENG})  
//         // });
//         this.body = rows
//     }
//     catch (err) {
//         // 500 Internal Server Error 
//         this.status = 500;
//         this.body = { error: err };
//     }
// });
 
// HTTP port 
var port = process.env.PORT || 3000
 
// Listen for connections 
App.listen(port)
 
// Log port 
console.log('Server listening on port ' + port)

