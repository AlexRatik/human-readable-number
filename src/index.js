module.exports = function toReadable(number) {
    const v1 = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const v2 = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const v3 = {
        0: "",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    if (number === 0) {
        return "zero";
    }
    if (0 < number && number < 10) {
        return v1[number];
    } else if (9 < number && number < 20) {
        return v2[number];
    } else if (19 < number && number < 100) {
        const num_arr = number.toString().split("");
        if (num_arr[1] != 0) {
            return v3[num_arr[0]] + " " + v1[num_arr[1]];
        } else {
            return v3[num_arr[0]];
        }
    } else if (99 < number && number < 1000) {
        const num_arr = number.toString().split("");
        if (num_arr[1] != 1 && num_arr[1] != 0)
            if (num_arr[2] != 0) {
                return (
                    v1[num_arr[0]] +
                    " hundred " +
                    v3[num_arr[1]] +
                    " " +
                    v1[num_arr[2]]
                );
            } else {
                return v1[num_arr[0]] + " hundred " + v3[num_arr[1]];
            }
        else if (num_arr[1] == 0 && num_arr[2] == 0) {
            return v1[num_arr[0]] + " hundred";
        } else if (num_arr[1] == 0) {
            return v1[num_arr[0]] + " hundred " + v1[num_arr[2]];
        } else {
            return v1[num_arr[0]] + " hundred " + v2[num_arr[1] + num_arr[2]];
        }
    }
};
