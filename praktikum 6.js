function tampildata() {
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var nilai = document.getElementById("nilai").value;
    var produk = document.getElementsByName("produk");
    var daftarproduk = ''
    var layanan = document.querySelector("input[name=layanan]:checked").value;
    var kritik = document.getElementById("kritik").value;

    for(var produk2 of produk){
        if(produk2.checked) {
            daftarproduk += ', '+ produk2.value
        }
    }

    daftarproduk = daftarproduk.substring(1)

    alert(
        "Nama : " +
            nama +
            "\nUmur : " +
            umur +
            "\nJenis Kelamin : " +
            jeniskelamin +
            "\nNilai Kepuasan : " +
            nilai +
            "\nProduk : " +
            daftarproduk +
            "\nLayanan : " +
            layanan +
            "\nKriktik dan Saran : " +
            kritik
    );
}