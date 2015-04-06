Ext.define('Eureka.controller.EventsInterest', {
    extend: 'Ext.app.Controller',
     
    config: { 
    	refs:{
    		
    	},
    	control:{
    		'button[action=addToMyInterestEvents]':{
    			tap:function(button){
    				var data = button.getParent().getData();
    				console.log('Test..'+data.Title);
    				
    				var myInterestDS = Ext.getStore('EventsInterest');
    				if(button.getText() === "Add to My Interest"){
    					myInterestDS.add(data);
    					myInterestDS.sync();
    					button.setText("Remove from My Interest.");
    					button.setUi("action"); 
    				}
    				else{
    					var index = myInterestDS.find('Id',data.Id);
    					myInterestDS.removeAt(index);
    					myInterestDS.sync();
    					button.setText("Add to My Interest.");
    					button.setUi("confirm"); 
    				}
    			}
    		}
    	}
    },
    init:function(application){
    	this.application = application;
    	this.application.on({
    		'eventDetailsShown':this.onEventDetailsShown,
    		'scope':this
    	});
    },
    onEventDetailsShown:function(event){
    	var data = event.data;
    	var button = event.button;
    	
    	var myInterestDS = Ext.getStore('EventsInterest');
    	
    	var index = myInterestDS.find('Id',data.Id);
    	console.log(index);
    	if(index === -1){
    		//	
    		
    	}
    	else{  
    		button.setText("Remove from My Interest.");
			button.setUi("action");
    	}
    }
});