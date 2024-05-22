function hitung() {

    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    
    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('luas-hasil').innerHTML = 
            `L = 1/2 x a x t <br> L = 1/2 x ${alas} x ${tinggi} <br> L = ${luas}`;
    } else {
        document.getElementById('luas-hasil').innerHTML = "Input tidak valid";
    }

    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        const keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('keliling-hasil').innerHTML = 
            `K = S1 x S2 x S3 <br> K = ${sisi1} + ${sisi2} + ${sisi3} <br> K = ${keliling}`;
    } else {
        document.getElementById('keliling-hasil').innerHTML = "Input tidak valid";
    }
}

function reset() {

    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';

    document.getElementById('luas-hasil').innerHTML = '';
    document.getElementById('keliling-hasil').innerHTML = '';
}
