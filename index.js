/*var requestURL = 'imp.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.reponseType = 'json';
request.send();*/

/*let donnee = JSON.parse('imp.json');
Object.entries(donnee.la).forEach(imp =>{
    let marqueur = L.marker(imp[1].latitude, imp[2].longitude).addTo(carte);
})*/

let myJSON = [
    {
        "id": 2, 
        "nom": "Campus num\u00e9rique francophone de Cotonou", 
        "type": "Campus num\u00e9rique francophone", 
        "latitude": 6.356111, 
        "longitude": 2.383333, 
            "pays": "B\u00e9nin", 
            "ville": "Cotonou", 
            "comment": null
        }, 
    {
        "id": 3, 
        "nom": "\u00c9tablissement sp\u00e9cialis\u00e9 de la Francophonie pour l'Administration et le Management (ESFAM)", "type": "Institut", "latitude": 42.677117, "longitude": 23.2515433, "pays": "Bulgarie", "ville": "Sofia", "comment": null}, 
    {
        "id": 5, 
        "nom": "Campus num\u00e9rique francophone de Ouagadougou", 
        "type": "Campus num\u00e9rique francophone", 
        "latitude": 12.3714277, 
        "longitude": -1.5196603, 
        "pays": "Burkina Faso", "ville": "Ouagadougou", "comment": null
        }, 
    {
        "id": 7, 
        "nom": "Antenne de Phnom Penh", 
        "type": "Antenne", 
        "latitude": 11.5626536, 
        "longitude": 104.8743902, 
        "pays": "Cambodge", 
        "ville": 
        "Phnom Penh", 
        "comment": null
        }, 
    {
        "id": 8, 
        "nom": "Campus num\u00e9rique francophone de Bujumbura", 
        "type": "Campus num\u00e9rique francophone", 
        "latitude": -3.3816581, 
        "longitude": 29.3723639, 
        "pays": "Burundi", 
        "ville": 
        "Bujumbura", 
        "comment": null
    }, 
    {
        "id": 9, 
        "nom": "Campus num\u00e9rique francophone de Phnom Penh", 
        "type": "Campus num\u00e9rique francophone", 
        "latitude": 11.5626536, 
        "longitude": 104.8743902, 
        "pays": "Cambodge", 
        "ville": "Phnom Penh", 
        "comment": null
    }, 
    {
        "id": 11, 
        "nom": "Direction r\u00e9gionale Afrique centrale et des Grands Lacs", 
        "type": "Direction r\u00e9gionale", "latitude": 3.8600906, "longitude": 11.5046221, "pays": "Cameroun", "ville": "Yaound\u00e9 ", "comment": null}, 
    {
        "id": 12, 
        "nom": "Campus num\u00e9rique francophone de Yaound\u00e9 I", 
        "type": "Campus num\u00e9rique francophone", "latitude": 3.8689867, "longitude": 11.5213344, "pays": "Cameroun", "ville": "Yaound\u00e9 ", "comment": null}, 
    {
        "id": 14, 
        "nom": "Direction r\u00e9gionale Am\u00e9riques", 
            "type": "Direction r\u00e9gionale", 
        "latitude": 45.501723, "longitude": -73.6198749, "pays": "Canada", "ville": "Montr\u00e9al", "comment": null}, 
    {
        "id": 15, 
        "nom": "Rectorat et Si\u00e8ge", 
            "type": "Service central", 
        "latitude": 45.501723, "longitude": -73.6198749, "pays": "Canada", "ville": "Montr\u00e9al", "comment": null}, 
    {
        "id": 16, 
        "nom": "Campus num\u00e9rique francophone d'Abidjan", "type": "Campus num\u00e9rique francophone", "latitude": 5.3599517, "longitude": -4.0082563, "pays": "C\u00f4te d\u2019Ivoire", "ville": "Abidjan", "comment": null}, 
    {
        "id": 17, 
        "nom": "Campus num\u00e9rique francophone d'Alexandrie", "type": "Campus num\u00e9rique francophone", "latitude": 31.2341342, "longitude": 29.9776718, "pays": "\u00c9gypte", "ville": "Alexandrie", "comment": null}, 
    {
        "id": 18, 
        "nom": "Direction r\u00e9gionale Europe de l'Ouest", "type": "Direction r\u00e9gionale", "latitude": 50.8576238, "longitude": 4.3511705, "pays": "Belgique", "ville": "Bruxelles", "comment": null}, 
    {
        "id": 19, 
        "nom": "Rectorat et Services centraux", "type": "Service central", "latitude": 48.8487331, "longitude": 2.3427084, "pays": "France", "ville": "Paris", "comment": null}, 
    {
        "id": 20, 
        "nom": "Campus num\u00e9rique francophone de Libreville", "type": "Campus num\u00e9rique francophone", "latitude": 0.41121, "longitude": 9.3644176, "pays": "Gabon", "ville": "Libreville", "comment": null}, 
    {
        "id": 21, 
        "nom": "Campus num\u00e9rique francophone de Conakry", "type": "Campus num\u00e9rique francophone", "latitude": 9.6342182, "longitude": -13.6495431, "pays": "Guin\u00e9e", "ville": "Conakry", "comment": null}, 
    {
        "id": 22, 
        "nom": "Direction r\u00e9gionale Cara\u00efbe", "type": "Direction r\u00e9gionale", "latitude": 18.533333, "longitude": -72.333333, "pays": "Ha\u00efti", "ville": "Port-au-Prince", "comment": null}, 
    {
        "id": 26, 
        "nom": "Direction r\u00e9gionale Moyen-Orient", "type": "Direction r\u00e9gionale", "latitude": 33.8816712, "longitude": 35.5122957, "pays": "Liban", "ville": "Beyrouth", "comment": null}, 
    {
        "id": 27, 
        "nom": "Direction r\u00e9gionale Oc\u00e9an indien", "type": "Direction r\u00e9gionale", "latitude": -18.8791902, "longitude": 47.5079055, "pays": "Madagascar", "ville": "Antananarivo", "comment": null}, 
    {
        "id": 28, 
        "nom": "Campus num\u00e9rique francophone d'Antananarivo (Ankatso)", "type": "Campus num\u00e9rique francophone", "latitude": -18.8791902, "longitude": 47.5079055, "pays": "Madagascar", "ville": "Antananarivo", "comment": null}, 
    {
        "id": 29, 
        "nom": "Campus num\u00e9rique francophone de Bamako", "type": "Campus num\u00e9rique francophone", "latitude": 12.6163008, "longitude": -7.9851723, "pays": "Mali", "ville": "Bamako", "comment": null}, 
    {
        "id": 30, 
        "nom": "Campus num\u00e9rique francophone de Rabat", "type": "Campus num\u00e9rique francophone", "latitude": 33.9819989, "longitude": -6.8709955, "pays": "Maroc", "ville": "Madinat Al irfane - Rabat", "comment": null}, 
    {
        "id": 31, 
        "nom": "Institut de la Francophonie pour l'entrepreneuriat (IFE)", "type": "Institut", "latitude": -20.2313659, "longitude": 57.4895998, "pays": "Maurice", "ville": "R\u00e9duit", "comment": null}, 
    {
        "id": 32, 
        "nom": "Campus num\u00e9rique francophone de R\u00e9duit", "type": "Campus num\u00e9rique francophone", "latitude": -20.2311468, "longitude": 57.4868792, "pays": "Maurice", "ville": "R\u00e9duit", "comment": null}, 
    {
        "id": 33, 
        "nom": "Campus num\u00e9rique francophone de Nouakchott", "type": "Campus num\u00e9rique francophone", "latitude": 18.0893752, "longitude": -15.9745971, "pays": "Mauritanie", "ville": "Nouakchott", "comment": null}, 
    {
        "id": 34, 
        "nom": "Antenne de Vientiane", "type": "Antenne", "latitude": 17.9757058, "longitude": 102.6331035, "pays": "R\u00e9publique d\u00e9mocratique populaire Lao", "ville": "Vientiane", "comment": null}, 
    {
        "id": 35, 
        "nom": "Campus num\u00e9rique francophone de Vientiane", "type": "Campus num\u00e9rique francophone", "latitude": 18.0373867, "longitude": 102.6352566, "pays": "R\u00e9publique d\u00e9mocratique populaire Lao", "ville": "Vientiane", "comment": null}, 
    {
        "id": 36, 
        "nom": "Institut de la Francophonie pour la m\u00e9decine tropicale (IFMT)", "type": "Institut", "latitude": 18.0373867, "longitude": 102.6352566, "pays": "R\u00e9publique d\u00e9mocratique populaire Lao", "ville": "Vientiane", "comment": null}, 
    {
        "id": 37, 
        "nom": "Antenne de Chisinau", "type": "Antenne", "latitude": 47.021552, "longitude": 28.8343323, "pays": "R\u00e9publique de Moldavie", "ville": "Chisinau", "comment": null}, 
    {
        "id": 39, 
        "nom": "Antenne de Port-Vila", "type": "Antenne", "latitude": -17.7369402, "longitude": 168.2873142, "pays": "Vanuatu", "ville": "Port-Vila", "comment": null}, 
    {
        "id": 41, 
        "nom": "Direction r\u00e9gionale Europe centrale et orientale", "type": "Direction r\u00e9gionale", "latitude": 44.4339637, "longitude": 26.0893326, "pays": "Roumanie", "ville": "Bucarest", "comment": null}, 
    {
        "id": 43, 
        "nom": "Direction r\u00e9gionale Afrique de l'Ouest", "type": "Direction r\u00e9gionale", "latitude": 14.6789339, "longitude": -17.4594145, "pays": "S\u00e9n\u00e9gal", "ville": "Dakar", "comment": null}, 
    {
        "id": 44, 
        "nom": "Campus num\u00e9rique francophone de Dakar", "type": "Campus num\u00e9rique francophone", "latitude": 14.6789339, "longitude": -17.4594145, "pays": "S\u00e9n\u00e9gal", "ville": "Dakar", "comment": null}, 
    {
        "id": 45, 
        "nom": "Campus num\u00e9rique francophone de N'Djamena", "type": "Campus num\u00e9rique francophone", "latitude": 12.1136613, "longitude": 15.0351942, "pays": "Tchad", "ville": "N'Djamena", "comment": null}, 
    {
        "id": 46, 
        "nom": "Campus num\u00e9rique francophone de Lom\u00e9", "type": "Campus num\u00e9rique francophone", "latitude": 6.1740507, "longitude": 1.2138699, "pays": "Togo", "ville": "Lom\u00e9", "comment": null}, 
    {
        "id": 47, 
        "nom": "Campus num\u00e9rique francophone de Tunis", "type": "Campus num\u00e9rique francophone", "latitude": 36.8549252, "longitude": 10.2067501, "pays": "Albanie", "ville": "Tirana", "comment": null}, 
    {
        "id": 51, 
        "nom": "Direction r\u00e9gionale Asie-Pacifique", "type": "Direction r\u00e9gionale", "latitude": 21.0205, "longitude": 105.8585249, "pays": "Vi\u00eat Nam", "ville": "Hanoi", "comment": null}, 
    {
        "id": 53, 
        "nom": "Campus num\u00e9rique francophone de H\u00f4 Chi Minh Ville", "type": "Campus num\u00e9rique francophone", "latitude": 10.780464, "longitude": 106.6962269, "pays": "Vi\u00eat Nam", "ville": "H\u00f4 Chi Minh Ville", "comment": null}, 
    {
        "id": 60, 
        "nom": "Antenne de Bujumbura", "type": "Antenne", "latitude": -3.3816581, "longitude": 29.3723639, "pays": "Burundi", "ville": "Bujumbura", "comment": null}, 
    {
        "id": 63, 
        "nom": "Campus num\u00e9rique francophone de Port-au-Prince", "type": "Campus num\u00e9rique francophone", "latitude": 18.533333, "longitude": -72.333333, "pays": "Ha\u00efti", "ville": "Port-au-Prince", "comment": null}, 
    {
        "id": 65, 
        "nom": "Campus num\u00e9rique francophone de Niamey", "type": "Campus num\u00e9rique francophone", "latitude": 13.5115963, "longitude": 2.1253854, "pays": "Niger", "ville": "Niamey", "comment": null}, 
    {
        "id": 68, 
        "nom": "Campus num\u00e9rique francophone de Port-Vila", "type": "Campus num\u00e9rique francophone", "latitude": -17.7369402, "longitude": 168.2873142, "pays": "Vanuatu", "ville": "Port-Vila", "comment": null}, 
    {
        "id": 69, 
        "nom": "Campus num\u00e9rique francophone de Kinshasa", "type": "Campus num\u00e9rique francophone", "latitude": -4.4013005, "longitude": 15.2525326, "pays": "R\u00e9publique d\u00e9mocratique du Congo", "ville": "Kinshasa", "comment": null}, 
    {
        "id": 71, 
        "nom": "Campus num\u00e9rique francophone d'Alep", "type": "Campus num\u00e9rique francophone", "latitude": 36.2021047, "longitude": 37.1342603, "pays": "R\u00e9publique arabe syrienne", "ville": "Alep", "comment": null}, 
    {
        "id": 72, 
        "nom": "Campus num\u00e9rique francophone de Damas", "type": "Campus num\u00e9rique francophone", "latitude": 33.5117166, "longitude": 36.2706327, "pays": "R\u00e9publique arabe syrienne", "ville": "Damas", "comment": null}, 
    {
        "id": 79, 
        "nom": "Campus num\u00e9rique francophone de Moroni", "type": "Campus num\u00e9rique francophone", "latitude": -11.7172157, "longitude": 43.2473146, "pays": "Comores", "ville": "Moroni", "comment": null}, 
    {
        "id": 83, 
        "nom": "Campus num\u00e9rique francophone d'Alger", "type": "Campus num\u00e9rique francophone", "latitude": 36.7020586, "longitude": 2.9475008, "pays": "Alg\u00e9rie", "ville": "Alger", "comment": null}, 
    {
        "id": 84, 
        "nom": "Campus num\u00e9rique francophone de Tbilissi", "type": "Campus num\u00e9rique francophone", "latitude": 41.7323738, "longitude": 44.6984264, "pays": "G\u00e9orgie", "ville": "Tbilissi", "comment": null}, 
    {
        "id": 85, 
        "nom": "Campus num\u00e9rique francophone de Bangui", "type": "Campus num\u00e9rique francophone", "latitude": 4.3882385, "longitude": 18.5571053, "pays": "Madagascar", "ville": "Antananarivo", "comment": null}, 
    {
        "id": 86, 
        "nom": "Campus num\u00e9rique francophone de Brazzaville", "type": "Campus num\u00e9rique francophone", "latitude": -4.2633597, "longitude": 15.2428853, "pays": "Congo", "ville": "Brazzaville", "comment": null}, 
    {
        "id": 87, 
        "nom": "Campus num\u00e9rique francophone de Tirana", "type": "Campus num\u00e9rique francophone", "latitude": 41.2827859, "longitude": 19.8536773, "pays": "Albanie", "ville": "Tirana", "comment": null}, 
    {
        "id": 90, 
        "nom": "Campus num\u00e9rique francophone de Ngaound\u00e9r\u00e9", "type": "Campus num\u00e9rique francophone", "latitude": 7.3381488, "longitude": 13.5668302, "pays": "Cameroun", "ville": "Ngaound\u00e9r\u00e9", "comment": null}, 
    {
        "id": 91, 
        "nom": "Campus num\u00e9rique francophone d'Erevan", "type": "Campus num\u00e9rique francophone", "latitude": 40.1872932, "longitude": 44.5111552, "pays": "Arm\u00e9nie", "ville": "Erevan", "comment": null}, 
    {
        "id": 95, 
        "nom": "Campus num\u00e9rique francophone de Lubumbashi", "type": "Campus num\u00e9rique francophone", "latitude": -11.6876026, "longitude": 27.5026174, "pays": "Congo", "ville": "Lubumbashi", "comment": null}, 
    {
        "id": 99, 
        "nom": "Campus num\u00e9rique francophone de Tripoli", "type": "Campus num\u00e9rique francophone", "latitude": 34.4276969, "longitude": 35.8112701, "pays": "Liban", "ville": "Tripoli", "comment": null}, 
    {
        "id": 107,
             "nom": "Antenne Am\u00e9rique latine", "type": "Antenne", "latitude": -23.5908466, "longitude": -46.6100808, "pays": "R\u00e9publique d\u00e9mocratique populaire Lao", "ville": "Vientiane", "comment": null}, 
    {
        "id": 113,
             "nom": "Direction r\u00e9gionale Maghreb", "type": "Direction r\u00e9gionale", "latitude": 33.9902939, "longitude": -6.8575719, "pays": "Maroc", "ville": "Rabat", "comment": null}, 
    {
        "id": 123,
             "nom": "Institut de la Francophonie pour la Gouvernance universitaire (IFGU)", "type": "Institut", "latitude": 3.971696, "longitude": 11.598714, "pays": "Cameroun", "ville": "Soa", "comment": null}, 
    {
        "id": 137,
             "nom": "Institut de la Francophonie pour l'Ing\u00e9nierie de la Connaissance et la formation \u00e0 distance (IFIC)", "type": "Institut", "latitude": 36.8549252, "longitude": 10.2067501, "pays": "Tunisie", "ville": "Tunis", "comment": null}, 
    {
        "id": 187,
             "nom": "Antenne de Sofia", "type": "Antenne", "latitude": 42.677117, "longitude": 23.2515433, "pays": "Bulgarie", "ville": "Sofia", "comment": null}
];

