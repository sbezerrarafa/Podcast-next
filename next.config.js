const withPWA = require('next-pwa')

module.exports = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  withPWA(){
    pwa:{
      dest: 'public'
    }
  }
  
};

