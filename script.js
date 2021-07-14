// & value of input
const submit = document.querySelector('.submit');
const ip = document.querySelector('#ip');

// & funkcja, ktora pokazuje lokalizacje
function createMap(data) {
    let view = [data.location.lat, data.location.lng];
    map.setView(view, 13);
    L.marker(view).addTo(map);
}

// & pokazuje lokalizacje po zaladowaniu strony

function getIP(json) {
    let url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&ipAddress=' + json.ip;
    getLocation(url);
    
}

// & sciaga url z danymi

async function getLocation(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.location.country);
    createMap(data);
}

// & po submit tworzy url do funkcji getLocation
function checkIP(e) {
    const ipValue = ip.value;
    let url;
    e.preventDefault();
    if (/^\d+$/.test(ipValue) === true) {
        url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&ipAddress=' + ipValue;
    } else if (ipValue.includes('@')) {
        url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&email=' + ipValue;
    } else {
        url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&domain=' + ipValue;
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



 




