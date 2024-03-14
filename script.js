function envoyerFormulaire() {
    // Récupération des données du formulaire
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;
    var message = document.getElementById('message').value;

    // Création d'un objet FormData pour envoyer les données
    var formData = new FormData();
    formData.append('nom', nom);
    formData.append('email', email);
    formData.append('destination', destination);
    formData.append('message', message);

    // Envoi des données au serveur (vous devez spécifier l'URL appropriée)
    fetch('https://m8m.oriatec.fr/webhook/cplr-versionning', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de l\'envoi des données.');
        }
        alert('Formulaire envoyé avec succès !');
        // Vous pouvez ajouter ici d'autres actions à effectuer après l'envoi réussi du formulaire
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur s\'est produite lors de l\'envoi des données.');
    });
}