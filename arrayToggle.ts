/**
 * Return an Array with a value included/removed, with optional forcing.
 *
 * @param arr Array of values to be toggled
 * @param val Value being toggled
 * @param forced If true, it will force the item to be included, otherwise, remove
 * @returns Array with value toggled
 */
export default function arrayToggle<T>(arr: T[], val: T, forced?: boolean): T[] {
    if (forced && arr.includes(val)) {
        return [...arr];
    } else if (forced === false || arr.includes(val)) {
        return arr.filter((v: typeof val) => v !== val);
    }
    return [...arr, val];
}
