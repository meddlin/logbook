Entry = new Mongo.Collection('entry');

EntrySchema = new SimpleSchema({
	date: {
		type: Date,
		label: "Date",
		optional: true
	},
	totalMileage: {
		type: String,
		label: "Total Mileage",
		optional: true
	},
	tripMileage: {
		type: String,
		label: "Trip Mileage",
		optional: true
	},

	createdAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		},
		denyUpdate: true
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			if (this.isUpdate){
				return new Date();
			}
		},
		denyInsert: true,
		optional: true
	}
});

Entry.attachSchema(EntrySchema);