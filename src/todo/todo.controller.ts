/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './model/todo.model';
import { v4 as uuidv4 } from 'uuid';
@Controller('todo')
export class TodoController {
  todos: Todo[] = [
    new Todo(
      '1',
      'découvrir nestJS',
      'découvrir nestJS en créant une petite application Todo',
      TodoStatusEnum.actif,
      new Date(),
    ),
  ];
  @Get()
  getTodos(): Todo[] {
    return this.todos;
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    const todo = this.todos.find((t) => t.id == id);
    console.log({ todo, id });

    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    return todo;
  }
  @Delete(':id')
  deleteTodoById(@Param('id') id: string) {
    const length = this.todos.length;
    
    this.todos = this.todos.filter((t) => t.id != id);
    // console.log({ length, id, tl: this.todos.length });
    if (length == this.todos.length)
      throw new NotFoundException(`Todo ${id} not found`);
    return { count: 1 };
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() body): Todo {
    const { name, description, status } = body;
    const todo = this.todos.find((t) => t.id == id);
    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    if (!name || !description || !status)
      throw new BadRequestException(`Informations manquantes`);
    todo.name = name;
    todo.description = description;
    todo.status = status;
    return todo;
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
