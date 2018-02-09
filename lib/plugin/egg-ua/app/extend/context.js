module.exports = {
    get isISO() {
        const reg = /iphone|ipad|ipod/i;

        return reg.test(this.get('user-agent'));
    }
};