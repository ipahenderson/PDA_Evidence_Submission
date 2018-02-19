var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should start with 0 runningTotal', function(){
    assert.equal(calculator.runningTotal, 0);
  })

  it('should be able to add()', function(){
  calculator.previousTotal = 1;
  calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to subtract()', function(){
  calculator.previousTotal = 7;
  calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to multiply()', function(){
  calculator.previousTotal = 3;
  calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide()', function(){
  calculator.previousTotal = 21;
  calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })


  it(' numberClick() should give new total after a calculation is complete', function(){
    calculator.add(5);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, 6);
  })

  it('should concatenate multiple numberClick()', function(){
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 22);
  })

  it('numberClick() should not concatenate if newTotal = true or previousTotal > 0', function(){
    calculator.newTotal = true;
    calculator.runningTotal = 1;
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2);
  })


  it('can chain multiple calculations', function() {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 2);
  })


  it('clear the running total without affecting the calculation', function() {
   calculator.numberClick(1);
   calculator.operatorClick('+');
   calculator.numberClick(2);
   calculator.clearClick();
   calculator.numberClick(3)
   calculator.operatorClick('=');
   assert.equal(calculator.runningTotal, 4);
 })





});
