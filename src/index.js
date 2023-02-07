module.exports = function check(str, bracketsConfig) {
  let mapConfig = new Map(bracketsConfig);
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let isIdentical = str[i] === mapConfig.get(str[i]);
        if ((mapConfig.has(str[i]) && !isIdentical) || (isIdentical && result.indexOf(str[i]) === -1)) {
            result.push(str[i]);
        } else {
            if ((mapConfig.get(result[result.length - 1]) === str[i] && !isIdentical) || (isIdentical && result.indexOf(str[i]) > -1)) {
                result.pop();
            } else {
                return false;
            }
        }
    }
    return (result.length === 0) ? true : false;
}
