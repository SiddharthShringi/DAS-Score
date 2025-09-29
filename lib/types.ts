export interface IResponse {
  questionId: number;
  point: number;
}

export interface IMergedQuestion {
  id: number;
  text: string;
  category: string;
  point: number;
}

export interface IGroupedByCategory {
  category: string;
  QuestionTo: number;
  QuestionFrom: number;
  IndividualScore: number[];
  TotalScore: number;
}
