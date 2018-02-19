// Postcss Export confit
// - Add's autoprefixer to vue component export pipeline
module.exports={
	plugins: [
    require('postcss-cssnext')({
      browsers: [ 'last 3 versions' ]
    })
	]
}
