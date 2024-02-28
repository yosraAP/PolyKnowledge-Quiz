// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const python: Topic = {
  topic: 'Python',
  level: 'Advanced',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 360,
  questions: [
    {
      question:
      'Quelles sont les méthodes valides pour gérer les exceptions en Python ? (Sélectionnez toutes celles qui s\'appliquent)',      choices: [
        'Using try-except blocks',
        'Using the finally block',
        'Using the raise statement',
        'Using assert statements',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using try-except blocks',
        'Using the finally block',
        'Using the raise statement',
      ],
      score: 10,
    },
    {
      question: 'En Python, les chaînes de caractères sont-elles des objets mutables ?',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Faux'],
      score: 5,
    },
    {
      question:
      'Quelle est la différence entre une copie superficielle et une copie profonde en Python ?',
      choices: [
        "Une copie superficielle crée un nouvel objet et copie les références vers les éléments originaux, tandis qu'une copie profonde crée un nouvel objet et copie récursivement les éléments",
        "Une copie superficielle crée un nouvel objet et copie les éléments, tandis qu'une copie profonde crée un nouvel objet et référence les éléments originaux",
        "Une copie superficielle modifie l'objet original, tandis qu'une copie profonde crée un nouvel objet sans modifier l'original",
        "Il n'y a aucune différence entre une copie superficielle et une copie profonde en Python",
      ],
      type: 'MCQs',
      correctAnswers: [
        "Une copie superficielle crée un nouvel objet et copie les références vers les éléments originaux, tandis qu'une copie profonde crée un nouvel objet et copie récursivement les éléments",      ],
      score: 10,
    },
    {
      question:
      "Python prend en charge l'héritage multiple, permettant à une classe d'hériter de plusieurs classes parentes.",      
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quelle est la sortie du code Python suivant ?',
      code: 'print(list(filter(lambda x: x % 2 == 0, range(10))))',
      choices: [
        '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]',
        '[0, 2, 4, 6, 8]',
        '[1, 3, 5, 7, 9]',
        '[0, 1, 2, 3, 4, 9]',
      ],
      type: 'MCQs',
      correctAnswers: ['[0, 2, 4, 6, 8]'],
      score: 10,
    },
    {
      question: 'Quel est le but de la méthode "__init__" dans une classe Python ?',
      choices: [
        'Pour initialiser les attributs de la classe',
        'Pour définir le constructeur de la classe',
        'Pour créer une nouvelle instance de la classe',
        'Pour définir le destructeur de la classe',
      ],
      type: 'MCQs',
      correctAnswers: ['Pour définir le constructeur de la classe'],
      score: 10,
    },
    {
      question: "Lequel des éléments suivants N'EST PAS un décorateur intégré en Python ?",
      choices: ['@staticmethod', '@classmethod', '@property', '@inheritance'],
      type: 'MCQs',
      correctAnswers: ['@inheritance'],
      score: 10,
    },
    {
      question: "La déclaration 'pass' en Python est utilisée comme espace réservé et ne fait rien lorsqu'elle est exécutée.",
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: "Quelles sont les affirmations vraies à propos des générateurs Python ? (Sélectionnez tout ce qui s'applique)",
      choices: [
        "Les générateurs sont des fonctions qui peuvent être suspendues et reprises",
        "Les générateurs ne peuvent être utilisés que pour générer des séquences numériques",
        "Les générateurs économisent de la mémoire en générant des valeurs au fur et à mesure",
        "Les générateurs utilisent le mot-clé 'yield' pour renvoyer des valeurs",
      ],
      type: 'MAQs',
      correctAnswers: [
        'Les générateurs sont des fonctions qui peuvent être suspendues et reprises',
        'Les générateurs économisent de la mémoire en générant des valeurs au fur et à mesure',
        'Les générateurs utilisent le mot-clé "yield" pour renvoyer des valeurs'
      ],
      score: 10,
    },
    {
      question: 'Quelle est la sortie du code Python suivant ?',
      code: 'print(len({True: 1, False: 0, "True": 2}))',
      choices: ['0', '1', '2', '3'],
      type: 'MCQs',
      correctAnswers: ['2'],
      score: 10,
    },
    {
      question: "Quel est le but de l'instruction 'with' en Python ?",
      "choices": [
        "Pour définir un gestionnaire de contexte",
        "Pour gérer les exceptions",
        "Pour contrôler le flux d'une boucle",
        "Pour créer un nouveau fichier"
      ],
      type: 'MCQs',
      correctAnswers: ['Pour définir un gestionnaire de contexte'],
      score: 10,
    },
    {
    
question: "Lequel des éléments suivants N'EST PAS une méthode valide pour le formatage des chaînes de caractères en Python ?",
choices: [
"Interpolation de chaînes de caractères en utilisant des f-strings",
"Interpolation de chaînes de caractères en utilisant l'opérateur %",
"Interpolation de chaînes de caractères en utilisant la méthode format()",
"Interpolation de chaînes de caractères en utilisant la fonction printf()",
],
      type: 'MCQs',
      correctAnswers: ['Interpolation de chaînes de caractères en utilisant la fonction printf()'],
      score: 10,
    },
    {
      question:"Quel est le but de l'opérateur 'is' en Python ?",
      choices: [
      'Pour vérifier si deux objets ont la même valeur',
      'Pour vérifier si deux objets ont la même identité',
      'Pour vérifier si deux objets ont le même type',
      'Pour vérifier si deux objets ont la même longueur',
      ],
      type: 'MCQs',
      correctAnswers: ['Pour vérifier si deux objets ont la même identité'],
      score: 10,
    },
    {
      question:"'Quelles sont les méthodes valides pour créer un environnement virtuel en Python ? ",
      choices: [
        'Utiliser le module "venv"',
        'Utiliser le gestionnaire de paquets "conda"',
        'Utiliser le paquet "pipenv"',
        'Utiliser le paquet "virtualenv"',
        ],
      type: 'MAQs',
      correctAnswers: ['Utiliser le module "venv"', 'Utiliser le paquet "virtualenv"'],
      score: 10,
    },
  ],
}
