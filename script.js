document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil data dari formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;

    // Validasi sederhana
    if (name === "" || email === "" || phone === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // Simpan data ke Local Storage
    const participant = {
        name: name,
        email: email,
        phone: phone,
        category: category
    };
    localStorage.setItem('participant', JSON.stringify(participant));

    // Tampilkan hasil pendaftaran
    document.getElementById('info').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultContent').innerHTML = `
        <p>Terima kasih, ${name}! Anda telah mendaftar untuk lomba ${category.toUpperCase()}!</p>
        <p>Email: ${email}</p>
        <p>Nomor Telepon: ${phone}</p>
    `;

    // Reset formulir setelah pendaftaran
    document.getElementById('regForm').reset();
});

// Tombol kembali ke halaman utama
document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('info').style.display = 'block';
    document.getElementById('registration').style.display = 'block';
    document.getElementById('result').style.display = 'none';
});
