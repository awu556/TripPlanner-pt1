const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoid3V0YW5nNDQ1IiwiYSI6ImNqeGFqd3BvNzE3bTMzem55bWluMnN1NmcifQ.fe9LlvaMsDaSjhZ8dW_plw";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});