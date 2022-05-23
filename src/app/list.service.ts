import { Injectable } from "@angular/core";

import { task } from "./task";

@Injectable({
    providedIn: 'root'
  })
export class ListService{


    currentDate = new Date();



    
//    title!:string;
//    private date!:Date;
//    private desc!:string;
//    private status!:string;

   
   private Days!:number;

   get Day(){
       return this.Days;
   }

    constructor(){}

    t1:task[]=[];

    // const a=this.t1.sort((a,b)=>)
    

    addTask($event:any){
        let t=new task($event["id"],$event["title"],$event["date"],$event["desc"],$event["status"]);
        console.log(t);
        this.t1.push(t)
        console.log(this.t1)

        // console.log(t.date)
        // console.log(this.currentDate.getTime())
        // console.log(t.date.getTime())

        let x1=this.currentDate.getTime();
        let x2=t.date.getTime();
        let time=x1-x2;
        let Days = Math.floor(time / (1000 * 3600 * 24));

        // console.log(Days)
        

   
    }

    getDays($event:any){
        
            let t=new task($event["id"],$event["title"],$event["date"],$event["desc"],$event["status"]);
           let x1=this.currentDate.getTime();
           let x2=t.date.getTime();
           let time=x1-x2;
            this.Days = time / (1000 * 3600 * 24);
            console.log(this.Days)

            
          
           
        
       
    }

}