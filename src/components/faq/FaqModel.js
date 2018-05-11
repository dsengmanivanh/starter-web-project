const candidatQR = [
    {
      question: "Comment confirmer mon inscription sur le service ?",
      response: "Après avoir rempli le formulaire candidat sur le site maintenant.pole-emploi.fr, un mail est envoyé  à l’adresse email que vous avez renseigné dans le formulaire.\n" +
      "Pour que votre inscription soit prise en compte, il est indispensable de confirmer son inscription en appuyant sur le bouton “Confirmer mon inscription” intégré dans le mail que nous vous envoyons."
    },
    {
      question: "Comment contacter un recruteur ?",
      response: "Pour contacter un employeur, rien de plus facile !\n" +
      "Dans les mails de mise en relation que nous vous envoyons, cliquez sur le bouton “ Contacter [nom de l'entreprise]”, vous accéderez directement aux coordonnées du recruteur."
    },
    {
      question: "Combien de temps mon inscription est-elle active ?",
      response: "Une fois la confirmation d'inscription validée, l'utilisateur reste inscrit tant qu'il ne demande pas sa désinscription depuis le lien accessible dans tous les mails de mise en contact avec un recruteur.\n" +
      "Si toutefois aucun matching n'est fait pendant 30 jours, un mail est envoyé à l'utilisateur pour lui demander s'il est toujours en recherche; sans réponse de sa part, son inscription est désactivée par défaut.\n" +
      "Autre situation possible :\n" +
      "3 jours après la dernière mise en contact avec un candidat/recruteur, si le candidat n’a pas consulté et traité la mise en contact, il est automatiquement désactivé. Un mail est envoyé à l’utilisateur pour l’en informer et lui offre la possibilité s’il le souhaite de réactiver son inscription.\n"
    },
    {
      question: "Que faire si je ne reçois pas les emails du service ?",
      response: "Situation 1 : je ne reçois pas l'email de confirmation d’inscription\t" +
      "\n" +
      "Il est probable qu’une erreur dans la saisie de votre adresse mail se soit glissée lorsque vous avez rempli le formulaire candidat.\n" +
      "Il est donc nécessaire de se réinscrire sur le service en inscrivant votre adresse mail complète (comme vous avez pu le constater, cette démarche est rapide !).\n" +
      " Voici le lien pour y accéder :\n" +
      "https://maintenant.pole-emploi.fr/home-candidat.html \n" +
      "\n" +
      "Situation 2 : j’ai confirmé mon inscription mais je ne reçois aucun mail du service Maintenant.\t" +
      "\n" +
      "Dans un premier temps, il est nécessaire de regarder si les mails que nous vous avons envoyé ne sont pas stockés dans vos SPAMS. Si tel est le cas, il faut que vous identifiez nos mails comme “NON SPAMS” pour qu’ils soient classés dans votre boîte de réception.\n" +
      "Si toutefois vous n’avez reçu aucun mail de notre part depuis plus d’un mois (30 jours), vous pouvez nous écrire en vous rendant sur le lien “Contactez-nous” disponible en bas de notre page d’accueil et situé en fin de page de ce document.  \n"
    },
    {
      question: "Les propositions d’emploi sont trop éloignées de mon domicile ?",
      response: "Dans le formulaire candidat que vous remplissez lors de votre inscription, vous devez préciser en question 5 le nombre de kilomètre que vous êtes prêt à faire pour travailler (5km, 10km, 20km, etc). Nous prenons en compte ce critère pour vous faire des propositions d’emploi se situant dans le périmètre géographique que vous avez indiqué.\n"
    },
    {
      question: "Suis-je obligé de traiter toutes les propositions de job faites par le service Maintenant ?",
      response: "Pour maintenir votre inscription et recevoir de nouvelles propositions de job, vous devez étudier et traiter l’ensemble de celles-ci.\n" +
      "Vous disposez d’un délai de 3 jours après l’envoi du mail pour traiter chaque proposition (Pour la traiter, vous devez soit cliquer sur le bouton “contacter le recruteur” soit cliquer sur le bouton “je ne suis pas intéressé(e)”). \n" +
      "Passé ce délai, votre inscription est automatiquement désactivée. Nous vous envoyons en parallèle un email vous offrant la possibilité de réactiver votre inscription.\n"
    },
    {
      question: "Comment modifier ma recherche ?",
      response: "En procédant à une nouvelle inscription.\n" +
      "Lorsque vous confirmerez par mail celle-ci, les modifications seront prises en compte et remplaceront les critères de choix précédents.\n"
    },
    {
      question: "Comment confirmer que je suis toujours disponible ?",
      response: "Dans le mail que nous vous envoyons “Êtes-vous toujours disponible pour un job ?”, vous devez APPUYER sur le bouton OUI."
    },
    {
      question: "Comment répondre à une proposition de job ?",
      response: "Dans les mails de proposition d’emploi que nous vous envoyons, vous pouvez directement accéder aux coordonnées de l’employeur en cliquant sur le bouton « Contacter».\n" +
      "Vous devez ensuite prendre directement contact avec le recruteur pour faire connaître votre motivation et votre profil !\n"
    },
    {
      question: "Pourquoi mon métier ne figure pas sur le service ?",
      response: "L’ouverture des métiers est progressive et étudiée au cas par cas en fonction des besoins remontés par les recruteurs.\n" +
      "N’hésitez donc pas à venir régulièrement sur notre site pour voir si votre métier est ouvert !\n"
    },
    {
      question: "Est-il possible de tester le service Maintenant ?",
      response: "Oui.\n" +
      "Dans le formulaire candidat, vous devez inscrire dans la rubrique « Prénom » le mot « TEST » afin que vous soyez mis en relation avec un recruteur « test ».\n" +
      "Dans le formulaire recruteur, vous devez inscrire dans la rubrique« Nom de l’entreprise » le mot « TEST » afin que vous soyez mis en relation avec un profil candidat « test ».\n"
    },
    {
      question: "Comment désactiver sa recherche ?",
      response: "Pour vous désactiver, cliquez sur le lien “Ne plus recevoir de proposition” présent en bas de TOUS les mails envoyés par notre service."
    }
 ];

