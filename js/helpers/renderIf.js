export default function renderIf(condition, content, countercontent) {
    if (condition) {
        return content;
    } else {
        return countercontent;
    }
}