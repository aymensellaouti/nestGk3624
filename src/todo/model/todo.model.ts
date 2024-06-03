/* eslint-disable prettier/prettier */

export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}


export class Todo {
  constructor(
    public id = 0,
    public name = '',
    public description = '',
    public status: TodoStatusEnum,
    public createdAt: Date,
) {
  }
}