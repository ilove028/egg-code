const { Controller } = require('egg');

module.exports = class HomeController extends Controller {
    async index() {
        this.ctx.body = `Hello ${ this.ctx.isIOS ? 'ISO' : 'Other' }, welcome to egg code.`;
    }
}