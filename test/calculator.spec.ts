import "mocha"
import {expect} from "chai"
import Calculator from "../src/calculator"

describe('Test Calculator Class', ()=>{
  const cal = new Calculator();

  it('Should return sum',()=>{
    const result = cal.add(2,3);
    expect(result).to.equal(5);

  })
  it('Should return substraction', ()=>{
    const result = cal.substract(4,1);
    expect(result).to.equal(3);
  })
  it('Should return Multiply', ()=>{
    const result = cal.multiply(1,2);
    expect(result).to.equal(2);
  })
  it('Should return divide', ()=>{
    
    const result = cal.divide(15,3);
    expect(result).to.equal(5);
    expect(()=> cal.divide(10,0)).to.throw("Can't not divide by zero");
    
  })
})
