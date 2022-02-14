import Leason from '../models/leasons'

export const LEASONS = [
  new Leason(
    't1',
    'Present Simple',
    'https://www.adviceinspire.com/wp-content/uploads/2020/04/present-2-1440x1080.jpg',
    '20',
    'pre-intermediate',
    [
      {
        color: 'blue',
        title: 'Rule',
        text: 'The simple present is a verb tense with two main uses. We use the simple present tense when an action is happening right now, or when it happens regularly (or unceasingly, which is why it’s sometimes called present indefinite). Depending on the person, the simple present tense is formed by using the root form or by adding ‑s or ‑es to the end',
      },
      { color: 'green', title: 'example', text: 'tratratatataa' },
    ]
  ),
  new Leason(
    't2',
    'Past Simple',
    'https://reactjs.org/logo-og.png',
    '20',
    'pre-intermediate',
    [
      {
        color: 'blue',
        title: 'Rule',
        text: 'The simple past is a verb tense that is used to talk about things that happened or existed before now. Imagine someone asks what your brother Wolfgang did while he was in town last weekend',
      },
      {
        color: 'green',
        title: 'example',
        text: 'Wolfgang entered a hula hoop contest.\nHe won the silver medal.',
      },
    ]
  ),
  new Leason('t3', 'Future Simple', '', '20', 'pre-intermediate', '-'),
  new Leason('t4', 'Present Continuous', '', '20', 'pre-intermediate', '-'),
  new Leason('t5', 'Past Continuous', '', '20', 'pre-intermediate', '-'),
  new Leason('t6', 'Future Continuous', '', '20', 'pre-intermediate', '-'),
]
