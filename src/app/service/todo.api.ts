import Todo from '../models/todo';
export class TodoApi
{
  listedeTodos : Array<Todo> = [];

  fetchTodo(): Promise<Array<Todo>>
  {  
    return new Promise((resolve)=> {
            setTimeout(()=> {
                resolve([...this.listedeTodos]);

            }, 2000);  
    });  
  }

deletefecthTodo(): Promise<Array<Todo>> {
  return new Promise(((resolve, reject) => {
      this.listedeTodos = [];
      resolve(this.listedeTodos);
      reject((e) => (e.message))
    })
  )}


}
