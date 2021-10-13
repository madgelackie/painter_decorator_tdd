const assert = require('assert');
const Room = require('../models.js');
const Paint_Can = require('../models.js');
const Decorator = require('../models.js');  

describe('Room', function(){

    beforeEach(function (){
        room = new Room(20, false);
    })

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

xdescribe('Paint_Can', function(){

});

    xit('should have a number of litres of paint')

    xit('should be able to check it is empty')

    xit('should be able to empty itself of paint')

xdescribe('Decorator', function(){

});
    xit('should start with empty paint stock')

    xit('should be able to add can of paint to paint stock')

    xit('should be able to calculate total litres of paint in stock')

    xit('should be able to calculate if total paint stock is enough to paint room')
    
    xit('should be able to paint room if enough paint in stock')