Ext.define('Eureka.controller.UserController', {
    extend: 'Ext.app.Controller',
    
    config: {
    	models: ['User'],
    	store: ['Users'],
        refs: {
            
        },
        control: {
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
