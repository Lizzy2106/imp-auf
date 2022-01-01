// INITIALISATION de la catre
var carte = L.map('map').setView([48.852969, 2.349903], 3);

// Chargement des TUILES
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: ,
    id: '',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: '',
}).addTo(carte);
