define([
    	"views/modules/dashline",
    	"views/modules/visitors",
    	"views/modules/orders",
    	"views/modules/messages",
    	"views/modules/revenue",
    	"views/modules/tasks",
    	"views/modules/map"
], function(dashline, visitors, orders, messages, revenue, tasks, map) {
	var layout = {
			type: "clean",
			rows:[
				dashline.$ui,
				{
					type: "space",
					rows:[
						{
							height: 220,
							type: "wide",
							cols: [
								visitors.$ui,
								orders.$ui
							]
						},
						{
							type: "wide",
							cols: [
								messages.$ui,
								revenue.$ui

							]
						},
						{
							type: "wide",
							cols: [
								tasks.$ui,
								map.$ui
							]
						}
					]

				}
			]
		};
	webix.ui(layout)
});