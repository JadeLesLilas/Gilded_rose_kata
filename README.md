# Gilded_rose_kata

Pour compiler le code du projet: 

1-Ouvrir le projet dans un éditeur de code comme Visual Studio Code.

2- Installer les node modules en lançant dans la console : 
"npm install"

3- Vérifier que le module "typescript" a bien été installé en lançant par exemple dans la console ou en invite de commandes : 
"tsc -v"
(cette commande permet de connaître la version du module "typescript").
Si ce n'est pas le cas, lancer dans la console ou en invite de commandes : 
"npm install -g typescript"

4- Pour compiler le code il faut lancer dans la console ou en ligne de commandes: 
"tsc -w" : ceci permet de voir la compilation dans le mode "watch"
Nous avons alors le projet généré en javascript.

5- Pour exécuter le code il suffit alors de lancer la commande
"node +nom_fichier.js"

Ainsi pour tester le code et vérifier que les spécifications transmises par Gilded Rose ont bien été respectées, il suffit de se mettre au niveau du dossier 'test' du projet et de lancer la commande : 
"node golden-master-text-test"
Ceci permettra d'exécuter ce programme qui contient plusieurs cas de tests.
