import { Component } from '@angular/core';
import { Contact } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  allContacts: Contact[] = [
    {Fname: "Sundar",Lname:"Raj",Phone:6383270312},
    {Fname: "Sarita",Lname:"Jane",Phone:8790654561},
    {Fname: "Ellis",Lname:"Erriot",Phone:984070312},
    
    
  ]; 

  myContact: Contact= new Contact();

  title = 'phonebook';
  display="none";
  $index: any;
  searchText='';
  
    ngOnInit() {
     }
  openModal() {
      this.display = "block";
    }
    onCloseHandled() {
      this.display = "none";
    }
    

    add(){
      console.log("Fname...."+this.myContact.newcontactfname);
      console.log("Lname...."+this.myContact.newcontactlname);
      console.log("Phone...."+this.myContact.newcontactnum);

     this.allContacts.push({'Fname':this.myContact.newcontactfname,'Lname':this.myContact.newcontactlname,'Phone':this.myContact.newcontactnum});
    console.log("Added");
    }
    removeContact(){
      console.log("Deleting");
      let index=this.$index;
      console.log(index);
      this.allContacts.splice(index,1);
    }
    search(){
      console.log(this.searchText);
    }
    
    
  }

