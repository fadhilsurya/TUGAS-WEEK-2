var n, x, i, j;
rev = "";
n = "halo bro";
x = n.split(" ");
for (i = 0; i < x.length; i++) {
    for (j = x[i].length - 1; j >= 0; j--) {
        console.log(x[i].charAt(j));
    }
}