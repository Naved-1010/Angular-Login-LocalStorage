import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Localstorage-Login');

  // below userRagister property is blank array form for get data from userLogin
  userRagister: any[]=[];

  // below userLogin property is to store input data inside this
  Userlogin ={
      // uID:'',

    username:'',
    password:'',
    emailid:'',
    mobileno:0,
    address:'',
  };
  
  login ={
    username:'',
    password:'',
  };

  onRagister(){

    // below method is save data on this.userRagister in array form
    //data push in array form
    this.userRagister.push(this.Userlogin);
    console.log(this.userRagister);

    // below method is used - blank register form after button click
    this.Userlogin={
      // uID:'',
      
    username:'',
    password:'',
    emailid:'',
    mobileno:0,
    address:'',
    };
    // below method is used for set data 
    // JSON.stringify used for array to string
    localStorage.setItem("userdetail", JSON.stringify(this.userRagister))  
  }

  ngOnInit(){

    // below method save "userdetail" data in localData
    const localData= localStorage.getItem("userdetail");

    // below if is for localDatais is not null then save this data in this.userRagister array in object form
    if(localData!=null){
      // below method JsonPipe.parse used for array to object conversation
      // and save in this.userRagister
this.userRagister=JSON.parse(localData);

    }
  }

  onLogin(){
    // below method for find array and data if succes then show alert login successful
    // username and password if succesfully find in this.userRagisterthen store in logindetail and show alert function
    const logindetail=this.userRagister.find(
      (e)=>e.username==this.login.username && e.password==this.login.password
    );
  
  
  this.login ={

    username:'',
    password:'',
  };
    if(logindetail!=undefined){
    alert('Login Sucessfull');
  }else{
    
    alert('Invalid Details');
  }
  }
}
