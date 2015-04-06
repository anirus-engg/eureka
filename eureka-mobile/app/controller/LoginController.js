Ext.define('Eureka.controller.LoginController', {
    extend: 'Ext.app.Controller',
    
    config: {
    	models: ['User'],
    	store: ['Users'],
        refs: {
            main: 'loginview',
        },
        control: {
            'loginview': {
            	initialize: 'onInitLogin',
            },
            'button[action=press]': {
            	tap: 'onSubmit',
            }
        }
    },
    
    onInitLogin: function() {
    	console.log('Initialize loginview');
    },
    
    onSubmit: function() {
    	console.log('Tapped the submit button in loginview');
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
    }
});
