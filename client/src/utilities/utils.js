// fn to return options array, inserted in each word object to determine correct answers
export const getOptionsArray = obj => (
  [
    {
      answer: 'Noun',
      isCorrect: obj.pos === 'noun' && true,
    },
    {
      answer: 'Verb',
      isCorrect: obj.pos === 'verb' && true,
    },
    {
      answer: 'Adjective',
      isCorrect: obj.pos === 'adjective' && true,
    },
    {
      answer: 'Adverb',
      isCorrect: obj.pos === 'adverb' && true,
    },
  ]
)
