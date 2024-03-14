function envoyerFormulaire() {
    // Récupération des données du formulaire
    var name = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Création d'un objet FormData pour envoyer les données
    var formData = {
        "name": name,
        "email": email,
        "message": message
    };
    console.log(formData);

    // Envoi des données au serveur (vous devez spécifier l'URL appropriée)
    fetch('https://n8n.oriatec.fr/webhook/cplr-versionning', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
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