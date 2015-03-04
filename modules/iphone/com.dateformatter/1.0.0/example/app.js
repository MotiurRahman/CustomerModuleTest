var window = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var btnGetDate = Titanium.UI.createButton({
	title : 'Get Date',
	zIndex : 1,
	right : 4,
	bottom : 4,
	width : '40%',
	height : 60
});
btnGetDate.addEventListener('click', function(e) {
	var iosdatemodule = require('com.dateFormatter');
	var systemFormattedDate;
	
	//Pass fully qualified date string in the method. For Ex: 2014-12-29T16:17:26+05:30//
	/*
	systemFormattedDate= iosdatemodule.getSystemFormattedDate('2014-12-29T16:17:26+05:30');
	*/

	//Or either you can use javascript open source Moment.js Library to get the date in the above format//
	var moment = require('alloy/moment');
	var dateToFormate = momemt('24-Dec-2014').format();
	systemFormattedDate = iosdatemodule.getSystemFormattedDate(dateToFormate);

	alert(systemFormattedDate);
});
window.add(btnGetDate);

window.open();

