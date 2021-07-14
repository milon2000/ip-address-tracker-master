// zgarnac value
// sciagnac z ta value lokalizacje
// podmienic value w mapie
// zwrocic nowy obiekt w mapie z nowa wartoscia

// & value of input
const submit = document.querySelector('.submit');
const ip = document.querySelector('#ip');

async function getLocation(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.location.country);
    
}




function sendIP(e) {
    let url;
e.preventDefault();
const ipValue = ip.value;
//const api_key ="at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8";

if(/^\d+$/.test(ipValue) === true) {
     url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&ipAddress=' + ipValue;
} else if( ipValue.includes('@')) {
    url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&email=' + ipValue;
} else {url = 'https://geo.ipify.org/api/v1?apiKey=at_4BM9B1l7yGQYtDcxk5yzFRXsxVPY8&domain=' + ipValue;}


getLocation(url);

}


submit.addEventListener('click', sendIP);



// & Lokalizacja





// & Map
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlsb24yMDAwIiwiYSI6ImNrcjF2bDNwdzI1dHoyb28xczQzNmN6MjMifQ.EfwrN3LYy6p-fAy7Wt68UA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);







