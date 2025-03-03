export const add = (a,b) => a + b;

describe("Math functions", () => {
    it("should add numbers", () => {
        expect(add(5,4).toBe(9));
    })
})