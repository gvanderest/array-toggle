import arrayToggle from "../arrayToggle";

describe("arrayToggle", () => {
    it("should toggle a value in/out", () => {
        const original = [1, 2, 3];

        const toggledOnce = arrayToggle(original, 2);
        expect(toggledOnce).toMatchObject([1, 3]);

        const toggledTwice = arrayToggle(toggledOnce, 2);
        expect(toggledTwice).toMatchObject([1, 3, 2]);
    });

    it("should respect the force argument being true", () => {
        const original = [1, 2, 3];

        const toggledOnce = arrayToggle(original, 2, true);
        expect(toggledOnce).toMatchObject([1, 2, 3]);

        const toggledTwice = arrayToggle(toggledOnce, 2, true);
        expect(toggledTwice).toMatchObject([1, 2, 3]);
    });

    it("should respect the force argument being false", () => {
        const original = [1, 2, 3];

        const toggledOnce = arrayToggle(original, 2, false);
        expect(toggledOnce).toMatchObject([1, 3]);

        const toggledTwice = arrayToggle(toggledOnce, 2, false);
        expect(toggledTwice).toMatchObject([1, 3]);
    });
});
