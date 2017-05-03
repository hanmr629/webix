define([
	"views/modules/form_user",
	"views/modules/form_project",
	"views/modules/form_event",
	"views/modules/form_style"
],function(user, project, event, style){

	var layout = {
		type: "space",
		cols:[
			{type: "wide",
				rows: [
					user.$ui,
					event.$ui
				]
			},
			{type: "wide",
				rows: [
					style.$ui,
					project.$ui
				]
			}
		]

	};

	webix.ui(layout);

});
