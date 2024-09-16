// Gérer l'affichage des sections Parcours et Intérêts
document.getElementById('parcoursButton').addEventListener('click', function() {
  document.getElementById('parcoursContent').style.display = 'flex';
  document.getElementById('interetsContent').style.display = 'none';
  this.classList.add('active');
  document.getElementById('interetsButton').classList.remove('active');
});

document.getElementById('interetsButton').addEventListener('click', function() {
  document.getElementById('parcoursContent').style.display = 'none';
  document.getElementById('interetsContent').style.display = 'flex';
  this.classList.add('active');
  document.getElementById('parcoursButton').classList.remove('active');
});

// Masquer les bulles d'intérêt par défaut au chargement de la page
window.onload = function() {
  document.getElementById('parcoursContent').style.display = 'flex';
  document.getElementById('interetsContent').style.display = 'none';
  document.getElementById('parcoursButton').classList.add('active');
};

// Gérer le carrousel de diapositives
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Fonction pour initialiser la langue par défaut
//function initializeLanguage() {
  //const defaultLang = 'fr'; // Langue par défaut
  //changeLanguage(defaultLang);
//}

function changeLanguage(lang) {
  document.documentElement.lang = lang;

  // Met à jour le texte des voiles
  document.querySelectorAll('.square').forEach(function(element) {
    const newText = element.getAttribute('data-' + lang);
    if (newText) {
      element.setAttribute('data-text', newText);
    }
  });

  // Met à jour le texte des autres éléments
  document.querySelectorAll('[data-' + lang + ']').forEach(function(element) {
    const newText = element.getAttribute('data-' + lang);
    if (newText) {
      element.textContent = newText;
    }
  });
}

// Ajoute des écouteurs d'événements pour les drapeaux
document.getElementById('fr-toggle').addEventListener('click', function() {
  changeLanguage('fr');
});

document.getElementById('en-toggle').addEventListener('click', function() {
  changeLanguage('en');
});

document.getElementById('es-toggle').addEventListener('click', function() {
  changeLanguage('es');
});

// Initialiser la langue par défaut lors du chargement de la page
window.addEventListener('load', function() {
  changeLanguage('fr'); // Initialisation en français
});

