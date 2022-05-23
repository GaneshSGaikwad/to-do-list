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


     x!:number;
    

    
    

    constructor(public listService:ListService){}


 

   

    

    

   onclickSubmit(){
       console.log(this.title+" "+this.date+" "+this.desc)
       this.listService.addTask({
          
            id:this.id++,
            title:this.title,
            date:new Date(this.date),
            desc:this.desc,
            status:'pending'
           
          


       });
      
   
   }

   markAsDone(id:number){
       //this.status='completed';
     
       this.x=this.listService.Day;
   
       console.log(this.x);
       
        //this.listService.t1[id].status='completed';

         if(this.listService.t1[id].status='pending'){
            this.listService.t1[id].status='completed'
         }

        if(this.x===0){
            this.listService.t1[id].status='completed';
        }

        if(this.x===-1){
            this.listService.t1[id].status='completed';
        }


       
  

    // this.listService.t1[id].status='completed';
    // console.log(id);
   

   
      

   }

   today(){
       let x=this.listService.Day;
       console.log(x);
       
   }

    

}


