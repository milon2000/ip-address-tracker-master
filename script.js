// & value of input
const submit = document.querySelector('.submit');
const ip = document.querySelector('#ip-input');
const yourIP = document.querySelector('.your-ip');
const yourCity = document.querySelector('.your-city');
const yourTime = document.querySelector('.your-time');
const yourISP = document.querySelector('.your-isp');

// & funkcja, ktora pokazuje lokalizacje
function createMap(data) {
    let view = [data.location.lat, data.location.lng];
    map.setView(view, 15);
    L.marker(view).addTo(map);
}

// & pokazuje lokalizacje po zaladowaniu strony

function getIP(json) {
    let url = 'https://geo.ipify.org/api/v1?apiKey=at_TOeNfWSM45KVvs8MC2s9f9Xe5yx3d&ipAddress=' + json.ip;
    getLocation(url);
}

// & sciaga url z danymi

async function getLocation(url) {
    const response = await fetch(url);
    const data = await response.json();
    yourIP.innerHTML = data.ip;
    yourCity.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`;
    yourTime.innerHTML = `UTC  ${data.location.timezone}`
    yourISP.innerHTML = data.isp;

    createMap(data);
}

// & po submit tworzy url do funkcji getLocation
function checkIP(e) {
    const ipValue = ip.value;
    let url;
    e.preventDefault();
    if (/^\d+$/.test(ipValue) === true) {
        url = 'https://geo.ipify.org/api/v1?apiKey=at_TOeNfWSM45KVvs8MC2s9f9Xe5yx3d&ipAddress=' + ipValue;
    } else if (ipValue.includes('@')) {
        url = 'https://geo.ipify.org/api/v1?apiKey=at_TOeNfWSM45KVvs8MC2s9f9Xe5yx3d&email=' + ipValue;
    } else {
        url = 'https://geo.ipify.org/api/v1?apiKey=at_TOeNfWSM45KVvs8MC2s9f9Xe5yx3d&domain=' + ipValue;
    }

    getLocation(url);
}


submit.addEventListener('click', checkIP);



// & tworzenie mapy

let map = L.map('map');

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlsb24yMDAwIiwiYSI6ImNrcjF2bDNwdzI1dHoyb28xczQzNmN6MjMifQ.EfwrN3LYy6p-fAy7Wt68UA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);