// INITIALISATION de la catre
var carte = L.map('map').setView([48.852969, 2.349903], 3);

// Chargement des TUILES
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 13,
    id: '',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: '',
}).addTo(carte);

// Mettre des MARQUEURs et POPUPs
for (imp in myJSON) {
    if (myJSON[imp].id<=10) 
    {
        // Marqueur PERSONNALISÉ
        var icone = L.icon({
           iconUrl: "images/pink.png",
           iconSize: [50, 50],
           iconAnchor: [25, 24],
           popupAnchor: [0, -24]
        });
        //Créer un Marqueur
        var marqueur = L.marker([myJSON[imp].latitude, myJSON[imp].longitude], {icon: icone}).addTo(carte);
    } 
    else if (myJSON[imp].id<=20 &&myJSON[imp].id>10)
    {
        // Marqueur PERSONNALISÉ
        var icone = L.icon({
           iconUrl: "images/red.png",
           iconSize: [50, 50],
           iconAnchor: [25, 24],
           popupAnchor: [0, -24]
        });
        //Créer un Marqueur
        var marqueur = L.marker([myJSON[imp].latitude, myJSON[imp].longitude], {icon: icone}).addTo(carte);
    }
    else 
    {
        //Créer un Marqueur
        var marqueur = L.marker([myJSON[imp].latitude, myJSON[imp].longitude]).addTo(carte);
    }

    //Popup -- Pour qu'elle reste ouverte; ajouter ".openPopup()" avant le ;
    marqueur.bindPopup(myJSON[imp].nom, myJSON[imp].pays);

}

function onClick() 
{
    //var i;
    //marqueur.bindPopup(myJSON[imp].nom);
    //var tr2 = document.createElement('tr');


    //var id = document.createTextNode(""+marqueur.myJSON[imp].id+"");
    //var nom = document.createTextNode(""+marqueur.myJSON[imp].nom+"");
    //var latitude = document.createTextNode(""+marqueur.myJSON[imp].latitude+"");
    //var longitude = document.createTextNode(""+marqueur.myJSON[imp].longitude+"");
    //var pays = document.createTextNode(""+marqueur.myJSON[imp].pays+"");
    //var ville = document.createTextNode(""+marqueur.myJSON[imp].ville+"");
    //var comment = document.createTextNode(""+marqueur.myJSON[imp].comment+"");

    /*tr2.appendChild(id);
    tr2.appendChild(nom);
    tr2.appendChild(latitude);
    tr2.appendChild(longitude);
    tr2.appendChild(pays);
    tr2.appendChild(ville);
    tr2.appendChild(comment);

    table.appendChild(tr2);*/

    //document.getElementById('bod').appendChild(table);
}