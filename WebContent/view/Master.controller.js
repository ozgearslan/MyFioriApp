jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	onInit : function() {

		this.oUpdateFinishedDeferred = jQuery.Deferred();

		this.getView().byId("listid").attachEventOnce("updateFinished",
				function() {
					this.oUpdateFinishedDeferred.resolve();
				}, this);
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRouteMatched(this.attachRouteMatched, this);

	},

	attachRouteMatched : function(oEvent) {

		var list = this.getView().byId("listid");
	
		var sName = oEvent.getParameter("name");
		// Wait for the list to be loaded once
		jQuery.when(this.oUpdateFinishedDeferred).then(jQuery.proxy(function() {
			var Items;
			if (sName === "Master") {
				Items = list.getItems();
				list.setSelectedItem(Items[0], true);
				console.log(list.setSelectedItem(Items[0], true));
				this.router.detachRouteMatched(this.attachRouteMatched, this);
			}

			// SELECTED FIRST ITEM OF LIST IN LOAD PAGE
			// (çalýþmýyor odata ile olabilir)
			// var Items = this.getView().byId("listid").getItems();
			// var first = Items[0];
			// console.log(first);
			// this.getView().byId("listid").setSelectedItem(first, true);

		}, this));

	},

	// //Load the detail view in desktop
	// this.router.myNavToWithoutHash({ // this.router yaz olmazsa
	// currentView : this.getView(),
	// targetViewName : "sap.ui.demo.myFiori.view.New",
	// targetViewType : "XML"
	// });
	//
	// //Wait for the list to be loaded once
	// this.waitForInitialListLoading(function () {
	//
	// //On the empty hash select the first item
	// this.selectFirstItem();
	//
	// });

	// },

	handleListItemPress : function(Evt) {

		var oContext = Evt.getSource().getBindingContext();
		console.log(oContext);
		this.router.navTo("Detail", {
			EmployeeID : oContext.getProperty("EmployeeID")
		});
	},
	
	//----------------- TWO PARAMETER SEARCH FÝLTER FUNCTÝON---------------
	onSearch : function (oEvt) {

		
	//	var aFilters = [];
		
		var sQuery = oEvt.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("FirstName", sap.ui.model.FilterOperator.EQ, sQuery);
			var filter2 = new sap.ui.model.Filter("LastName", sap.ui.model.FilterOperator.EQ, sQuery);
			var aFilters = new sap.ui.model.Filter([filter, filter2 ], false); // (ÝKÝ FÝLTRE ARASINDA) FALSE: OR, TRUE: AND
		//	aFilters.push(filter);
		//	aFilters.push(filter2);
		}

		// update list binding
		var list = this.getView().byId("listid");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},
	//----------------- TWO PARAMETER SEARCH FÝLTER FUNCTÝON END ---------------
	
});

