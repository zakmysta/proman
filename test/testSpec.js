var chai = require("./helpers/chai")

describe('Test', function(){
	describe('Array', function(){
		
		before(function(){
			aVariable = 5;
		});

		it('should do a bunch of random things', function(){
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
			expect("this string").to.equal("this string");
			expect(5 > 7).to.not.equal(true);
		});
	});
});
