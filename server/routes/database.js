var mongoose=require("mongoose");
var todomongodb = process.env.VCAP_SERVICES;
var port = process.env.PORT || 3000;
var url = "";

// if bluemix service is defined
if (todomongodb) {
  var env = JSON.parse(todomongodb);
  if (env['mongodb']) {
// get predefined credentials
// in order to get url information
	  todomongodb = env['mongodb'][0]['credentials'];
    if (todomongodb.url) {
      url = todomongodb.url;
    } else {
      console.log("No mongo found");
    }
// if no mongodb service bound to app
// set default local server path
  } else {
    url = 'mongodb://sashas:sashas@ds017185.mlab.com:17185/mytasklist';
  }
// if no services found
// use local server path
} else {
  url = 'mongodb://sashas:sashas@ds017185.mlab.com:17185/mytasklist';
}


module.exports = {
		

		url : url
}
