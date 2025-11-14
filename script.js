// ufak, dağınık isim değişkenleriyle çalışıyoruz — yine de düzgün çalışsın
let sAg = 0; // sol taraf total
let right_w = 0; // sağ taraf total
let shake = 0; // anlık salınım
let shakeDir = 1; // yön
let shakeInterval;

const tahtarevalli = document.getElementById('tahtarevalli'); // id unchanged
const display = document.getElementById('agirlik-goruntusu');
const sKids = document.getElementById('sol-agirliklar');
const rKids = document.getElementById('sag-agirliklar');
const btn_s_add = document.getElementById('sol-ekle');
const btn_s_rem = document.getElementById('sol-cikar');
const btn_r_add = document.getElementById('sag-ekle');
const btn_r_rem = document.getElementById('sag-cikar');
const btn_reset = document.getElementById('sifirla');

function guncelleGosterge() {
    if (!display) return; // kısa kontrol
    const sol = sAg || 0;
    const sag = right_w || 0;
    let txt = 'Sol: ' + sol + ' kg | Sağ: ' + sag + ' kg';
    if (sol > 0 && sol === sag) txt += ' - Dengede!';
    display.textContent = txt;
}

function addWeightToSide(side) {
    const w = document.createElement('div');
    w.className = 'agirlik';
    w.style.position = 'absolute';
    let count = 0;
    if (side === 'left') {
        count = sKids.children.length;
        w.style.left = '15px';
        sKids.appendChild(w);
    } else {
        count = rKids.children.length;
        w.style.right = '15px';
        rKids.appendChild(w);
    }
    // küçük rastgelelik: her insan öyle koyar
    const jitter = Math.floor(Math.random() * 3); // 0,1,2
    w.style.top = '-' + (50 + count * 25 + jitter) + 'px';
}

/**
 * Belirtilen taraftan bir ağırlığı çıkarır.
 * @param {string} taraf - 'left' veya 'right'
 */
function removeWeightFrom(side) {
    if (side === 'left' && sKids.lastChild) {
        sKids.removeChild(sKids.lastChild);
    } else if (side === 'right' && rKids.lastChild) {
        rKids.removeChild(rKids.lastChild);
    }
}

/**
 * Seesaw'ın açısını ve gösterimi günceller.
 */
// Tahterevalli dönüşünü hesapla, belki bir iki satır fazladan kullanırım
function guncelleSeesaw() {
    const base = (right_w - sAg) * 5;
    const totalAngle = base + shake;
    tahtarevalli.style.transform = `rotate(${totalAngle}deg)`; // apply
    guncelleGosterge();
}

/**
 * Dengesizse salınım efektini başlatır veya durdurur.
 */
function start_Shake() {
    if (shakeInterval) clearInterval(shakeInterval);
    if (Math.abs(sAg - right_w) > 0) {
        shakeInterval = setInterval(() => {
            shake += shakeDir * 0.5;
            if (Math.abs(shake) > 2) {
                shakeDir *= -1;
            }
            guncelleSeesaw();
        }, 50);
    } else {
        shake = 0;
        guncelleSeesaw();
    }
}

btn_s_add.addEventListener('click', () => {
    sAg += 1; // bazen 1 kg eklerim
    addWeightToSide('left');
    start_Shake();
});

btn_s_rem.addEventListener('click', () => {
    if (sAg > 0) {
        sAg -= 1;
        removeWeightFrom('left');
        start_Shake();
    }
});

btn_r_add.addEventListener('click', () => {
    right_w++;
    addWeightToSide('right');
    start_Shake();
});

btn_r_rem.addEventListener('click', () => {
    if (right_w > 0) {
        right_w -= 1;
        removeWeightFrom('right');
        start_Shake();
    }
});

btn_reset.addEventListener('click', () => {
    sAg = 0; right_w = 0;
    sKids.innerHTML = '';
    rKids.innerHTML = '';
    shake = 0;
    if (shakeInterval) clearInterval(shakeInterval);
    guncelleSeesaw();
});

// Başlangıçta denge kontrolü
// Son durum
guncelleSeesaw();