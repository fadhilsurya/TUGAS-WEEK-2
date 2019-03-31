function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    var menit = menit % 60
    if (menit < 10) {
        menit = '0' + menit
    } else {
        menit = menit;
    }
    console.log(jam + ' : ' + menit);
    return
}
konversiMenit(80)