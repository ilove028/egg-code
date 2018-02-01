const { startCluster } = require('egg-cluster');

startCluster({
    framework: 'egg',
    sticky: true,
    workers: 1
});