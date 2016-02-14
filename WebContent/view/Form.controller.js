jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Form", {

onInit : function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		
		
	},

	handleNavButtonPress : function() {
		this.router.myNavBack("Detail");
	},
	
	
});