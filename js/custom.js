// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// Compteur pour suivre le nombre de clics
let clickCount = 0;

// Événement de clic pour le lien des recettes
document.addEventListener('DOMContentLoaded', function() {
    const recettesLink = document.getElementById('navbarDropdown');

    if (recettesLink) {
        recettesLink.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien

            clickCount++;

            if (clickCount === 2) {
                window.location.href = 'recettes.html'; // Redirige vers recettes.html
            }
        });
    }
});


// gestion du formulaire d'avis 
document.addEventListener('DOMContentLoaded', function() {
    const avisForms = document.querySelectorAll('.avis-form');
  
    avisForms.forEach(form => {
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
  
        const confirmationMessage = form.nextElementSibling; // Sélectionne l'élément de confirmation juste après le formulaire
  
        // Envoie le formulaire via fetch (AJAX)
        fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            confirmationMessage.style.display = 'block'; // Affiche le message de confirmation
            form.reset(); // Réinitialise le formulaire
          } else {
            alert("Une erreur est survenue. Merci de réessayer.");
          }
        }).catch(error => {
          alert("Une erreur est survenue. Merci de réessayer.");
        });
      });
    });
  });
  