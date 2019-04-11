function kata(holla) {
    var hollaHup = ' '
    for (i = holla.length - 1; i >= 0; i--) {
        hollaHup += holla[i];

    }
    console.log(hollaHup)
    return;
}
kata('hallo')