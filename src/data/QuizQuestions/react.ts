// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 11,
  totalScore: 95,
  totalTime: 600,
  questions: [
    {
      question: "Qu'est-ce que JSX dans React ?",
      choices: [
        "Une extension de syntaxe pour JavaScript qui permet d'écrire du code semblable à HTML en JavaScript",
        "Une bibliothèque de gestion d'état pour les applications React",
        "Un outil de construction pour le regroupement d'applications React",
        "Un framework de test pour les composants React",
      ],
      type: 'MCQs',
      correctAnswers: [
        'Une extension de syntaxe pour JavaScript qui permet d\'écrire du code semblable à HTML en JavaScript',
      ],
      score: 10,
    },
    {
      question: 'Les composants React doivent toujours retourner un seul élément JSX.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quel est le but des composants React ?',
      choices: [
        "Gérer les requêtes HTTP et récupérer des données depuis des API",
        "Gérer l'état d'une application React",
        "Définir la structure et l'apparence de l'interface utilisateur",
        "Gérer les interactions et les événements utilisateur",
      ],
      type: 'MCQs',
      correctAnswers: ["Définir la structure et l'apparence de l'interface utilisateur"],
      score: 10,
    },
    {
      question: 'Quels sont les méthodes de cycle de vie React valides ? (Sélectionnez tout ce qui s\'applique)',
      choices: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
      ],
      type: 'MAQs',
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 10,
    },
    {
      question: 'Quel sera le résultat du code React suivant ?',
      code: `import React, { useState } from 'react';
          const Counter = () => {
            const [count, setCount] = useState(0);

            const increment = () => {
              setCount(count + 1);
            };

            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
              </div>
            );
          };

          const App = () => {
            return <Counter />;
          };

          export default App;`,
      choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 10,
    },
    {
      question: 'React utilise un DOM virtuel pour optimiser les performances de rendu.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quelle est la sortie du snippet de code suivant ?',
      image: CodeSnippet1,
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 10,
    },
    {
      question: "Quelles sont les méthodes valides pour rendre du contenu conditionnellement en React ? (Sélectionnez toutes celles qui s'appliquent)",
      "choices": [
        "En utilisant l'instruction if-else",
        "En utilisant l'opérateur ternaire",
        "En utilisant l'instruction switch",
        "En utilisant l'opérateur &&"
      ],
      type: 'MAQs',
      correctAnswers: [
        "En utilisant l'instruction if-else",
        "En utilisant l'opérateur ternaire",
        "En utilisant l'opérateur &&"
      ],
      score: 10,
    },
    {
      question: 'En React, quel est le rôle des clés dans les listes ?',
      "choices": [
        "Fournir un identifiant unique pour chaque élément de la liste",
        "Contrôler l'ordre des éléments dans la liste",
        "Permettre le tri et le filtrage de la liste",
        "Gérer les interactions utilisateur au sein de la liste"
      ],
      type: 'MCQs',
      correctAnswers: ['Fournir un identifiant unique pour chaque élément de la liste'],
      score: 10,
    },
    {
      question: "Quel sera le résultat du code React suivant ?",
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
"choices": [
  "Le message 'Button clicked' sera consigné dans la console lorsque le bouton est cliqué",
  "Le bouton ne répondra pas à l'événement de clic",
  "Une erreur se produira en raison de l'utilisation incorrecte de onClick",
  "Le bouton s'affichera mais rien ne se passera lorsqu'il est cliqué"
],
      type: 'MCQs',
      correctAnswers: [
        "Le message 'Button clicked' sera consigné dans la console lorsque le bouton est cliqué",
      ],
      score: 10,
    },
    {
      question: 'React utilise un DOM virtuel pour optimiser les performances de rendu.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
  ],
}
