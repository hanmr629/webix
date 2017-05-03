define([
	"views/modules/data_rating",
	"views/modules/data_treetable",
	"views/modules/data_progress",
	"views/modules/data_spans",
	"views/modules/data_pager"
], function(rating,treetable,progress,spans,pager){

var layout = {
	type: "space",
	rows:[
		{
			type: "wide",
			cols:[
				{
					type:"wide",
					rows:[
						rating.$ui,
						treetable.$ui
					]
				},
				{
					type:"wide",
					gravity: 0.8,
					rows:[
						progress.$ui,
						spans.$ui
					]
				}

			]
		},
		pager.$ui
	]
};
webix.ui(layout);

});