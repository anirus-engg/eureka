Ext.define('Eureka.store.Events', {
    extend: 'Ext.data.Store',
    requires: ['Ext.util.Geolocation'],
    config:{
    	model: 'Eureka.model.Event',
    	autoLoad:'true', 	
    	proxy:{
    		type:'ajax',
    		url:'http://localhost/eureka-service/event/get',		
    		reader:{
    			type:'json'

    		}
    	}
    }
});