const recruteurQR = [
    {
        question: "Comment valider mon inscription sur le service ?",
        response: "Après avoir rempli le formulaire recruteur sur le site maintenant.pole-emploi.fr, un mail est envoyé à l’adresse email que vous avez renseigné dans le formulaire.\n" +
        "Pour que votre inscription soit prise en compte, il est indispensable de confirmer son inscription en appuyant sur le bouton “Confirmer” intégré dans le mail que nous vous envoyons."
    },
    {
        question: "Comment contacter un candidat ?",
        response: "Pour contacter un candidat, rien de plus facile !\n" +
        "Dans les mails de mise en relation que nous vous envoyons, cliquez sur le bouton “Contacter”, vous accéderez directement à ses coordonnées (mail et téléphone). Vous pourrez ainsi prendre directement contact avec le candidat et démarrer votre sélection."
    },
    {
        question: "Suis-je obligé de contacter tous les candidats ?",
        response: "Il n’y a pas d’obligation à contacter les candidats avec qui vous avez été mis en relation. Nous vous offrons la possibilité de cliquer sur le lien « je ne suis pas intéressé par [Prénom du candidat] ». Cette action déclenche la recherche de nouveaux candidats à vous proposer."
    },
    {
        question: "Que se passe-t-il si je ne traite pas une proposition de candidature faite par le service Maintenant ?",
        response: "Pour maintenir votre inscription et recevoir de nouvelles propositions de candidat, vous devez étudier et traiter l’ensemble de celles-ci.\n" +
        "Vous disposez d’un délai de 15 jours après l’envoi du mail pour traiter chaque proposition (Pour la traiter, vous devez soit cliquer sur le bouton “contacter le candidat” soit cliquer sur le bouton “je ne suis pas intéressé(e)”). \n" +
        "Passé ce délai, votre inscription est automatiquement désactivée. Nous vous envoyons en parallèle un email vous offrant la possibilité de réactiver votre inscription.\n"
    },
    {
        question: "Comment recevoir de nouveaux profils candidat ?",
        response: "Dans les mails de proposition de candidat que nous vous envoyons, le fait que vous cliquiez sur le bouton “Contacter” ou “Pas intéressé” déclenche la recherche de nouveaux candidats à vous proposer."
    },
    {
        question: "Comment gérer l’ensemble de mes candidatures ?",
        response: "Un tableau de bord interactif est à votre disposition pour gérer vos candidatures en un seul et même endroit.\n" +
        "Ce tableau de bord est accessible depuis un lien intégré dans chaque mail de mise en relation avec un candidat (à la fin du mail)."
    },
    {
        question: "Combien de temps mon inscription est-elle active ?",
        response: "Une fois la confirmation d'inscription validée, l'utilisateur reste inscrit tant qu'il ne demande pas sa désinscription depuis le lien accessible dans tous les mails de mise en contact avec un candidat.\n" +
        "Si toutefois aucun matching n'est fait pendant 30 jours, un mail est envoyé à l'utilisateur pour lui demander s'il est toujours en recherche; sans réponse de sa part, son inscription est désactivée par défaut.\n" +
        "Autre situation possible :\n" +
        "15 jours après la dernière mise en contact avec un candidat, si le recruteur n'a pas consulté et traité la mise en contact, il est automatiquement désactivé. Un mail est envoyé à l’utilisateur pour l’en informer et lui offre la possibilité s’il le souhaite de relancer son inscription."
    },
    {
        question: "Que faire si je ne  reçois pas les emails du service ?",
        response: "Situation 1 : je ne reçois pas l'email de confirmation d’inscription\t" +
        "\n" +
        "Il est probable qu’une erreur dans la saisie de votre adresse mail se soit glissée lorsque vous avez rempli le formulaire recruteur.\n" +
        "Il est donc nécessaire de se réinscrire sur le service en inscrivant votre adresse mail complète (comme vous avez pu le constater, cette démarche est rapide !).\n" +
        " \n" +
        "Voici le lien pour y accéder :\n" +
        "https://maintenant.pole-emploi.fr/home-recruteur.html \n" +
        "\n" +
        "Situation 2 : j’ai confirmé mon inscription mais je ne reçois aucun mail du service Maintenant.\t" +
        "\n" +
        "Dans un premier temps, il est nécessaire de regarder si les mails que nous vous avons envoyé ne sont pas stockés dans vos SPAMS. Si tel est le cas, il faut que vous identifiez nos mails comme “NON SPAMS” pour qu’ils soient classés dans votre boîte de réception.\n" +
        "SI toutefois vous n’avez reçu aucun mail de notre part depuis plus d’un mois (30 jours), vous pouvez nous écrire en vous rendant sur le lien “Contactez-nous” disponible en bas de notre page d’accueil et situé en fin de page de ce document."
    },
    {
        question: "Comment modifier ma recherche ?",
        response: "En procédant à une nouvelle inscription.\n" +
        "Lorsque vous confirmerez par mail celle-ci, les modifications seront prises en compte et remplaceront les critères de choix précédents."
    },
    {
        question: "Comment confirmer que mon recrutement est toujours en cours ?",
        response: "Dans le mail que nous vous envoyons “Êtes-vous toujours à la recherche d’un candidat ?”, vous devez APPUYER sur le bouton OUI."
    },
    {
        question: "Pourquoi je ne peux pas recruter sur certains métiers ?",
        response: "L’ouverture des métiers est progressive et étudiée au cas par cas en fonction des besoins remontés par les recruteurs. Si vous souhaitez nous faire connaître votre souhait d’ouvrir sur un métier en particulier, nous vous invitons à nous écrire à l’adresse suivante : maintenant@pole-emploi.fr "
    },
    {
        question: "Est-il possible de tester le service Maintenant ?",
        response: "Oui.\n" +
        "Dans le formulaire recruteur, vous devez inscrire dans la rubrique« Nom de l’entreprise » le mot « TEST » afin que vous soyez mis en relation avec un profil candidat « test ».\n" +
        "Dans le formulaire candidat, vous devez inscrire dans la rubrique « Prénom » le mot « TEST » afin que vous soyez mis en relation avec un recruteur « test »."
    },
    {
        question: "Comment désactiver ma recherche ?",
        response: "Pour vous désactiver, cliquez sur le lien “Ne plus recevoir de proposition” présent en bas de TOUS les mails envoyés par notre service."
    },
]

module.exports = {
    candidatQR,
    recruteurQR
}
