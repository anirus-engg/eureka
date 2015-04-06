Ext.define('Eureka.view.EventsInterest', {
    extend: 'Ext.Panel',
    xtype: 'eventsInterest', 
   
    config: {
        title:'My Interests',
        iconCls:'star',
        layout:'fit', 
        items:[
               	{
               		xtype:'titlebar',
               		title:'My Events Interest',
               		docked:'top'
               	},           		     
		        {
		        	xtype:'list',
		        	store:'EventsInterest',
		        	itemTpl:'<h1><b><i>{Title}</b> - {Description}</h1><br>{Add1}, {Add2}, {City}, {State}, {Zip_Code}'
		        }
         ]
    }
});