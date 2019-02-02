const { ObjectID } = require('mongodb');

const assignmentIDs = [
	ObjectID('5c55c6885da3fe5041f96be4'),
	ObjectID('5c55c6abe455a65082b0b476'),
	ObjectID('5c55c6f0e455a65082b0b477'),
	ObjectID('5c55c6f0e455a65082b0b478'),
	ObjectID('5c55c6f0e455a65082b0b479'),
	ObjectID('5c55c6f0e455a65082b0b47a'),
];

const courseIDs = [
	ObjectID('5c55c6f0e455a65082b0b47a'),
	ObjectID('5c55c72de455a65082b0b47c'),
	ObjectID('5c55c72de455a65082b0b47d'),
];

const submissionIDs = [
	ObjectID('5c55c752e455a65082b0b47e'),
	ObjectID('5c55c752e455a65082b0b47f'),
	ObjectID('5c55c752e455a65082b0b480'),
	ObjectID('5c55c752e455a65082b0b481'),
	ObjectID('5c55c752e455a65082b0b482'),
	ObjectID('5c55c752e455a65082b0b483'),
	ObjectID('5c55c752e455a65082b0b484'),
	ObjectID('5c55c752e455a65082b0b485'),
	ObjectID('5c55c752e455a65082b0b486'),
	ObjectID('5c55c752e455a65082b0b487'),
	ObjectID('5c55c752e455a65082b0b488'),
	ObjectID('5c55c752e455a65082b0b489'),
];

const userIDs = [
	ObjectID('5c55c7d3e455a65082b0b48a'),
	ObjectID('5c55c7d3e455a65082b0b48b'),
	ObjectID('5c55c7d3e455a65082b0b48c'),
];

module.exports = {
	assignmentIDs,
	courseIDs,
	submissionIDs,
	userIDs,
};