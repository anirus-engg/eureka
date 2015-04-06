Ext.define('Eureka.controller.EventDetails', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.util.Geolocation'],
     
    config: { 
    	refs:{
    		eventsContainer:'eventsContainer'
    	},
    	control:{
    		'eventsContainer events list':{
    			itemtap:function(list,index,target,record){
    				var eventDetailsView = Ext.create('Eureka.view.EventDetails');
    				eventDetailsView.setData(record.data);
    				this.getEventsContainer().push(eventDetailsView);
    				
    				this.application.fireEvent('eventDetailsShown',{
    					data:record.data,
    					button:eventDetailsView.getItems().items[0]
    				});
    			}
    		}
    	}
    },
    init:function(application){
    	this.application = application;
    	console.log("container called...");
    	 var geo = Ext.create('Ext.util.Geolocation', {
             autoUpdate: true,
             listeners: {
            	 locationupdate: function(geo) {
            	     var currentLat = geo.getLatitude();
            	     console.log(currentLat);
            	     var currentLng =  geo.getLongitude();
            	     console.log(currentLng);
            	     var altitude = geo.getAltitude();
            	     var speed = geo.getSpeed();
            	     var heading= geo.getHeading();
            	     this.loadEvents(currentLat,currentLng);
            	  },
            	  locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
            	     if(bTimeout)
            	       Ext.Msg.alert('Timeout occurred',"Could not get current position");
            	     else 
            	       alert('Error occurred.');
            	     },
            	  
                 scope: this
             }
         });
    	 geo.updateLocation();
    },
    loadEvents: function(currentLat,currentLng) {
        store = Ext.getStore('Events'),
        store.load({
            params: {
                latitude: currentLat,
                longitude: currentLng
            },
            callback: function() {
                
            },
            scope: this
        });
    }
});