/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './model/todo.model';

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
    addTodo() {
      /**
       * Todo :
       * 1- installer la bibliotheque uuid
       * 2- créer la méthode addTodo
       *  2-1 Récupérer le body 
       *  2-2 Créer le new Todo 
       *  2-3 Ajouter le todo 
       *  2-4 Retourner le nouveau Todo 
       */
    }
}
