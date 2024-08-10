<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $nim = $_POST['nim'];
    $alamat_asal = $_POST['alamat_asal'];
    $alamat_kos = $_POST['alamat_kos'];
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $no_hp = $_POST['no_hp'];
    $email = $_POST['email'];

    $data = "$nama,$nim,$alamat_asal,$alamat_kos,$jenis_kelamin,$no_hp,$email\n";

    file_put_contents("data.txt", $data, FILE_APPEND);

    header("Location: indeks.html");
    exit();
}
?>
