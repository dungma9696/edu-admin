export interface IResponseError {
  code: number;
  messages: IMessage[];
}

export interface IMessage {
  type: number;
  param: string;
  message: string;
}
