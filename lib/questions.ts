export interface Question {
  id: number;
  text: string;
  category: string;
}

// export const questions: Question[] = [
//   {
//     id: 1,
//     text: "I often need others approval to feel okay about myself.",
//     category: "Approval",
//   },
//   {
//     id: 2,
//     text: "If someone is upset with me, I can't relax until I fix it.",
//     category: "Approval",
//   },
//   {
//     id: 3,
//     text: "I feel anxious when I think I might disappoint someone.",
//     category: "Approval",
//   },
//   {
//     id: 4,
//     text: "I need to be liked by everyone to feel good about myself.",
//     category: "Approval",
//   },
//   {
//     id: 5,
//     text: "I often change my opinions to fit in with others.",
//     category: "Approval",
//   },
//   {
//     id: 6,
//     text: "I feel guilty when I put my needs before others needs.",
//     category: "Love",
//   },
//   {
//     id: 7,
//     text: "I worry about being judged negatively by others.",
//     category: "Love",
//   },
//   {
//     id: 8,
//     text: "I find it hard to say no to people, even when I want to.",
//     category: "Love",
//   },
//   {
//     id: 9,
//     text: "I often feel responsible for others’ feelings.",
//     category: "Love",
//   },
//   {
//     id: 10,
//     text: "I feel anxious when I think I might disappoint someone.",
//     category: "Love",
//   },
//   {
//     id: 11,
//     text: "I have high standards for myself and feel like I must be perfect.",
//     category: "Achievement",
//   },
//   {
//     id: 12,
//     text: "I get upset with myself when I make mistakes.",
//     category: "Achievement",
//   },
//   {
//     id: 13,
//     text: "I often feel like I’m not good enough.",
//     category: "Achievement",
//   },
//   {
//     id: 14,
//     text: "I set unrealistic goals for myself and feel disappointed when I don’t meet them.",
//     category: "Achievement",
//   },
//   {
//     id: 15,
//     text: "I criticize myself harshly when I fail at something.",
//     category: "Achievement",
//   },
//   {
//     id: 16,
//     text: "I feel like I have to be the best at everything I do.",
//     category: "Perfectionism",
//   },
//   {
//     id: 17,
//     text: "I often compare myself to others and feel like I come up short.",
//     category: "Perfectionism",
//   },
//   {
//     id: 18,
//     text: "I feel like I can’t relax until everything is perfect.",
//     category: "Perfectionism",
//   },
//   {
//     id: 19,
//     text: "I worry about making mistakes and being judged for them.",
//     category: "Perfectionism",
//   },
//   {
//     id: 20,
//     text: "I feel like I have to prove my worth through my achievements.",
//     category: "Perfectionism",
//   },
//   {
//     id: 21,
//     text: "I often feel anxious or worried about things that might go wrong.",
//     category: "Entitlement",
//   },
//   {
//     id: 22,
//     text: "I have trouble relaxing and often feel on edge.",
//     category: "Entitlement",
//   },
//   {
//     id: 23,
//     text: "I avoid situations that make me feel anxious, even if they are important.",
//     category: "Entitlement",
//   },
//   {
//     id: 24,
//     text: "I worry about things that are out of my control.",
//     category: "Entitlement",
//   },
//   {
//     id: 25,
//     text: "I feel like I can’t handle uncertainty and need to know what will happen.",
//     category: "Entitlement",
//   },
//   {
//     id: 26,
//     text: "I often feel tense or restless, even when there is no obvious reason.",
//     category: "Omnipotence",
//   },
//   {
//     id: 27,
//     text: "I have physical symptoms of anxiety, like a racing heart or sweating.",
//     category: "Omnipotence",
//   },
//   {
//     id: 28,
//     text: "I find it hard to concentrate because of my anxious thoughts.",
//     category: "Omnipotence",
//   },
//   {
//     id: 29,
//     text: "I feel like my anxiety is interfering with my daily life.",
//     category: "Omnipotence",
//   },
//   {
//     id: 30,
//     text: "I often feel like I’m in danger, even when I’m safe.",
//     category: "Omnipotence",
//   },
//   {
//     id: 31,
//     text: "I feel like I have to be in control of everything to feel safe.",
//     category: "Autonomy",
//   },
//   {
//     id: 32,
//     text: "I get upset when things don’t go according to my plans.",
//     category: "Autonomy",
//   },
//   {
//     id: 33,
//     text: "I have trouble trusting others to handle things for me.",
//     category: "Autonomy",
//   },
//   {
//     id: 34,
//     text: "I feel anxious when I can’t predict what will happen.",
//     category: "Autonomy",
//   },
//   {
//     id: 35,
//     text: "I often try to control situations or people to avoid feeling anxious.",
//     category: "Autonomy",
//   },
// ];

export const questions: Question[] = [
  {
    id: 1,
    text: "I often need others approval to feel okay about myself.",
    category: "Approval",
  },
  {
    id: 2,
    text: "I often need others approval to feel okay about myself.",
    category: "Approval",
  },
  {
    id: 3,
    text: "I feel guilty when I put my needs before others needs.",
    category: "Love",
  },
  {
    id: 4,
    text: "I feel guilty when I put my needs before others needs.",
    category: "Love",
  },
  {
    id: 5,
    text: "I have high standards for myself and feel like I must be perfect.",
    category: "Achievement",
  },
  {
    id: 6,
    text: "I have high standards for myself and feel like I must be perfect.",
    category: "Achievement",
  },
  {
    id: 7,
    text: "I feel like I have to be the best at everything I do.",
    category: "Perfectionism",
  },
  {
    id: 8,
    text: "I feel like I have to be the best at everything I do.",
    category: "Perfectionism",
  },
  {
    id: 9,
    text: "I often feel anxious or worried about things that might go wrong.",
    category: "Entitlement",
  },
  {
    id: 10,
    text: "I often feel anxious or worried about things that might go wrong.",
    category: "Entitlement",
  },
  {
    id: 11,
    text: "I often feel tense or restless, even when there is no obvious reason.",
    category: "Omnipotence",
  },
  {
    id: 12,
    text: "I often feel tense or restless, even when there is no obvious reason.",
    category: "Omnipotence",
  },
  {
    id: 13,
    text: "I feel like I have to be in control of everything to feel safe.",
    category: "Autonomy",
  },
  {
    id: 14,
    text: "I feel like I have to be in control of everything to feel safe.",
    category: "Autonomy",
  },
];
