function xo(str) {
    var splitX = (str.split("x").length - 1)
    var splitO = (str.split("o").length - 1)

    if (splitX == splitO) {
        str = "TRUE"
    } else {
        str = "FALSE"
    }
    console.log(str);
    return str;
}

xo('xoxo')