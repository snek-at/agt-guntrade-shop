module.exports = {
  remote: 'schett-net/agt-guntrade-shop',
  initialHideUI: false, // optional hide UI on load
  plugins: {
    pages: {
      resolve: require('@snek-at/jaen-pages/jaen-register'),
      templates: []
    }
  }
}
