const { startCluster } = require('egg');

startCluster({
    framework: 'egg',
    sticky: true,
    workers: 1
});