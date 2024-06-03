/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './model/todo.model';
import { v4 as uuidv4 } from 'uuid';
@Controller('todo')
export class TodoController {
    todos: Todo[] = [
        new Todo('1','découvrir nestJS', 'découvrir nestJS en créant une petite application Todo', TodoStatusEnum.actif, new Date())
    ];
    @Get()
    getTodos(): Todo[] {
        return this.todos;
    }
    @Post()
    addTodo(@Body() body) {
      /**
       * Todo :
       * 1- installer la bibliotheque uuid
       * 2- créer la méthode addTodo
       *  2-1 Récupérer le body 
       *  2-2 Créer le new Todo 
       *  2-3 Ajouter le todo 
       *  2-4 Retourner le nouveau Todo 
       */
      const newTodo: Todo = {
        id: uuidv4(),
        createdAt: new Date(),
        status: TodoStatusEnum.waiting,
        ...body,
      };
      this.todos.push(newTodo);
      return newTodo;
    }
}
