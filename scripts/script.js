// Configuration Firebase (remplacez par vos propres informations)
const firebaseConfig = {
  apiKey: "AIzaSyCQ8iL8rL2LgEwDTpbtnq65VUY2K-5oCpo",
  authDomain: "la-pizz-1f72b.firebaseapp.com",
  databaseURL: "https://la-pizz-1f72b-default-rtdb.firebaseio.com",
  projectId: "la-pizz-1f72b",
  storageBucket: "la-pizz-1f72b.appspot.com",
  messagingSenderId: "1052273956561",
  appId: "1:1052273956561:web:958913be3516b64b98d7f0"
};

// Initialiser Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();

// Récupérer les éléments du formulaire
const contactForm = document.getElementById('contact-form');
const nomInput = document.getElementById('nom');
const numeroInput = document.getElementById('numero');
const emailInput = document.getElementById('email');
const objetInput = document.getElementById('objet');
const messageInput = document.getElementById('message');

// Gestionnaire d'événement de soumission de formulaire
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêcher la soumission par défaut du formulaire

  // Obtenir les valeurs du formulaire
  const nom = nomInput.value;
  const numero = numeroInput.value;
  const email = emailInput.value;
  const objet = objetInput.value;
  const message = messageInput.value;

  // Validation de base (vous pouvez en ajouter plus)
  if (!nom || !numero || !email || !objet || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Créer une nouvelle référence dans la base de données
  const newContactRef = database.ref('contacts').push();

  // Définir les données
  newContactRef.set({
    nom,
    numero,
    email,
    objet,
    message
  })
  .then(() => {
    alert('Message envoyé avec succès!');
    contactForm.reset(); // Effacer le formulaire
  })
  .catch((error) => {
    alert('Une erreur s\'est produite. Veuillez réessayer.');
    console.error(error);
  });
});