Ext.define('Eureka.view.EventDetails', {
    extend: 'Ext.Panel',
    xtype: 'eventDetails',
   
    config: { 
    	title: 'Details',
        layout:'fit',
        scrollable:true,
        styleHtmlContent:true,
        styleHtmlCls:'eventDetailsPage' ,
        tpl:'<h1><b><i>{Title}</b> - {Description}</h1><br>{Add1}, {Add2}, {City}, {State}, {Zip_Code}',
        items:[
               {
            	  xtype:'button',
            	  text:'Add to My Interest',
            	  iconMask:true,
            	  iconCls:'star',
            	  ui:'confirm',
            	  docked:'top',
            	  action:'addToMyInterestEvents'
               }
          ]

    }
});