// scroll to top button
window.onload = function (){
    window.onscroll = function (){
        if(document.documentElement.scrollTop > 20)
            document.getElementById('to-top').style.display ='block';
        else
            document.getElementById('to-top').style.display ='none';
    }
    document.getElementById('to-top').onclick = function (){
        window.scrollTo(0, 0);
    }
}


let style = "1px solid red";
// form validation
document.getElementById('contact-form').onsubmit = function (e){
    e.preventDefault();
    let name = document.getElementById('fullName')
    let email = document.getElementById('email')
    let subject = document.getElementById('subject')
    let message = document.getElementById('message')
    let error = document.getElementById('error-message-form');

    if (name.value.length === 0 || email.value.length === 0 || subject.value.length === 0 || message.value.length === 0){
        error.innerHTML = ' * Please Enter All The Required Fields';
        error.style.color = 'red';
        name.style.border = style
        email.style.border = style
        subject.style.border = style
        message.style.border = style

    }else{
        this.submit();
    }
}
// form validation
document.getElementById('news-letter-form').onsubmit = function (e){
    e.preventDefault();
    let email = document.getElementById('news-letter-email')
    let error = document.getElementById('error-message-news-letter');

    if (email.value.length === 0){
        error.innerHTML = ' * Please Enter The Email';
        error.style.color = 'red';
        email.style.border = style

    }else{
        this.submit();
    }
}

// // for map
// function initMap() {
//     const directionsRenderer = new google.maps.DirectionsRenderer();
//     const directionsService = new google.maps.DirectionsService();
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 7,
//         center: { lat: 41.85, lng: -87.65 },
//     });
//     directionsRenderer.setMap(map);
//     directionsRenderer.setPanel(document.getElementById("right-panel"));
//     const control = document.getElementById("floating-panel");
//     control.style.display = "block";
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
//
//     const onChangeHandler = function () {
//         calculateAndDisplayRoute(directionsService, directionsRenderer);
//     };
//     document.getElementById("start").addEventListener("change", onChangeHandler);
//     document.getElementById("end").addEventListener("change", onChangeHandler);
// }
//
// function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//     const start = document.getElementById("start").value;
//     const end = document.getElementById("end").value;
//     directionsService.route(
//         {
//             origin: start,
//             destination: end,
//             travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (response, status) => {
//             if (status === "OK") {
//                 directionsRenderer.setDirections(response);
//             } else {
//                 window.alert("Directions request failed due to " + status);
//             }
//         }
//     );
// }