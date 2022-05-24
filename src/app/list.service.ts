import { Injectable } from "@angular/core";

import { task } from "./task";

@Injectable({
    providedIn: 'root'
  })
export class ListService{


    currentDate = new Date();
   
   private Days!:number;

//    get Day(){
//        return this.Days;
//    }

    constructor(){}

    t1:task[]=[];

    
    

    addTask($event:any){
        let t=new task($event["id"],$event["title"],$event["date"],$event["desc"],$event["status"],$event["deuDate"]);
        
       let str: string = this.getDue(t);
        t.deuDate = str;
        this.t1.push(t);

        // console.log(t);
         console.log(this.t1)
        

    }

    getDue($event: any): string{
        let x1=this.currentDate.getTime();
        let x2=$event.date.getTime();
        let time=x1-x2;
        this.Days = Math.floor(time / (1000 * 3600 * 24));
        
        if(this.Days===0){
            $event.deuDate="today";
        } else if(this.Days===-1){
            $event.deuDate="tomorrow";
        } else{
            $event.deuDate="safe";
        }
        
        return $event.deuDate;       
    }

}