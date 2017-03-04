let count = 0;

export class ToDo {
  constructor(body) {
    this.id = count++;
    this.body = body;
  }
}