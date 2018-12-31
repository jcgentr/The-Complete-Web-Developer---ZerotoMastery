/* Modules in JS
	mental model: climbing the mountain of modules
	why is inline script bad?
		pollutes global namespace ("a" used and can't be used again; collisions possible)
		requires copy and paste to other html files (low reusability)
	script tags improved upon inline scripts in html
	why is script tag bad?
		copy and paste tags to other html files
		lack of dependency resolution - function in one file depends on other file's
			function which has not been loaded yet
		pollutes global namespace - all variables, objects, fxns are on window object
	then there is IIFE - immediately invoked function execution
		reduces global namespace pollution by wrapping in IIFE (jQuery uses this $)
		but didn't solve script tag dependency problem
	browserify - used CommonJS
		module bundler; could export functions from one file to another
		bundles all js files into single file, one script tag (bundle.js)
	modules - pieces good at doing individual things
	ES6 - added export and import (like python) to import and export things from 
		different files
		new feature needs time for all browsers to support it
	top of the mountain
	Webpack - module bundler like browserify to bundle js files with exports, imports
		allows ES6 to be used in allow browsers
		has a config file to create the bundled file
*/