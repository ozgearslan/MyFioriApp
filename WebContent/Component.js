jQuery.sap.declare("sap.ui.demo.myFiori.Component");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.ui.demo.myFiori.MyRouter");
sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

					metadata : {
						name : "Northwind App",
						version : "1.0",
						includes : [],
						dependencies : {
							libs : [ "sap.m", "sap.ui.layout", "sap.ui.table" ],
							components : []
						},
						rootView : "sap.ui.demo.myFiori.view.RootApp", // içinde
						// app
						// tagi
						// bulunan
						// controllersýz
						// bir
						// view
						// oluþtur.

						config : {
						
							serviceConfig : {
								name : "Northwind",
								serviceUrl : "proxy/http/services.odata.org/Northwind/Northwind.svc/"
							}
						},

						// routing olmalý
						routing : {
							config : {
								routerClass : sap.ui.demo.myFiori.MyRouter,
								viewType : "XML",
								viewPath : "sap.ui.demo.myFiori.view",
							//  targetAggregation : "pages",
								clearTarget : false
							},
							routes : [ {
								pattern : "",
								name : "RootSplitApp",
								view : "RootSplitApp",
								targetAggregation : "pages",
								targetControl : "RootAppId",

								subroutes : [ {
									pattern : "",
									name : "Master",
									view : "Master",
									preservePageInSplitContainer : true,
									targetAggregation : "masterPages",
									targetControl : "RootSplitAppId",
									subroutes : [ {
										pattern : "",
										name : "Empty",
										view : "Empty",
										targetAggregation : "detailPages"
									}, {
										pattern : "Detail/{EmployeeID}",
										name : "Detail",
										view : "Detail",
										targetAggregation : "detailPages"
									},
									],

								} ],
							},

							{
								pattern : "EmployeeTable",
								name : "EmployeeTable",
								view : "EmployeeTable",
								targetControl : "RootAppId",
								targetAggregation : "pages" //UNUTMA
							},
							{
								pattern : "Form",
								name : "Form",
								view : "Form",
								targetControl : "RootAppId",
								targetAggregation : "pages" //UNUTMA
							},
							{
								pattern : "Date",
								name : "Date",
								view : "Date",
								targetControl : "RootAppId",
								targetAggregation : "pages" //UNUTMA
							},
							]

						},

					},

					init : function() {
						// initializes createContent
						sap.ui.core.UIComponent.prototype.init.apply(this,
								arguments);
						var mConfig = this.getMetadata().getConfig();
						var rootPath = jQuery.sap
								.getModulePath("sap.ui.demo.myFiori.");
						// set i18n model
//						var i18nModel = new sap.ui.model.resource.ResourceModel(
//								{
//									bundleUrl : [ rootPath,
//											mConfig.resourceBundle ].join("/")
//								});
//						
						var sServiceUrl = mConfig.serviceConfig.serviceUrl;
						var oModel = new sap.ui.model.odata.ODataModel(
								sServiceUrl, true);
						oModel.setCountSupported(false);
						this.setModel(oModel);

						this.getRouter().initialize();
					},

					
				});
