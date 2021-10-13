const assert = require('assert');
const Paint_Can = require('../paintCan.js');

describe('Paint_Can', function(){
    let paintCan;
    
        beforeEach(function () {
            paintCan = new Paint_Can(25);
        });
    
        it('should have a number of litres of paint', function() {
            const actual = paintCan.litresOfPaint
            assert.strictEqual(actual, 25)
        })
    
        xit('should be able to check it is empty')
    
        xit('should be able to empty itself of paint')

    });