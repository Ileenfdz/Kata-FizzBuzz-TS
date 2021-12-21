// import { sum } from "../ts/Example";
import { multiply } from "../ts/Example";

describe('Just an example to test jest installation', () => {
    // test('should be two', () => {
    //     expect(sum(1, 1)).toBe(2);
    // });
    test('should be two', () => {
        expect(multiply(2, 2)).toBe(4);
    });
});