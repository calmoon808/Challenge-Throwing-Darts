// write tests here
const scoreCalculator = require("../index.js")
const chai = require("chai")
const expect = chai.expect;

describe("scoreCalculator", () => {
    describe("isFunction", () => {
        it("should be a function", () => {
            expect(scoreCalculator).to.be.a("function");
        });
    });
    describe("Scores", () => {
        it("should only take in arrays as parameters", () => {
            expect(scoreCalculator()).to.equal('parameter must be an array');
            expect(scoreCalculator(1)).to.equal('parameter must be an array');
            expect(scoreCalculator('asdf')).to.equal('parameter must be an array');
            expect(scoreCalculator({tests: 'suck'})).to.equal('parameter must be an array');
        });
        it('should only have score values in between 1 and 20', () => {
            expect(scoreCalculator([0])).to.equal('Scores must be in between 1 and 20');
            expect(scoreCalculator([21])).to.equal('Scores must be in between 1 and 20');
        });
    });
    describe("Output", () => {
        it("should output the correct end score", () => {
            expect(scoreCalculator([1, 5, 11])).to.equal(15);
        });
        it("should add correct amount of bonus points", () => {
            expect(scoreCalculator([1, 2, 1, 4, 4, 2])).to.equal(160);
        })
    });
});