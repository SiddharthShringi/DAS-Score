export interface Question {
  id: number;
  text: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Criticism will obviously upset the person who receives the criticism.",
    category: "Approval",
  },
  {
    id: 2,
    text: "It is best to give up my own interests in order to please other people.",
    category: "Approval",
  },
  {
    id: 3,
    text: "I need other people's approval in order to be happy.",
    category: "Approval",
  },
  {
    id: 4,
    text: "If someone important to me expects me to do something, I feel I must do it.",
    category: "Approval",
  },
  {
    id: 5,
    text: "My value as a person depends greatly on what others think of me.",
    category: "Approval",
  },
  {
    id: 6,
    text: "I can not find happiness without being loved by another person.",
    category: "Love",
  },
  {
    id: 7,
    text: "If others dislike you, you are bound to be less happy.",
    category: "Love",
  },
  {
    id: 8,
    text: "If people whom I care about reject me, It means there is something wrong with me.",
    category: "Love",
  },
  {
    id: 9,
    text: "If a person I love does not love me, It means I am unworthy of love.",
    category: "Love",
  },
  {
    id: 10,
    text: "Being isoloated from others is bound to lead to unhappiness.",
    category: "Love",
  },
  {
    id: 11,
    text: "If I'm to be a worthwhile person, I must be truly outstanding in at least one major area.",
    category: "Achievement",
  },
  {
    id: 12,
    text: "I must be a useful, productive, creative person or life has no purpose.",
    category: "Achievement",
  },
  {
    id: 13,
    text: "People who have good ideas are more valuable and more worthy than those who do not.",
    category: "Achievement",
  },
  {
    id: 14,
    text: "If I do not do as well as others, it means I am an inferior person.",
    category: "Achievement",
  },
  {
    id: 15,
    text: "If I fail at my work, then I am a failure as a person.",
    category: "Achievement",
  },
  {
    id: 16,
    text: "If you can't do something perfectly, there is little point in doing it at all.",
    category: "Perfectionism",
  },
  {
    id: 17,
    text: "It is a shameful for a person to display his weakness.",
    category: "Perfectionism",
  },
  {
    id: 18,
    text: "A person should try to be the best at everything he does.",
    category: "Perfectionism",
  },
  {
    id: 19,
    text: "I should be upset if I make a mistake.",
    category: "Perfectionism",
  },
  {
    id: 20,
    text: "If I do not set the highest standards for myself, I'm likely to end up a second-rate person.",
    category: "Perfectionism",
  },
  {
    id: 21,
    text: "If I strongly believe I deserve something, I've reason to expect that I should get it.",
    category: "Entitlement",
  },
  {
    id: 22,
    text: "It is necessary to become frustrated if you find obstacle to getting what you want.",
    category: "Entitlement",
  },
  {
    id: 23,
    text: "If I put other people's needs before my own, they should help me when I need something from them.",
    category: "Entitlement",
  },
  {
    id: 24,
    text: "If I'm good husband/wife/parent, then I have the right to expect my family to meet my needs.",
    category: "Entitlement",
  },
  {
    id: 25,
    text: "If I do nice things for someone, I can anticipate that they will respect me and treat me well.",
    category: "Entitlement",
  },
  {
    id: 26,
    text: "I should assume responsibility for how people feel and behave if they are close to me.",
    category: "Omnipotence",
  },
  {
    id: 27,
    text: "If I criticize the way someone does something, and they become angry or depressed, it shows that I have hurt them",
    category: "Omnipotence",
  },
  {
    id: 28,
    text: "To be a good, worthwhile, moral person, I must try to help everyone who needs it.",
    category: "Omnipotence",
  },
  {
    id: 29,
    text: "If a child is having emotional or behavioral problems, this shows that the parents are not doing a good job.",
    category: "Omnipotence",
  },
  {
    id: 30,
    text: "I should be able to please everyone.",
    category: "Omnipotence",
  },
  {
    id: 31,
    text: "I can not expect to control how I feel when things do not go my way.",
    category: "Autonomy",
  },
  {
    id: 32,
    text: "There is no point in trying to change upsetting emotions because they are valid and inevitable part of daily life.",
    category: "Autonomy",
  },
  {
    id: 33,
    text: "My moods are often shaped by factors outside my control, such as my past, body chemistry, hormonal cycles, biological rhythms, or simply by chance and fate.",
    category: "Autonomy",
  },
  {
    id: 34,
    text: "My happiness often depends on what happens to me in life.",
    category: "Autonomy",
  },
  {
    id: 35,
    text: "People who have the mark of success(good looks, social status, wealth, or fame) are usually happier than those who do not.",
    category: "Autonomy",
  },
];

export const score = {
  "-2": "Strongly Agree",
  "-1": "Agree",
  "0": "Neutral",
  "1": "Disagree",
  "2": "Strongly Disagree",
} as const;

// ✅ Keys are restricted
export type ScoreKey = keyof typeof score; // "-2" | "-1" | "0" | "1" | "2"

// ✅ Values are also restricted
export type ScoreValue = (typeof score)[ScoreKey];
// "Strongly Agree" | "Agree" | "Neutral" | "Disagree" | "Strongly Disagree"

// Example usage:
export const getLabel = (key: ScoreKey): ScoreValue => {
  return score[key];
};
