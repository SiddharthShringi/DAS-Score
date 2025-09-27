export type CategoryKey =
  | "Approval"
  | "Love"
  | "Achievement"
  | "Perfectionism"
  | "Entitlement"
  | "Omnipotence"
  | "Autonomy";

export type CategoryInfo = {
  belief: string;
  bullets?: string[];
};

// Order you want to display on the page
export const CATEGORY_ORDER: CategoryKey[] = [
  "Approval",
  "Love",
  "Achievement",
  "Perfectionism",
  "Entitlement",
  "Omnipotence",
  "Autonomy",
];

export const dasInfo: Record<CategoryKey, CategoryInfo> = {
  Approval: {
    belief: "If someone important disapproves of me, I can't be happy.",
    bullets: [
      "This score shows your tendency to measure your self-esteem based on how people react to you and what they think of you.",
      "A positive score between 0 and 10 indicates you are independent, with a healthy sense of your own worth even when confronted with criticism and disapproval.",
      "A negative scores between 0 and -10 indicates you are excessively dependent because you evaluate yourself through other people's eyes. If someone insults you or puts you down, you automatically tend to look down on yourself.",
      "Since your emotional well-being is exquisitely sensitive to what you imagine people think of you, you can be easily manipulated, and you are vulnerable to anxiety and depression when others criticize you or are angry with you.",
    ],
  },
  Love: {
    belief: "If I'm not loved, life isn't worth living.",
    bullets: [
      "This score shows your tendency to base your worth on whether or not you are loved.",
      "A positive score indicates you see love as desirable but you have wide range of other interests you also find gratifying and fulfilling. Hence, love is not a requirement for your happiness or self-esteem. People are likely to find you attractive because you radiate a healthy sense of self love and are interested in many aspect of living.",
      "A negative score indicates you are a love junkie. You see love as a need without you can't survive, much less be happy. The closer your score to -10, the more dependent on love you are.You tend to adopt inferior, put down roles in relationships.",
    ],
  },
  Achievement: {
    belief: "I am only as good as what I achieve.",
    bullets: [
      "This score helps you measure different type of addiction.",
      "A negative score indicates that you have a constricted sense of your own humanity, and you see yourself as a commodity in marketplace. The more negative your score, the more your sense of self-worth and your capacity for joy are dependent on your productivity.",
      "Economic and Emotional depression will seem identical to you.",
      "A positive score, in contrast, indicates that you enjoy creativity and productivity, but do not see them as an exclusive or necessary road to self esteem and satisfaction.",
    ],
  },
  Perfectionism: {
    belief: "If I don't do well all the time, I'm no good.",
    bullets: [
      "A negative score indicates you are hooked on searching for holy grail. You demand perfection in yourself and mistakes are taboo.",
      "Failure is worse than death, and even negative emotions are a disaster.",
      "You are supposed to look, feel, think, and behave superbly all times.",
      "You sense that being less than spectacular means burning in the flames of hell.",
      "Once you do achieve a goal, another more distant goal instantly replaces it, so you never experience the reward of getting to the top of the mountain.",
      "You are living with unrealistic, impossible personal standards, and you need to revaluate them.",
      "Your problem does not lie in your performance, but in the yardstick you use to measure it.",
      "If you bring your expectations in line with reality, you will be regularly pleased and rewarded instead of frustrated.",
      "A positive score suggests you have the capacity to set meaningful, flexible, appropriate standards. You get great satisfaction from process and experiences, and you are not exclusively fixated on outcomes.",
      "You don't have to be outstanding at everything, and you don't always have to be 'try your best'.",
      "You don't fear mistakes but you see them as golden opportunities to learn and endorse your humanity.",
      "Paradoxically you are likely to be much more productive than your perfectionistic associates because you do not become compulsively preoccupied with detail and correctness.",
    ],
  },
  Entitlement: {
    belief: "I should always be treated kindly and fairly.",
    bullets: [
      "A negative score indicates that you feel entitled to things--success, love, happiness, etc.",
      "You expect and demand that your wants be met by other people and by universe at large because of your inherent goodness or hard work.",
      "When this does not happen--as is often the case you are locked into one of two reactions. Either you feel depressed and inadequate or you become irate. Thus you consume enormous amount of energy being frustrated, sad and mad. Much time you see life as sour or rotten experience.",
      "You complain loudly often, but you do little to solve problems.",
      "A positive score suggests you don't feel automatically entitled to things. So you negotiate to what you want and often get it.",
      "Because of your awareness that other people are unique and different, you realize there is no inherent reason why things should always go your way.",
      "You experience negative outcome as disappointment but not tragedy because you are a percentage player and you don't expect perfect reciprocity or justice all the times.",
    ],
  },
  Omnipotence: {
    belief: "If I don't stay in control, everything will fall apart.",
    bullets: [
      "This indicates your tendency to see yourself as the center of your personal universe and to hold yourself responsible for much of what goes on around you.",
      "A negative score indicates you often make the *personalization error* and you blame yourself inappropriately for the negative action and attitudes of theirs who are not really under your control.",
      "Paradoxically, the attitude that you should be omnipotent and all-powerful cripples you and leaves you anxious and ineffectual.",
      "A positive score, in contrast, indicates you know the joy that comes from accepting that you are not the center of the universe. Since you are not in control of other adults.",
      "You are not ultimately responsible for them but only for yourself.",
      "This attitude doesn't isolate you from others, quite the opposite is true, you relate to people effectively as a friendly collaborator, *and you are not threatened when they disagree with your ideas of fail to follow your advice.*",
      "Others often want to be close to you because you have relinquished any attempt to control them.",
    ],
  },
  Autonomy: {
    belief: "This is your ability to find happiness within yourself.",
    bullets: [
      "A positive score indicates that all your moods are ultimately the children of your thoughts and attitudes. You assume responsibility for your feelings because you recognize they are ultimately created by you.",
      "This sounds like you might be lonely and  isolated because you realize that all feelings are created only in your head. Paradoxically, however, this vision of autonomy frees you from the petty confines of your mind and delivers the world to you with a full measure of all the satisfaction, mystery and excitement that it can offer.",
      "A negative scores suggests you are still trapped in the belief that your potential for joy and self esteem comes from outside.",
      "This puts you at great disadvantage because everything outside is ultimately beyond your control.",
    ],
  },
};
