define([
    	"js/views/menus/search",
    	"js/views/menus/mail",
    	"js/views/menus/message",
    	"js/views/menus/profile",
    	"js/views/menus/sidebar",
    	"js/views/webix/icon",
    	"js/views/webix/menutree",
    	"libs/routie"
], function(search, mail, message, profile, menu) {
	webix.ui(search.$ui);
	webix.ui(mail.$ui);
	webix.ui(message.$ui);
	webix.ui(profile.$ui);
	
	var mainToolbar = {
			view: "toolbar",
			elements:[
			          {view: "label", label: "<a href='http://webix.com'><img class='photo' src='images/imgs/webix-logotype.svg' height='40' /></a>", width: 200},
			          {},
			          {view: "icon", icon: "search",  width: 45, popup: "searchPopup"},
			          {view: "icon", icon: "envelope-o", value: 3, width: 45, popup: "mailPopup"},
			          {view: "icon", icon: "comments-o", value: 5, width: 45, popup: "messagePopup"},
			          { height:46, id: "person_template", css: "header_person", borderless:true, width: 180, data: {id:3,name: "Oliver Parr"},
			        	  template: function(obj){
			        		  var html = 	"<div style='height:100%;width:100%;' onclick='webix.$$(\"profilePopup\").show(this)'>";
			        		  html += "<img class='photo' src='images/imgs/photos/"+obj.id+".png' /><span class='name'>"+obj.name+"</span>";
			        		  html += "<span class='webix_icon fa-angle-down'></span></div>";
			        		  return html;
			        	  }
			          }
			          ]
	};
	var body = {
			view:"tabview", 
			id:"my_tabview",
			cells: [{
				header: "Dashboard",
				width:"auto",
				body: {
					id: "dashboard",
					template: '<iframe scrolling="auto" frameborder="0"  src="pages/dashboard.html" style="width:100%;height:100%;"></iframe>', 
				}
			}], 
			tabbar:{
//	    	multiview:true, 
//	    	tabMinWidth:150
				on:{
					"onOptionRemove":function(id, value) {
						$$("app:menu").unselect(id);// tree取消选择
					},
					"onBeforeTabClick":function(id, e) {
						routie.navigate("#"+id);
					}
				}
			}, 
			multiview:{
//	    	animate:true
			}
	};
	webix.ui({
		rows:[
		      mainToolbar,
		      {
		    	  cols:[
		    	        menu.$ui,
		    	        {view:"resizer"},
		    	        body
		    	        ]
		      }
		      ]
	});

	routie(":name", function(id) {
		var item = $$("app:menu").getItem(id);
		if (!$$(item.id)) {
			$$("my_tabview").addView({
				header:item.value,
				close:true,
				body:{ //webix.uid() generates a random number
//		        template:"New content "+webix.uid()
					view:"iframe",
					id:item.id,
					src:'pages/'+item.id+'.html'
//					template:'<iframe scrolling="auto" frameborder="0"  src="pages/'+item.id+'.html" style="width:100%;height:100%;"></iframe>',
				}
			});
		}
		$$("my_tabview").getTabbar().setValue(item.id);
		$$("app:menu").select(id)
	});
});