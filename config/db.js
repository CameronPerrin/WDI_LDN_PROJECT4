dbURIs = {
  test: "mongodb://localhost/choosite-test",
  development: "mongodb://localhost/choosite-app",
  production: process.env.MONGOLAB_URI || "mongodb://localhost/choosite-app"
}

module.exports = function(env) {
  return dbURIs[env];
}