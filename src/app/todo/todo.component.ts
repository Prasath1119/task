import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoArray=[];
  value:any;
  searchtask:string;
  addtaskTemplate: boolean = false;
  constructor(private toast: ToastrService) { }

  ngOnInit() {
  }
  
  addTask(){
    this.addtaskTemplate = true;
  }
  backBtn(){
    this.addtaskTemplate = false;
  }
  addTodo(val){
    if(val!=="" && val != undefined){
      this.todoArray.push(val)
      this.value = "";
      this.addtaskTemplate = false;
      this.toast.success("Task added successfully");

  }
}
  deleteTask(data){
       this.todoArray = this.todoArray.filter(res =>  res != data)
       this.toast.success("Task deleted successfully");
  }
  }

  
    
  
 



