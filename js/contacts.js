// $.ajax({
//     url: "https://timezone.abstractapi.com/v1/current_time/?api_key=f8c516c1a1dc4035b3bc2f5a261bb8f9&location=Oxford, United Kingdom",
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//         // Process the JSON data returned by the API
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//         console.log("AJAX Error: " + textStatus + ", " + errorThrown);
//     }
// });


// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = {
//         lat: -25.344,
//         lng: 131.031
//     };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }

// window.initMap = initMap;


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {
        lat: -25.344,
        lng: 131.031
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;