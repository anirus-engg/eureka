Ext.define('Eureka.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	xtype: 'home'
            },
            {
            	xtype: 'eventsContainer'
            },
            {
            	xtype: 'eventsInterest'
            }
        ]
    }
});
