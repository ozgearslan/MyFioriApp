jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessagePopover");
jQuery.sap.require("sap.m.MessagePopoverItem");
sap.ui.controller("sap.ui.demo.myFiori.view.Empty", {

	onInit : function() {

		this.router = sap.ui.core.UIComponent.getRouterFor(this);

	},
	// ----- INPUT AND  COMBOBOX DATA WRÝTE CONSOLE FUNCTÝON-----------------
	onAddEmployeePress : function(oEvent) {
		var FirstName = this.getView().byId("FirstNameid").getValue();
		var LastName = this.getView().byId("LastNameid").getValue();
		var Region = this.getView().byId("Regionid").getValue();
		var Country = this.getView().byId("Countryid").getValue();
		var Combo = this.getView().byId("EmployeeIDid").getSelectedKey() ;
		console.log(FirstName, LastName, Region, Country, Combo);
	},

	//-----------    POPUP FUNCTÝON-------------------------------
	onShowPopoverPress :function(oEvent)
	{
		// create popover
		if (! this._oPopover) {
			this._oPopover = sap.ui.xmlfragment("sap.ui.demo.myFiori.view.Popover", this);
			this.getView().addDependent(this._oPopover);
		}
			//var pop = this.getView().byId("popoverid");
			var pop= oEvent.getSource();
		//	this._oPopover.openBy(pop);
			jQuery.sap.delayedCall(0, this, function () {
				
				this._oPopover.openBy(pop);
			});
		

	},
	//--------------- QuickView FUNCTÝON-------------------
	onPenPress  :function(oEvent)
	{
		alert("alert verir");


	},
	
});