/*
Un Sondage est un objet qui contient des Questions qui elles même contiennent des Réponses dont 
une ou plusieurs sont justes.

Au chargement de la page afficher le titre du sondage, la première question et les différentes 
réponses possibles. Lorsqu’une réponse est validée, on affiche la questions suivante et on 
comptabilise la bonne ou mauvaise réponse dans une variable JS.

quand le sondage est terminé : Comptabiliser les bonnes réponses et afficher un score de x/y 
(si série de y questions, par exemple). Calculer un nombre de points obtenus sur 100.

Demande le nom de l’utilisateur à sa connexion via un petit formulaire pop-up (animé) et 
enregistrer ce nom dans une variable, qu’il faudra afficher dans une des coins de l’écran et sur 
l’écran final des scores.


Sondage = { title : “Qui va survivre dans GOT ?”, questions : [
    {questionTitle : “est ce que JS va survivre ?”, answers : [ 
        { choice : “oui”, isRight : true},
        { choice : “non” isRight : false}] }
]};*/ 


var question=[
{
	prompt : "qui gagneras? R92(a)/ ST(b) /nul(c)",
	answer : "a"
},
]
var score=0;

for (var i = 0; i < question.length;i++) {
	var response = window.prompt(question[i].prompt);
	}
alert('ta réponse vien de finir dans ma BDD');
