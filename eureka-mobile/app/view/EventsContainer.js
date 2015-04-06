Ext.define('Eureka.view.EventsContainer', {
    extend: 'Ext.NavigationView',
    xtype: 'eventsContainer',   
    config: { 
    	title:'Events',
        iconCls:'maps',
        scroll:true,
    	items:[
    	       {
    	    	   xtype:'events'
    	       }
    	]        
    }
});