jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.EmployeeTable", {

onInit : function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);	
		this.router.attachRouteMatched(this.attachRouteMatched, this);
		
	},

	handleNavButtonPress : function() {
		this.router.myNavBack("Empty");
	},
	
	attachRouteMatched : function(oEvent) {		
		if (oEvent.getParameter("name") === "EmployeeTable") 	 {
				
				return;
			}
	},
	

});