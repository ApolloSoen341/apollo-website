var elixir = require('laravel-elixir');

require('laravel-elixir-angular');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.sass('app.scss');

	mix.scripts([
		"app.js",
		"dashboard/dashboard.config.js",
		"dashboard/dashboard.controller.js"
	], "public/js/app.js", "resources/assets/angular");

	mix.copy('resources/assets/angular/**/*.html', 'public/build');


	// Angular mix recipe.
	// @params: (string: input path, string: output path, string: compiled file name)

	//mix.angular('resources/assets/angular/', 'public/js', 'app.js');
});
