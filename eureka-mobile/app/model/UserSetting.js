Ext.define('Eureka.model.UserSetting', {
	extends: 'Ext.data.Model',
	requires: ['Ext.data.identifier.Uuid'],
	config: {
		idProperty: 'id',
		identifier: 'uuid',
		fields: [
			{ name: 'email', type: 'string' },
			{ name: 'password', type: 'string' },
		],
		validations: [{
			type: 'presence',
			field: 'email',
			message: 'Please provide email.',
		},
		{
			type: 'presence',
			field: 'password',
			message: 'Please provide password.",
		}],
	},
});