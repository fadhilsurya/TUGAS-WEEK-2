var nama = 'fadhil';
var peran = 'juragan';
if (nama === '' && peran === '') {
    console.log('Nama dan Peran harus diisi')
} else if (nama !== '' && peran === '') {
    console.log('Hallo' + ' ' + nama + ' ' + 'segera isi peranmu')
} else if (nama !== '' && peran === 'cukong') {
    console.log('hallo' + ' ' + nama + ' ' + peran + ' ' + 'selamat datang di PUBG gunakan pasukan bayaran untuk menyerang musuhmu')
} else if (nama !== '' && peran === 'kumpeni') {
    console.log('hallo' + ' ' + nama + ' ' + peran + ' ' + 'selamat datang di PUBG gunakan pasukan kerjaan belanda untuk menyerang musuhmu')
} else if (nama !== '' && peran === 'juragan') {
    console.log('hallo' + ' ' + nama + ' ' + peran + ' ' + 'selamat datang di PUBG gunakan pasukan jawara untuk menyerang musuhmu')
}