const path = require('path')

export default {
	// Source files
	src: path.resolve(__dirname, '../src'),
	// style files
	styles: path.resolve(__dirname, '../styles'),
	// Production build files
	build: path.resolve(__dirname, '../dist'),
	// Staging build files
	staging: path.resolve(__dirname, '../staging'),
	// Static files that get copied to build folder
	public: path.resolve(__dirname, '../public')
}
