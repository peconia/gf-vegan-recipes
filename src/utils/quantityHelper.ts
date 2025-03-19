export function formatFraction(value: number) {
    const fractionMap: { [key: number]: string } = {
        0.25: "¼",
        0.5: "½",
        0.75: "¾",
        0.333: "⅓",
        0.666: "⅔",
    };


    if (Number.isInteger(value)) {
        return value;
    }

    const decimalPart = value - Math.floor(value);
    if (fractionMap[decimalPart]) {
        const wholeNumber = Math.floor(value);
        const fraction = fractionMap[decimalPart];
        return wholeNumber ? `${wholeNumber} ${fraction}` : fraction;
    }

    // If no matching fraction, return the number as is
    return value;
}
