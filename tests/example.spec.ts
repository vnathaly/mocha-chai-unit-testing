import "mocha"
import {expect} from "chai"

describe('test suite', () => {
 
  it('test case', function() {
    const num : number = 5
    expect(num).to.be.above(4)
   })

})