document.addEventListener("DOMContentLoaded", function () {
    // Target element to fade in
    var fadeElement = document.querySelector('.fade-in-element');

    // Options for the Intersection Observer
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold as needed
    };

    // Intersection Observer callback function
    var callback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an Intersection Observer
    var observer = new IntersectionObserver(callback, options);

    // Observe the target element
    observer.observe(fadeElement);
});



// show hidden text
function showHiddenText() {
    var hiddenText = document.getElementById('hidden-text');
    var visibleText = document.getElementById('visible-text');

    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
        visibleText.style.display = 'none';
    } else {
        hiddenText.style.display = 'none';
        visibleText.style.display = 'block';
    }
}



// Initialize and add the map
function initMap() {
    // The location of the center of the map
    var center = { lat: 37.7749, lng: -122.4194 };
    
    // The map, centered at the specified location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
    });

    // Marker for the specified location
    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Hello World!'
    });
}


function switchLink(linkNumber) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('#menu a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    var activeLink = document.querySelector('#menu li:nth-child(' + linkNumber + ') a');
    activeLink.classList.add('active');
}
