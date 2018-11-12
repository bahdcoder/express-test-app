module.exports = {
  apps : [{
    name: 'MY APP.JS APPLICATION',
    script: 'app.js',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      key: '~/.ssh/iona-Kati-Frantz-nwsQX3',
      host : '167.99.145.202',
      ref  : 'origin/master',
      repo : 'git@github.com:bahdcoder/express-test-app.git',
      path : '/home/iona'
    }
  }
};
