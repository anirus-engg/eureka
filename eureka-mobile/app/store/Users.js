Ext.define('Eureka.store.Users', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.Ajax'],
	config: {
		model: 'Eureka.model.User',
		autoLoad: true,
		proxy: {
			type: "ajax",
			url: "http://localhost/eureka-service/user/get/",
			reader: {
				type: 'json',
			},
		},
	},
});