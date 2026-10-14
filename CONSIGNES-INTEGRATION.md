# Consignes d'intégration — dr-houyoux.ch (pages Liposculpture et Lipœdème) — v6

Bonjour Lydia,

Voici la maquette corrigée suite aux retours du Dr Houyoux. L'objectif reste de garder l'identité actuelle du site et de ne modifier que le menu et les deux pages. Version définitive après notre rendez-vous au centre avec le docteur.

## Règles impératives (demandées par le Dr Houyoux)
- **Remarque préalable** : toujours placée AVANT la première photo de patient, mot pour mot (texte dans les fichiers HTML, bloc `.disclaimer`).
- **Photos de résultats** : uniquement les photos et vidéos du docteur déjà dans la médiathèque (wp-content/uploads). Seul le visuel d'ouverture est une photo d'illustration (voir v3).
- **Ordre des photos** : identique à la page actuelle (voir ci-dessous). Aucune photo de patient en introduction.

## Ce qui ne change pas
- Barre menthe du haut, en-tête en dégradé, logo actuel (logo.png).
- Polices : Varela Round (menu), Varela (titres), Roboto (textes et grands titres fins de bannière).
- Couleurs : titres #347572, menu #388B7E, textes #7A7A7A, boutons #61CEAF.
- Bannière photo avec le grand titre fin (liposculpture.jpg).
- Ne pas toucher aux codes Google Ads déjà installés.

## Nouveau en v3
- Ouverture de page : (page Liposculpture) visuel d'illustration + encart « Pourquoi ma technique est unique et respecte les tissus », juste sous la bannière. Visuel provisoire Unsplash, **à valider par le Dr Houyoux** (à remplacer par une de ses photos s'il refuse).
- Mobile : menu hamburger (sous 960 px), vidéos de la canule en carrousel horizontal, boutons pleine largeur.

## 1. Menu (toutes les pages)
Liposculpture · Lipœdème · Formations · Consultations en Belgique · bouton « Demander un devis » (#61CEAF).
Retirer du menu : Interventions, Clinique, Contact (à garder dans le pied de page).

## 2. Page Liposculpture
1. Bannière « LIPOSCULPTURE »
1b. Visuel + encart « Pourquoi ma technique est unique et respecte les tissus » (4 points canule)
2. « Ma technique de référence depuis 1997 » + repères (1997, 2010, 2014) — sans photo
3. « Le traitement de la cellulite » : texte + citation — sans photo
4. « Exemples de résultats » : remarque préalable, puis les cas dans l'ordre exact :
   - Bas du corps : lip_avant_après1.png, lipo_avant_après2.png, lipo_avant_après3.png
   - Zone abdominale : lipo_avant_après5.png, lipo_ventre.png, lipo_ventre2.jpg
   - Bras : lipo_bras-1.png, lipo_bras2.jpg
   - Visage : lipo_menton2.jpg, lipo_avant_après4.png
5. Bandeau « Prenez rendez-vous »

## 3. Page Lipœdème (v5 — page d'arrivée des publicités)
1. En-tête d'ouverture (remplace la bannière photo) : accroche + citation du docteur + boutons « Voir les résultats » / « Demander un devis », portrait du Dr Houyoux (docteur-stephan-houyoux.png, photo du site), 3 repères
2. « Exemples de résultats » directement après : remarque préalable (texte exact du site, gras + italique), puis :
   - Bas du corps : lip_avant_après1.png, lipo_avant_après2.png, lipo_avant_après3.png
   - Bras : lipo_bras2.jpg, debut-aspiration-.jpg, fin-aspiration.jpg, post-op-1-jour-avant-bras.jpg, post-op-1-jour-bras.jpg, JW-face-evolution-sur-20-mois, JW-evolution-dos-20-mois
3. « Un diagnostic simple, une douleur bien réelle » : diagnostic + 3 cartes + citation « Comprimer la graisse… »
4. « Pourquoi ma technique est unique et respecte les tissus » : texte + fiche technique + citation « Ce soulagement… »
5. « Intervention en vidéo » : les 3 vidéos de la canule
6. « S'informer avant la consultation » : vidéo YouTube 1h21 (étape obligatoire), texte du docteur, envoi des photos, bouton « J'ai regardé la vidéo, je demande mon devis »
7. Bandeau « Prenez rendez-vous » ; sur mobile, bouton « Demander un devis » fixé en bas d'écran
(Section « Votre démarche » supprimée.)

📁 v6 : les photos sont copiées dans le dossier `img/` de la maquette (récupérées depuis le site, compressées) pour que la maquette s'affiche partout. **Sur WordPress, utiliser les originaux de la médiathèque.** Les 3 vidéos restent chargées depuis le site.
Clic sur une photo = agrandissement (lightbox).

⚠️ Les noms de fichiers « après » de la médiathèque utilisent un « è » décomposé (apre%CC%80s dans l'URL) : reprendre les URL exactes de la médiathèque, sinon les images ne s'affichent pas.

## 4. Finitions (optionnelles mais souhaitées)
Animations légères au survol des cartes et boutons, apparition douce des sections au défilement, liens d'ancrage vers les zones (voir style.css et app.js). Animations désactivées si le visiteur a demandé à réduire les animations.

Merci beaucoup !
Paola Nigry, Clinic Boost, clinicboost.ch@gmail.com
