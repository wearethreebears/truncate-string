export default {
    /*
        Truncate the beginning of the string
    */
    fromStart(string, charCount, ellips = '...') {
        let stringLength = string.length,
            truncatedStart = stringLength - charCount;

        return `${ellips}${string.substring(truncatedStart, stringLength).trim()}`;
    },

    /*
        Truncate the end of the string
    */
    fromEnd(string, charCount, ellips = '...') {
        return `${string.substring(0, charCount).trim()}${ellips}`;
    },

    /*
        Truncate the middle of the string
    */
    fromMiddle(string, charCount, ellips = '[...]') {
        let stringLength = string.length,
            sectionCharCount = charCount / 2,
            truncatedStart = string.substring(0, sectionCharCount).trim(),
            beginningOfTheEnd = stringLength - sectionCharCount,
            truncatedEnd = string.substring(beginningOfTheEnd, stringLength).trim();

        return `${truncatedStart}${ellips}${truncatedEnd}`
    }
}