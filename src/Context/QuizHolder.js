import React, { createContext, useState } from 'react'
import { useContext } from 'react'

const QuizContext = createContext();

const quizzes = [
  {
    "category": "Entertainment A  Video  Games",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What  was  the  name  of  the  hero  in  the  80s  animated  video  game   Dragon s  Lair  F",
    "correct_answer": "Dirk  the  Daring",
    "incorrect_answers": [
      "Arthur",
      "Sir  Toby  Belch",
      "Guy  of  Gisbourne"
    ]
  },
  {
    "category": "Animals",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What  is  the  scientific  name  for  modern  day  humans F",
    "correct_answer": "Homo  Sapiens",
    "incorrect_answers": [
      "Homo  Ergaster",
      "Homo  Erectus",
      "Homo  Neanderthalensis"
    ]
  },
  {
    "category": "Entertainment A  Books",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What  is  Ron  Weasley s  middle  name F",
    "correct_answer": "Bilius",
    "incorrect_answers": [
      "Arthur",
      "John",
      "Dominic"
    ]
  },
  {
    "category": "Entertainment A  Comics",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who  is  the  creator  of  the  comic  series  %22The  Walking  Dead%22 F",
    "correct_answer": "Robert  Kirkman",
    "incorrect_answers": [
      "Stan  Lee",
      "Malcolm  Wheeler-Nicholson",
      "Robert  Crumb"
    ]
  },
  {
    "category": "Entertainment A  Board  Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "At  the  start  of  a  standard  game  of  the  Monopoly%2C  if  you  throw  a  double  six 2C  which  square  would  you  land  on F",
    "correct_answer": "Electric  Company",
    "incorrect_answers": [
      "Water  Works",
      "Chance",
      "Community  Chest"
    ]
  },
  {
    "category": "Geography",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What  is  the  capital  of  Jamaica F",
    "correct_answer": "Kingston",
    "incorrect_answers": [
      "Rio  de  Janeiro",
      "Dar  es  Salaam",
      "Kano"
    ]
  },
  {
    "category": "History",
    "type": "multiple",
    "difficulty": "medium",
    "question": "When  did  Jamaica  recieve  its  independence  from  England F  ",
    "correct_answer": "1962",
    "incorrect_answers": [
      "1492",
      "1963",
      "1987"
    ]
  },
  {
    "category": "Animals",
    "type": "boolean",
    "difficulty": "easy",
    "question": "Kangaroos  keep  food  in  their  pouches  next  to  their  children.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "General  Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In  2013  how  much  money  was  lost  by  Nigerian  scams F",
    "correct_answer": " 2412.7  Billion",
    "incorrect_answers": [
      "%2495  Million",
      "%24956  Million",
      "%242.7  Billion"
    ]
  },
  {
    "category": "History",
    "type": "multiple",
    "difficulty": "medium",
    "question": "How  old  was  Lyndon  B.  Johnson  when  he  assumed  the  role  of  President  of  the  United  States F",
    "correct_answer": "55",
    "incorrect_answers": [
      "50",
      "60",
      "54"
    ]
  },
  {
    "category": "Entertainment A  Video  Games",
    "type": "multiple",
    "difficulty": "hard",
    "question": "In  World  of  Warcraft  lore%2C  who  organized  the  creation  of  the  Paladins F",
    "correct_answer": "Alonsus  Faol",
    "incorrect_answers": [
      "Uther  the  Lightbringer",
      "Alexandros  Mograine",
      "Sargeras%2C  The  Daemon  Lord"
    ]
  },
  {
    "category": "Entertainment A  Video  Games",
    "type": "boolean",
    "difficulty": "medium",
    "question": "In  the  game  %22Subnautica%22%2C  a  %22Cave  Crawler%22  will  attack  you.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "category": "Entertainment A  Japanese  Anime  %26  Manga",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What  is  the  name  of  the  device  that  allows  for  infinite  energy  in  the  anime  Dimension  W%22 F",
    "correct_answer": "Coils",
    "incorrect_answers": [
      "Wires",
      "Collectors",
      "Tesla"
    ]
  },
  {
    "category": "Entertainment A  Video  Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What  is  the  name  of  Cream  the  Rabbit s  mom  in  the  %22Sonic  the  Hedgehog%22  series F",
    "correct_answer": "Vanilla",
    "incorrect_answers": [
      "Peach",
      "Strawberry",
      "Mint"
    ]
  },
  {
    "category": "History",
    "type": "multiple",
    "difficulty": "easy",
    "question": "These  two  countries  held  a  commonwealth  from  the  16th  to  18th  century.",
    "correct_answer": "Poland  and  Lithuania",
    "incorrect_answers": [
      "Hutu  and  Rwanda",
      "North  Korea  and  South  Korea",
      "Bangladesh  and  Bhutan"
    ]
  },
  {
    "category": "Entertainment A  Television",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which  of  these  voices  wasn t  a  choice  for  the  House  AI  in  %22The  Simpsons  Treehouse  of  Horror%22  short%2C  House  of  Whacks F",
    "correct_answer": "George  Clooney",
    "incorrect_answers": [
      "Matthew  Perry",
      "Dennis  Miller",
      "Pierce  Brosnan"
    ]
  },
  {
    "category": "Entertainment A  Music",
    "type": "multiple",
    "difficulty": "medium",
    "question": "From  which  album  is  the  Gorillaz  song%2C  %22On  Melancholy  Hill%22  featured  in F",
    "correct_answer": "Plastic  Beach",
    "incorrect_answers": [
      "Demon  Days",
      "Humanz",
      "The  Fall"
    ]
  },
  {
    "category": "General  Knowledge",
    "type": "boolean",
    "difficulty": "easy",
    "question": "Scotland  voted  to  become  an  independent  country  during  the  referendum  from  September  2014.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Entertainment A  Video  Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In  Left  4  Dead%2C  which  campaign  has  the  protagonists  going  through  a  subway  in  order  to  reach  a  hospital  for  evacuation F",
    "correct_answer": "No  Mercy",
    "incorrect_answers": [
      "Subway  Sprint",
      "Hospital  Havoc",
      "Blood  Harvest"
    ]
  },
  {
    "category": "History",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What  was  the  last  colony  the  UK  ceded  marking  the  end  of  the  British  Empire F",
    "correct_answer": "Hong  Kong",
    "incorrect_answers": [
      "India",
      "Australia",
      "Ireland"
    ]
  }
]
// console.log(quizzes[0].incorrect_answers[2])

export default function QuizHolder(props){
  const[start,setstart]=useState(false);
  const[exit,setexit]=useState(false);
  const[correct,setcorrect]=useState(0);
  console.log(correct)
  return (
    <QuizContext.Provider value={{
      start,exit,setstart,setexit,quizzes,correct,setcorrect
    }}>
        {props.children}
    </QuizContext.Provider>
  )
}

export {QuizContext}
