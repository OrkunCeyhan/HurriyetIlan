 

//Ilan Bolgesi özet
const radioButtons = document.querySelectorAll('input.bolge');
const bolgeOzet = document.getElementById('bolgeOzet');

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        bolgeOzet.textContent = `${radioButton.value}`;
    });
});

//Boyut özet
const dropdown = document.getElementById('boyut');
const boyutOzet = document.getElementById('boyutOzet');
const priceOzet = document.getElementById('priceOzet');

dropdown.addEventListener('change', () => {
    boyutOzet.textContent = `${dropdown.options[dropdown.selectedIndex].text}`;
    document.getElementById('txtTutar').value = `${dropdown.value} TL + KDV`;
    let x = (dropdown.value * 120 / 100);
    priceOzet.textContent = `${x} TL`;

});
function baslikSec() {
    var dropdown = document.getElementById("drpBaslik");
    var taniticiTextarea = document.getElementById("txtTaniticiYeni");
    var vefatEdenKisiTextarea = document.getElementById("txtVefatEdenKisi");
    var bilgileriTextarea = document.getElementById("TxtBilgileriYeni");
    var IlanVerenKisiTextarea = document.getElementById("txtIlanVerenKisi")
    if (dropdown.value === "0") {  
        taniticiTextarea.value = "ÜZGÜNÜZ";  
        vefatEdenKisiTextarea.value = " ";  
        bilgileriTextarea.value = "01.07.2018 günü kaybetmenin derin üzüntüsü içerisindeyiz. Merhumenin Cenazesi 02.07.2018 Salı günü (bugün) Ataköy 5. Kısım Ömer Duruk Camii'nde kılınacak öğle namazını müteakip Zincirlikuyu Aile Mezarlığı'na defnedilecektir."; // "TxtBilgileriYeni" alanına metni yaz
        IlanVerenKisiTextarea.value = "Ailesi";
    }
    if (dropdown.value === "1") {  
        taniticiTextarea.value = "ÜZGÜNÜZ";  
        vefatEdenKisiTextarea.value = "leyla kolsuz";  
        bilgileriTextarea.value = "01.07.2018 günü kaybetmenin derin üzüntüsü içerisindeyiz. Merhumenin Cenazesi 02.07.2018 Salı günü (bugün) Ataköy 5. Kısım Ömer Duruk Camii'nde kılınacak öğle namazını müteakip Zincirlikuyu Aile Mezarlığı'na defnedilecektir."; // "TxtBilgileriYeni" alanına metni yaz
        IlanVerenKisiTextarea.value = "Ailesi";
    }
    if (dropdown.value === "2") {  
        taniticiTextarea.value = "Sevgili dostum";  
        vefatEdenKisiTextarea.value = "leyla kolsuz";  
        bilgileriTextarea.value = " aramızdan zamansız ayrılışını derin bir teessürle öğrenmiş bulunuyorum.Kendisine Allah'tan rahmet, sevenlerine sabır ve başsağlığı dileriz. Nur için yatsın."
        IlanVerenKisiTextarea.value = "HÜMEYRA ÖZKAN";
    }
    if (dropdown.value === "3") {  
        taniticiTextarea.value = "Canımız evladımız, sevgili kardeşimiz Ailemizin neşe kaynağı,";  
        vefatEdenKisiTextarea.value = "HÜMEYRA ÖZTÜRK'ü";  
        bilgileriTextarea.value = "  (1 Ocak 2001 - 15 Mart 2018) aramızdan ayrılışının 1.yılında sevgi ve özlemle anıyoruz.Sen hep bizimlesin..."
        IlanVerenKisiTextarea.value = "AİLESİ";
    }
    if (dropdown.value === "4") {  
        taniticiTextarea.value = "Gazeteci, Özel İnsan Değerli Aile Büyüğümüz"; 
        vefatEdenKisiTextarea.value = "HÜMEYRA KOLSUZ’un";  
        bilgileriTextarea.value = "  vefatı nedeniyle acımızı paylaşan, bizleri yalnız bırakmayarak cenaze törenimize katılan, taziyelerini bildiren tüm akraba, dost ve meslektaşlarımıza sonsuz teşekkürlerimizi sunarız."
        IlanVerenKisiTextarea.value = "AİLESİ";
    }
    if (dropdown.value === "5") { 
        taniticiTextarea.value = "Bel ameliyatı şikayetiyle başvurduğum ÜNİVERSİTE HASTANESİ’nde Uyguladığı cerrahi girişimle sağlık koşullarımın düzelmesinde etkili olan"; // Tanıtıcı Giriş alanına "ÜZGÜNÜZ" yaz
        vefatEdenKisiTextarea.value = "Prof Dr. HÜMEYRA KOCABIYIK'A";  
        bilgileriTextarea.value = "   Dr.ŞEVVAL KOLSUZ'A ve tüm doktorlarına Anestezi Bölüm doktorları ve hemşirelerine tedavi ve bakım sürecinde emeği geçen Uludağ Üniversitesi Hastanesi tüm hasta bakıcıları ve hemşirelerine en içten teşekkürlerimi ve şükranlarımı sunarım."
        IlanVerenKisiTextarea.value = "ELİF YAŞLI";
    }
    if (dropdown.value === "6") {  
        taniticiTextarea.value = " Merhume Hümeyra Kolsuz ve Merhum Hasan Kolsuz'un kızı Şevval Kolsuz'un annesi, Elif ve Semanur'un nineleri, Hüseyin Kolsuz'un sevgili eşi, Değerli aile büyüğümüz,"; // Tanıtıcı Giriş alanına "ÜZGÜNÜZ" yaz
        vefatEdenKisiTextarea.value = "LEYLA KOLSUZ'u";  
        bilgileriTextarea.value = "  01.07.2018 günü kaybetmenin derin üzüntüsü içerisindeyiz. Merhumenin Cenazesi 02.07.2018 Salı günü (bugün) Ataköy 5. Kısım Ömer Duruk Camii'nde kılınacak öğle namazını müteakip Zincirlikuyu Aile Mezarlığı'na defnedilecektir."
        IlanVerenKisiTextarea.value = "AİLESİ";
    }
    if (dropdown.value === "7") { 
        taniticiTextarea.value = "  ,";  
        vefatEdenKisiTextarea.value = " ";  
        bilgileriTextarea.value = "  "
        IlanVerenKisiTextarea.value = " ";
    }
    
}
//Tarihi yazdırma
function showDatePicker() {
    const datePickerContainer = document.getElementById('datePickerContainer');
    const dateInput = document.getElementById('dateInput'); 
    const inputRect = dateInput.getBoundingClientRect();
    datePickerContainer.style.display = 'block';
    const datePicker = document.getElementById('datePicker');  
    datePicker.addEventListener('change', function () {
        dateInput.value = datePicker.value;
        datePickerContainer.style.display = 'none';
    });
    dateInput.addEventListener('blur', function () {
        datePickerContainer.style.display = 'none';
    });
}
 
//tarihi inputa yazdırdım
function updateTarih() {
    const dateInput = document.getElementById('datePicker').value;
    const tarihOzet = document.getElementById('tarihOzet');

    tarihOzet.textContent = dateInput;
}