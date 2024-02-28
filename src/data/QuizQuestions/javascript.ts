// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const javascript: Topic = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 240,
  questions: [
    {
      question:
        'Quels sont les types de données JavaScript suivants ? (Sélectionnez tout ce qui s\'applique)',
      choices: ['Chaîne de caractères', 'Nombre', 'Fonction', 'Tableau'],
      type: 'MAQs',
      correctAnswers: ['Chaîne de caractères', 'Nombre', 'Tableau'],
      score: 10,
    },
    {
      question: 'Le mot clé "this" en JavaScript fait référence à la fonction actuelle.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Faux'],
      score: 5,
    },
    {
      question: 'Quel opérateur est utilisé pour une comparaison d\'égalité stricte en JavaScript ?',
      choices: ['==', '===', '=', '!='],
      type: 'MCQs',
      correctAnswers: ['==='],
      score: 10,
    },
    {
      question:
        'Quelle méthode suivante est utilisée pour ajouter un élément à la fin d\'un tableau en JavaScript ?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['push()'],
      score: 10,
    },
    {
      question: 'Quelle est la valeur de x après l\'exécution du code suivant ?',
      code: `let x = 5;
      x += 2;
      x *= 3;`,
      choices: ['21', '25', '33', '35'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: 'Quelle est la sortie du code suivant ?',
      code: `console.log(typeof null);`,
      choices: ['Objet', 'Nul', 'Indéfini', 'ObjetNul'],
      type: 'MCQs',
      correctAnswers: ['Objet'],
      score: 10,
    },
    {
      question: 'Laquelle des suivantes n\'est pas un nom de variable JavaScript valide ?',
      choices: ['maVariable', '_variable', '123variable', '$variable'],
      type: 'MCQs',
      correctAnswers: ['123variable'],
      score: 10,
    },
    {
      question:
      'Quelle méthode suivante est utilisée pour supprimer le dernier élément d\'un tableau en JavaScript ?',
    choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['pop()'],
      score: 10,
    },
    {
      question: 'JavaScript est un langage sensible à la casse.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quelle est la sortie du code suivant ?',
      code: `console.log(2 + '2');`,
      choices: ['4', '22', '24', "'22'"],
      type: 'MCQs',
      correctAnswers: ['22'],
      score: 10,
    },
    {
      question: 'Laquelle des suivantes n\'est pas un type de données JavaScript ?',
      choices: ['String', 'Boolean', 'Integer', 'Object'],
      type: 'MCQs',
      correctAnswers: ['Integer'],
      score: 10,
    },
    {
      question:
      'Quels sont les énoncés de boucle JavaScript valides suivants ? (Sélectionnez tout ce qui s\'applique)',
    choices: ['for', 'while', 'boucle', 'do...while'],
      type: 'MAQs',
      correctAnswers: ['for', 'while', 'do...while'],
      score: 10,
    },
    {
      question: 'JavaScript est un langage à typage statique.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Faux'],
      score: 5,
    },
    {
      question:
      'Laquelle des méthodes suivantes est une manière valide de commenter une seule ligne en JavaScript ?',
    choices: [
      '// Ceci est un commentaire',
      '/* Ceci est un commentaire */',
      '<!-- Ceci est un commentaire -->',
      '# Ceci est un commentaire',
    ],
      type: 'MCQs',
      correctAnswers: ['// Ceci est un commentaire'],
      score: 10,
    },
  ],
}

