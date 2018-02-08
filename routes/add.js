var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('friend', {
		"name": req.params.name
		"description": req.params.description
		"imageURL": "http://lorempixel.com/400/400/people"
	});
	data.friends.push(newFriend);
 }
