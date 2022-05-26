import Leason from '../models/leasons'
import Tests from '../models/tests'

export const LEASONS = [
  new Leason('t1', 'Present Simple', '', '10', 'pre-intermediate', [
    {
      color: '',
      title: 'Rule',
      text: 'The simple present is a verb tense with two main uses. We use the simple present tense when an action is happening right now, or when it happens regularly (or unceasingly, which is why it’s sometimes called present indefinite). Depending on the person, the simple present tense is formed by using the root form or by adding ‑s or ‑es to the end',
    },
    {
      color: 'green',
      title: 'example',
      text: 'I feel great! \nPauline loves pie. \nI’m sorry to hear that you’re sick.',
    },
    {
      color: '',
      title: '',
      text: 'The other is to talk about habitual actions or occurrences',
    },
    {
      color: 'green',
      title: 'example',
      text: 'Pauline practices the piano every day. \nMs. Jackson travels during the summer. \nHamsters run all night.',
    },
    {
      color: '',
      title: 'How to Make the Simple Present Negative',
      text: 'The formula for making a simple present verb negative is do/does + not + [root form of verb]. You can also use the contraction don’t or doesn’t instead of do not or does not',
    },
    {
      color: 'green',
      title: 'example',
      text: 'Pauline does not want to share the pie. \nShe doesn’t think there is enough to go around. \nHer friends do not agree. \nI don’t want pie anyway.',
    },
    {
      color: '',
      title: 'How to Ask a Question',
      text: 'The formula for asking a question in the simple present is do/does + [subject] + [root form of verb].',
    },
    {
      color: 'green',
      title: 'example',
      text: 'Do you know how to bake a pie? \nHow much does Pauline love pie?',
    },
    {
      color: 'red',
      title: 'Common mistakes',
      text: 'Kid’s health depend on eating enough fruits\nThe building have three rooms\nSix plus four is making ten',
    },
    {
      color: 'blue',
      title: 'Right sentence',
      text: 'Kid’s health depends on eating enough fruits\nThe building has three rooms\nSix plus four makes ten',
    },
  ]),
  new Leason('t2', 'Past Simple', '', '10', 'pre-intermediate', [
    {
      color: '',
      title: 'Rule',
      text: 'The simple past is a verb tense that is used to talk about things that happened or existed before now. Imagine someone asks what your brother Wolfgang did while he was in town last weekend',
    },

    {
      color: '',
      title: '',
      text: 'past form',
    },
    {
      color: 'blue',
      title: 'auxiliary words',
      text: 'yesterday, then, when, How lohg ago ...?, last week, three days ago, in 1997, etc.',
    },
    {
      color: '',
      title: 'We use the past simple:',
      text: 'For an action which happened at a definite time in the past. The time is stated, already known or implied.',
    },
    {
      color: 'green',
      title: 'example',
      text: 'They camping by the lake last month. (When did the go camping? Last month. The time is stated).',
    },
    {
      color: '',
      title: '',
      text: 'For an action which happened immediately one after the other in the past',
    },
    {
      color: 'green',
      title: 'example',
      text: 'First she the driver, then she got out of the taxi',
    },
    {
      color: '',
      title: '',
      text: 'For past habbits os states which are now finished. In such cases we can also use the expression used to',
    },
    {
      color: 'green',
      title: 'example',
      text: 'Kitchen used to bevery different a hundred years ago.',
    },
  ]),
  new Leason('t3', 'Future Simple', '', '10', 'pre-intermediate', [
    { color: '', title: '', text: '' },
  ]),
  new Leason('t4', 'Present Continuous', '', '10', 'pre-intermediate', [
    { color: '', title: '', text: '' },
  ]),
  new Leason('t5', 'Past Continuous', '', '15', 'pre-intermediate', [
    {
      color: '',
      title: '',
      text: 'was/were + present participle',
    },
    {
      color: 'blue',
      title: '',
      text: 'The past continuous is used with the following time expression: while, when, as, all morning, etc.',
    },
    {
      color: '',
      title: 'We use the past continuous:',
      text: 'For an action which was in progress at a state time in the past. We do not mention when the action started or finished',
    },

    {
      color: 'green',
      title: 'example',
      text: 'At seven o`clock yesterday evening they were having dinner. (we do not know when they started or finished their dinner).',
    },
    {
      color: '',
      title: '',
      text: 'For an action which was in progress when another action interrupted it. We use the past continuous for the action in progress (longer) and the past simple for the action which interrupred it (shorter)',
    },
    {
      color: 'green',
      title: 'example',
      text: 'He was walking down the street when he ran into an old friend',
    },
    {
      color: '',
      title: '',
      text: 'For two or more simultaneous past actions',
    },
    {
      color: 'green',
      title: 'example',
      text: 'She was talking on her mobile phone while she was driving to work.',
    },
    {
      color: '',
      title: '',
      text: 'To describe the atmosphere, setting, etc. In the introduction to a story before we describe the main events',
    },
    {
      color: 'green',
      title: 'example',
      text: 'The birds were singing and the leaves were rustling in the breeze ...',
    },
  ]),
  new Leason('t6', 'Future Continuous', '', '15', 'pre-intermediate', [
    { color: '', title: '', text: '' },
  ]),
  new Leason('t7', 'Present Perfect', '', '20', 'intermediate', [
    { color: '', title: '', text: '' },
  ]),
  new Leason('t8', 'Present Perfect Continuous', '', '20', 'intermediate', [
    { color: '', title: '', text: '' },
  ]),
]

export const TESTS = [
  new Tests('test1', 'Past perfect', '5', 'pre-intermediate', [
    {
      title: 'Complete sentences',
    },
    {
      text: 'Oh no! We`re late! The film _____',
      a: 'start',
      b: 'has already started',
      c: 'was started',
      d: 'is starting',
      answer: 'b',
    },
  ]),
]
