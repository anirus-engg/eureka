Ext.define('Eureka.view.Events', {
    extend: 'Ext.Panel',
    xtype: 'events', 
   
    config: {
        title:'Events',
        layout:'fit', 
        items:[
            		     
		        {
		        	xtype:'list',
		        	store:'Events',
		        	itemTpl:'<h1><b><i>{Title}</b> - {Description}</h1><br>{Add1}, {Add2}, {City}, {State}, {Zip_Code}'
		        }
         ]
    }
});