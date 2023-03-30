export interface ITodo {
  _id: string | null;
  title: string;
  completed?: boolean;
}

export interface IAddTodoState {
  title: string;
}

export interface IEditTodoState {
  _id: string | null;
}

export interface IAlert {
  isOpen: boolean;
  message: string | null;
  severity: any;
}
