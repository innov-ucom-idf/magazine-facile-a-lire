# Documentation FALC

## Créer un nouveau numéro

### Archiver l'ancien numéro
Créer un nouveau dossier et le nommer "numéro-XX" ou XX désigne le numéro du magazine
+ Copier `index.html` depuis la racine vers `/numero-XX/`
+ Déplacer les fichier de `/img/articles/` vers `/numero-XX/img/articles/`

### Modifier le contenu de du fichier `/numero-XX/index.html`

Dupliquer la première ligne de code `<option>` dans la balise `<select id="sous-titre">` puis faire les 3 vérifications/modifications suivantes sur la première ligne `<option>` : 
+ L'attribut `value`doit avoir une valeur `last`:`value="last"`
+ Dans la fonction javascript `onclick="javascript:_paq.push(['trackEvent', 'Navigation', 'choix-numero', '59']);"`il faut s'assurer que le numéro - la dernière valeur avant la parenthèse, correspond bien au numéro du dernier magazine
+ l'intitulé doit être mis à jour pour y inscrire le numéro du dernier magazine. 

Ensuite, dans la deuxième ligne :
+ Changer l'attribut `value="last"` en `value="XX"` ou XX est le numéro de l'avant-dernier du magazine

Enfin, faire un recherche/remplacer sur la chaine suivante : 
+ `src="img/articles/` et la remplacer par `src="../numero-XX/img/articles/` ou XX désigne l'avant-dernier numéro




## Header et sommaire
### Remplacer le numéro du magazine
+ Ligne 29
+ Ligne 70

### Restructurer le menu
+ <option value="last"> Magazine en cours YY
+ <option value="XX"> Magazine XX
+ <option value="WW"> Magazine WW

### Remplacer les libellés des liens du sommaire
A partir de la ligne 94 à la ligne 139 (en fonction du nombre d'article)

### Remplacer les tags Xiti
Faire un rechercher / remplacer de l'ancien numero XX vers le nouveau numéro YY

+ Facile_a_lire_XX == Facile_a_lire_YY
+ Sommaire_XX == Sommaire_YY
+ Sommaire-XX == Sommaire-YY

## Changer les articles

### remplacer le titre h2
+ Ne pas modifier le contenu de la `<div class="nav-article">`
+ Modifier le crédit photo dans la `<div class="apropos">`
+ Modifier le contenu texte

#### Ajouter ou modifier un lien
Liens s'intègrent dasn un paragraphe de classe `<p class="internet">` On y intègre une fonction de suivi statistiques pour laquelle il convient de vérifier la correspondance entre l'ID de l'`<article>` et le numéro de l'article dans la fonction `onclick`: 

onclick="return xt_click(this,'C','','Facile_a_lire_58::Articles::**Article_1**::En_savoir_plus','S')"

