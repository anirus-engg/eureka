Ext.define('Eureka.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'first_name', type: 'string' },
            { name: 'last_name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'visibility', type: 'int' },
            { name: 'password', type: 'string' }
        ],
        proxy: {
        	type: 'rest',
        	format: 'php',
        	api: {
        		create: 'http://localhost/eureka-service/user/create',
        	},
        },
    }
});
