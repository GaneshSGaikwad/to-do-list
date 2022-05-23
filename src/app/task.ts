export class task{
    id!:number
    title!:string
    date!:Date
    desc!:string
    
    status!:string

    constructor(id:number,title:string,date:Date,desc:string,status:string){
        this.id=id;
        this.title=title;
        this.date=date;
        this.desc=desc;
       
        this.status=status;
    }
}