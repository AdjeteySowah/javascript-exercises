const palindromes = function (str) {
    const data = "abcdefghijklmnopqrstuvwxyz0123456789";
    const dataMadeArray = data.split("");

    let refinedString = str
        .toLowerCase()
        .split("")
        .filter((item) => {
            return dataMadeArray.includes(item);
        })
        .join("");

    return refinedString === refinedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
