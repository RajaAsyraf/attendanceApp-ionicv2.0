export class PunchInService{
    //declade a stack
    private notes: {title:string}[] = [];

    addNote(note: {title:string}){
        //push the new note to the stack
        this.notes.push;
    }

    getNotes(){
        //return a copy of this array
        return this.notes.slice();
    }
}