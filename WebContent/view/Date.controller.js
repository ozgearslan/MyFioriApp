jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Date", {

	
	
onInit : function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);	
	},

	handleNavButtonPress : function() {
		this.router.myNavBack("Detail");
	},
	
	// DEFAULT DATE ÝS TODAY
	handleChange:function(oEvent){
		var o_date= this.byId("DP1").getDateValue();
        
        // CALL DATE FUNCTÝON ÝN FORMATTER.JS
        var o_date2= sap.ui.demo.myFiori.util.Formatter.date(o_date);
        dateValue= sap.ui.demo.myFiori.util.Formatter.date(new Date());
        
       if(o_date2>= dateValue)
        {  this.byId("DP1").setValueState(sap.ui.core.ValueState.None);
    	//   console.log("istenen");
    	   oText= this.byId("labelid"); 
    	  oText.setText("Secili Tarih: "+o_date2 );
   
        }
       else{
     
      this.byId("DP1").setDateValue(new Date());
      this.byId("DP1").setValueState(sap.ui.core.ValueState.Error);
      this.byId("DP1").setValueStateText("Bugunden once tarih girilemez!");
      
      oText= this.byId("labelid"); 
	  oText.setText("Secili Tarih: "+ dateValue );
         
       }
	},
	//TOGGLE BUTTON VÝSÝBÝLTY KONTROLÜ
//	onPress: function(oEvent){
//		if (oEvent.getSource().getPressed()) {
//		this.byId("DP1").setVisible(false);
//		}
//		else{
//			this.byId("DP1").setVisible(true);
//		}
//	},
	onSwitch: function(oEvent)
	{
		if (oEvent.getSource().getState()==false) {
			this.byId("DP1").setVisible(false);
			this.byId("labelid").setVisible(false);
			
			}
			else{
				this.byId("DP1").setVisible(true);
				this.byId("labelid").setVisible(true);
				
			}
	},
});