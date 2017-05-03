define([
	"views/modules/scheduler"
], function(calendar){

	var layout = {
		type: "space",
		cols:[
			calendar.$ui
		]
	};

	webix.ui(layout);

});