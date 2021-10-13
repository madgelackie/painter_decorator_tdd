const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
let room;

    beforeEach(function (){
        room = new Room(20, false);
    });

    it('should have an area', function (){
        // const room = new Room(20);
        const actual = room.area;
        assert.strictEqual(actual, 20)
    })

    it('should start not painted', function (){
        // const room = new Room (20, false);
        const actual = room.isPainted;
        assert.strictEqual(actual, false)
    })

    it('should be able to be painted', function (){
        // const room = new Room (20, false);
        const actual = room.hasBeenPainted();
        assert.strictEqual(actual, true)
    })
});
