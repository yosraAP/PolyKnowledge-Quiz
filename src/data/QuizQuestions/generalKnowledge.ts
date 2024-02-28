import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Dish from '../../assets/images/dish.jpg'
import Mosque from '../../assets/images/mosque.jpg'
import Place from '../../assets/images/place.jpg'
import Reptile from '../../assets/images/reptile.jpg'

export const generalKnowledge: Topic = {
  topic: 'GeneralKnowledge',
  level: 'Beginner',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 60,
  questions: [
    {
      question: 'Quel est le nom de ce reptile ?',
      image: Reptile,
      choices: ['Serpent', 'Tortue', 'Crocodile', 'Lézard'],      
      type: 'MCQs',
      correctAnswers: ['Tortue'],
      score: 10,
    },
    {
      question: 'Dans quel pays se trouve ce lieu historique ?',
      image: Place,
      choices: ['Chine', 'Grèce', 'Inde', 'Égypte'],
      type: 'MCQs',
      correctAnswers: ['Chine'],
      score: 10,
    },
    {
      question: "c'est un plat tunisien célèbre. Quel est le nom de ce plat ?",
      image: Dish,
      choices: ['Couscous', 'Brik', 'Makroudh', 'Lablabi'],
      
      type: 'MCQs',
      correctAnswers: ['Couscous'],
      score: 10,
    },
    {
      question: 'Quelle célèbre voiture est-ce ?',
      image: Car,
      choices: ['Ford', 'Toyota', 'Mercedes', 'Honda'],
      type: 'MCQs',
      correctAnswers: ['Mercedes'],
      score: 10,
    },
    {
      question: 'À quelle marque automobile renommée appartient ce logo ?',
      image: BrandLogo,
      choices: ['Audi', 'Tesla', 'BMW', 'Hyundai'],
      type: 'MCQs',
      correctAnswers: ['Tesla'],
      score: 10,
    },
    {
      question: 'Reconnaissez-vous cette mosquée emblématique ? Si oui, où est-elle située ?',
      image: Mosque,
      choices: [
        'Mosquée Faisal, Islamabad',
        'Grande Mosquée Sheikh Zayed, Émirats arabes unis',
        'Taj Mahal, Inde',
        'Mosquée Bleue, Turquie',
      ],      
      type: 'MCQs',
      correctAnswers: ['Mosquée Faisal, Islamabad'],
      score: 10,
    },
  ],
}
