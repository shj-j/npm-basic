import {romanizer} from "../src/Romanizer";

describe('romanizer', () => {
    it('should return X when give 10', () => {
        var result = romanizer(10);

        expect(result).toEqual("X");
    });
});