Ext.define('Eureka.store.EventsInterest', {
    extend: 'Ext.data.Store',
    config:{
    	model: 'Eureka.model.Event',
    	autoLoad:'true',  
    	proxy:{
    		type:'localstorage',
    		id:'eventsInterest'
   
    	}
    }
});