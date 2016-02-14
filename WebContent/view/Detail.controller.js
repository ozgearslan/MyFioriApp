jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
sap.ui
		.controller(
				"sap.ui.demo.myFiori.view.Detail",
				{

					onInit : function() {

						this.router = sap.ui.core.UIComponent
								.getRouterFor(this);
						this.router.attachRouteMatched(this.attachRouteMatched,
								this);

					},

					handleNavButtonPress : function() {
						this.router.myNavBack("Empty");
					},
					onShowEmployeeTablePress : function() {

						this.router.navTo("EmployeeTable");
					},

					attachRouteMatched : function(oEvent) {
						var sName = oEvent.getParameter("Detail");

						// if (sName !== "Detail") {
						// return;
						// }
						//			
						// ////////////
						if (oEvent.getParameter("name") === "Detail") {
							var sProductPath = "/Employees("
									+ oEvent.getParameter("arguments").EmployeeID
									+ ")";
							console
									.log(oEvent.getParameter("arguments").EmployeeID);
							var oModel = this.getView().getModel();
							var Formid = this.getView().byId("formid");
							oModel
									.read(
											sProductPath,
											null,
											null,
											false,
											function(oData, oResponse) {
												console.log(oData);

												Formid
														.setModel(new sap.ui.model.json.JSONModel(
																{
																	formModel : oData
																}));
												Formid
														.bindElement("/formModel");

											}, function(oError) {
												console.log(oError);

											});

						}
						// //////////
					},

					onShowFormPress : function() {
						this.router.navTo("Form");
					},
					// ---- Label'ýn GÖRÜNÜRLÜÐÜ CHECKBOX CONTROL------
					onSelect : function() {
						var text = this.getView().byId("textid");
						var check = this.getView().byId("checkid");
						if (check.getSelected() === true) {
							text.setVisible(true);
						} else {
							text.setVisible(false);
						}
					},
					// ---- Ýnput'un EDÝTABLE'I CHECKBOX CONTROL------
					onSelect2 : function() {
						var text = this.getView().byId("textid2");
						var check = this.getView().byId("checkid2");
						if (check.getSelected() === true) {
							text.setEnabled(true);

						} else {
							text.setEnabled(false);
							text.setValue("");
						}
					},
					// ----------ALERT MESSAGEBOX FUNCTÝON----------
					handlePrintPress : function(evt) {

						var bCompact = !!this.getView().$().closest(
								".sapUiSizeCompact").length;
						sap.m.MessageBox.alert("Belge Yazdirilacaktir", {
							styleClass : bCompact ? "sapUiSizeCompact" : ""
						});
					},
					
					onShowDate: function(evt){
						this.router.navTo("Date");
					},

					onliveChange : function(evt) {
						var text = this.getView().byId("textid3");
						// ------- STATE VALUE MESAGE-------
						if (text.getValue() == "") {
							text.setValueState(sap.ui.core.ValueState.Error);
							text.setValueStateText("Bos Kalamaz!");
						} else {
							text.setValueState(sap.ui.core.ValueState.None);
						}
					},
				});
