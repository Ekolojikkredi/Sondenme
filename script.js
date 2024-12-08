document.getElementById('kayit-ol').addEventListener('click', function() {
    let kayitForm = `
        <h2>Kayıt Ol</h2>
        <form id="kayitForm">
            <label for="isim">İsim:</label>
            <input type="text" id="isim" name="isim" required><br>
            <label for="soyisim">Soyisim:</label>
            <input type="text" id="soyisim" name="soyisim" required><br>
            <label for="il">İl:</label>
            <input type="text" id="il" name="il" required><br>
            <label for="ilce">İlçe:</label>
            <input type="text" id="ilce" name="ilce" required><br>
            <label for="okul">Okul:</label>
            <input type="text" id="okul" name="okul" required><br>
            <label for="okul_numarasi">Okul Numarası:</label>
            <input type="text" id="okul_numarasi" name="okul_numarasi" required><br>
            <label for="email">E-posta:</label>
            <input type="email" id="email" name="email" required><br>
            <button type="submit">Kayıt Ol</button>
        </form>
    `;
    document.querySelector('.right-column').innerHTML = kayitForm;

    document.getElementById('kayitForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let ogrenciler = JSON.parse(localStorage.getItem('ogrenciler')) || [];
        let yeniOgrenci = {
            isim: document.getElementById('isim').value,
            soyisim: document.getElementById('soyisim').value,
            il: document.getElementById('il').value,
            ilce: document.getElementById('ilce').value,
            okul: document.getElementById('okul').value,
            okul_numarasi: document.getElementById('okul_numarasi').value,
            email: document.getElementById('email').value,
            puan: 0
        };
        ogrenciler.push(yeniOgrenci);
        localStorage.setItem('ogrenciler', JSON.stringify(ogrenciler));
        alert('Kayıt başarıyla tamamlandı!');
        document.querySelector('.right-column').innerHTML = '';
    });
});

document.getElementById('kayit-ol').addEventListener('click', function() {
    let kayitForm = `
        <h2>Kayıt Ol</h2>
        <form id="kayitForm">
            <label for="isim">İsim:</label>
            <input type="text" id="isim" name="isim" required><br>
            <label for="soyisim">Soyisim:</label>
            <input type="text" id="soyisim" name="soyisim" required><br>
            <label for="il">İl:</label>
            <input type="text" id="il" name="il" required><br>
            <label for="ilce">İlçe:</label>
            <input type="text" id="ilce" name="ilce" required><br>
            <label for="okul">Okul:</label>
            <input type="text" id="okul" name="okul" required><br>
            <label for="okul_numarasi">Okul Numarası:</label>
            <input type="text" id="okul_numarasi" name="okul_numarasi" required><br>
            <label for="email">E-posta:</label>
            <input type="email" id="email" name="email" required><br>
            <button type="submit">Kayıt Ol</button>
        </form>
    `;
    document.querySelector('.right-column').innerHTML = kayitForm;

    document.getElementById('kayitForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let ogrenciler = JSON.parse(localStorage.getItem('ogrenciler')) || [];
        let yeniOgrenci = {
            isim: document.getElementById('isim').value,
            soyisim: document.getElementById('soyisim').value,
            il: document.getElementById('il').value,
            ilce: document.getElementById('ilce').value,
            okul: document.getElementById('okul').value,
            okul_numarasi: document.getElementById('okul_numarasi').value,
            email: document.getElementById('email').value,
            puan: 0
        };
        ogrenciler.push(yeniOgrenci);
        localStorage.setItem('ogrenciler', JSON.stringify(ogrenciler));
        alert('Kayıt başarıyla tamamlandı!');
        document.querySelector('.right-column').innerHTML = '';
    });
});

document.getElementById('veri-girisi').addEventListener('click', function() {
    let veriGirisiForm = `
        <h2>Veri Girişi</h2>
        <form id="veriGirisiForm">
            <label for="ogrenci_id">Öğrenci ID:</label>
            <input type="number" id="ogrenci_id" name="ogrenci_id" required><br>
            <label for="atik_turu">Atık Türü:</label>
            <select id="atik_turu" name="atik_turu" required>
                <option value="kağıt">Kağıt</option>
                <option value="plastik">Plastik</option>
                <option value="cam">Cam</option>
                <option value="metal">Metal</option>
                <option value="elektronik">Elektronik</option>
                <option value="yağ">Yağ</option>
                <option value="tekstil">Tekstil</option>
            </select><br>
            <label for="miktar">Miktar (kg):</label>
            <input type="number" id="miktar" name="miktar" step="0.01" required><br>
            <label for="dogru_ayristirma">Doğru Ayrıştırma:</label>
            <select id="dogru_ayristirma" name="dogru_ayristirma" required>
                <option value="1">Evet</option>
                <option value="0">Hayır</option>
            </select><br>
            <label for="teslim_alan">Teslim Alan:</label>
            <input type="text" id="teslim_alan" name="teslim_alan" required><br>
            <button type="submit">Veri Girişi</button>
        </form>
    `;
    document.querySelector('.right-column').innerHTML = veriGirisiForm;

    document.getElementById('veriGirisiForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let atiklar = JSON.parse(localStorage.getItem('atiklar')) || [];
        let yeniAtik = {
            ogrenci_id: document.getElementById('ogrenci_id').value,
            atik_turu: document.getElementById('atik_turu').value,
            miktar: document.getElementById('miktar').value,
            dogru_ayristirma: document.getElementById('dogru_ayristirma').value,
            teslim_alan: document.getElementById('teslim_alan').value
        };
        atiklar.push(yeniAtik);
        localStorage.setItem('atiklar', JSON.stringify(atiklar));
        alert('Veri başarıyla girildi!');
        document.querySelector('.right-column').innerHTML = '';
        
        // Toplam atık sayacını güncelle
        let toplamAtikKilogrami = atiklar.reduce((total, atik) => total + parseFloat(atik.miktar), 0);
        document.getElementById('toplam-atik-kilogrami').textContent = toplamAtikKilogrami;
    });
});

document.getElementById('veri-gorme').addEventListener('click', function() {
    let ogrenciler = JSON.parse(localStorage.getItem('ogrenciler')) || [];
    let atiklar = JSON.parse(localStorage.getItem('atiklar')) || [];
    
    let veriGormeHtml = '<h2>Veri Görme</h2>';
    
    veriGormeHtml += '<h3>Öğrenciler:</h3><ul>';
    ogrenciler.forEach((ogrenci, index) => {
        veriGormeHtml += `<li>ID: ${index}, İsim: ${ogrenci.isim}, Soyisim: ${ogrenci.soyisim}, Puan: ${ogrenci.puan}</li>`;
    });
    veriGormeHtml += '</ul>';
    
    veriGormeHtml += '<h3>Atıklar:</h3><ul>';
    atiklar.forEach((atik, index) => {
        veriGormeHtml += `<li>ID: ${index}, Öğrenci ID: ${atik.ogrenci_id}, Atık Türü: ${atik.atik_turu}, Miktar: ${atik.miktar} kg, Doğru Ayrıştırma: ${atik.dogru_ayristirma}, Teslim Alan: ${atik.teslim_alan}</li>`;
    });
    veriGormeHtml += '</ul>';
    
    document.querySelector('.right-column').innerHTML = veriGormeHtml;
});
