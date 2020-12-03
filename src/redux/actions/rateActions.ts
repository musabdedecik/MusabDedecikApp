export const SEND_LIKE = 'SEND_LIKE';
export const ERROR = 'ERROR';

export interface likeAction {
  type: typeof SEND_LIKE;
  cardIndex: number[];
}

export interface errorAction {
  type: typeof ERROR;
  payload: null;
}

export type rateActions = likeAction | errorAction;
