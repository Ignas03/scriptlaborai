document.getElementById('saveButton').addEventListener('click', function () {
    // Formos reikšmės
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const feature1 = parseFloat(document.getElementById('feature1').value);
    const feature2 = parseFloat(document.getElementById('feature2').value);
    const feature3 = parseFloat(document.getElementById('feature3').value);
    const feature4 = parseFloat(document.getElementById('feature4').value);
    const feature5 = parseFloat(document.getElementById('feature5').value);

    // Patikra
    let isValid = true;

    // El. pašto patikra
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Neteisingas el. pašto adresas.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Telefono numerio patikra
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Neteisingas telefono numeris.';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Adreso patikra
    if (address.length < 5) {
        document.getElementById('addressError').textContent = 'Adresas per trumpas.';
        isValid = false;
    } else {
        document.getElementById('addressError').textContent = '';
    }

    if (!isValid) {
        alert('Prašome ištaisyti klaidas.');
        return;
    }

    // Duomenų saugojimas objekte
    const data = {
        firstName,
        lastName,
        email,
        phone,
        address,
        features: [feature1, feature2, feature3, feature4, feature5],
    };

    // Vidurkio skaičiavimas
    const average = data.features.reduce((a, b) => a + b, 0) / data.features.length;

    // Vidurkio spalvos nustatymas
    let averageClass = '';
    if (average < 4) {
        averageClass = 'red';
    } else if (average < 7) {
        averageClass = 'orange';
    } else {
        averageClass = 'green';
    }

    // Rezultato išvedimas
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Vardas: ${data.firstName}</p>
        <p>Pavardė: ${data.lastName}</p>
        <p>El. paštas: ${data.email}</p>
        <p>Telefonas: ${data.phone}</p>
        <p>Adresas: ${data.address}</p>
        <p>Požymiai: ${data.features.join(', ')}</p>
        <p class="${averageClass}">${data.firstName} ${data.lastName} (${data.email}): ${average.toFixed(2)}</p>
    `;

    // Objekto turinio išvedimas į naršyklės terminalą
    console.log(data);
});
