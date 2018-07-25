
module.exports = function(config) {
  config.set({

    basePath: '',

	  
	  
    files: [
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-route/angular-route.min.js',
      'client/partials/TaskControllerSpec.js'
    ],

    autoWatch: true,
    
    frameworks: ['jasmine'],
    
    browsers: ['PhantomJS'],
    
  /*plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]*/
	  
	singleRun: true
  });
};
