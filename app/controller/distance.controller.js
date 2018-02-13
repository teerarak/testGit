const Router = require('koa-router');
const controllerRouter = new Router();
const serviceRouter = require('../service/distance.service')

controllerRouter.get('/:name', (ctx) => {
    let x = serviceRouter.CalDistance()
    ctx.body = "distance"+ ctx.params.name
});

module.exports = controllerRouter