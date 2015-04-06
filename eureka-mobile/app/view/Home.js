Ext.define('Eureka.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    
    config: {
        title:'Home',
        iconCls:'home',
        layout:'fit',
        scrollable:true,
        styleHtmlContent:true,
        styleHtmlCls:'homepage',
        html:['<h1>Eureka!!!</h1>',
              '<hr>',
              '<p>Welcome to app</p>'].join("")
    }
});