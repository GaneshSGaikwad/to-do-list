import { Component } from "@angular/core";

import { ListService } from "./list.service";
import { task } from "./task";

@Component({
    selector:'td-todo',
    templateUrl:'to-do-list.component.html'

})

export class Todo{

    id:number=0;
    title!:string;
    date!:Date;
    desc!:string;
    status!:string;
    deuDate!: string;

    // get Day(){
    //     return this.listService.Day;
    // }
    
   
   
    constructor(public listService:ListService){}

   onclickSubmit(){
       console.log(this.title+" "+this.date+" "+this.desc)
       this.listService.addTask({
          
            id:this.id++,
            title:this.title,
            date:new Date(this.date),
            desc:this.desc,
            status:'pending',
            deuDate: this.deuDate
       });
    
   }

   markAsDone(id:number){

    this.listService.t1[id].status='completed'

   }

  

    

}


