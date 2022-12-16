import {fetchData, setCurrentUser, getCurrentUser} from './main.js'

class notemaking 
{
    constructor(FN,LN,UN,Pwd1)
    {
    this.firstname=FN;
    this.lastname=LN;
    this.emailid=UN;
    this.pwd=Pwd1;
    

    }
    getfirstname(){
        return this.firstname;
    }
    getlastname(){
        return this.lastname;
    }
    getemailid(){
        return this.emailid;
    }
    getpwd()
    {
        return this.pwd;
    }
     // getUser()
     // {
      //   return this.User;
     //  }
    // getLoginpwd()
    // {
      //   return this.Loginpwd;
   //  } 
    setfirstname(FN){
        this.firstname=FN;
    }
    setlastname(LN){
        this.lastname=LN;
    }      
    setemailid(UN){
        this.emailid=UN;
    }
    setpwd(Pwd1)
    {
        this.pwd=Pwd1;
    }
    //setUser(user)
   //  {
     //    this.User=user;
    // }
   //  setLoginpwd(password)
   //  {
     //    this.Loginpwd=password;
   // }
}
class notes{
    constructor(notes1)
    {
        this.notes=notes1;
    }
    setnotes(notes1)
    {
        this.notes=notes1;
    }
    getnotes()
    
    {
        return this.notes;
    }

}
const registration=document.getElementById("formreg");
if(registration) registration.addEventListener('submit',register)
function register(e){
    e.preventDefault();
    let firstname1=document.getElementById('firstname').value;
    let lastname1=document.getElementById('lastname').value;
    let username1=document.getElementById('emailid').value;
    let passwrd=document.getElementById('pwd').value;

    let regi= new notemaking(firstname1,lastname1,username1,passwrd);

    fetchData("/users/register", regi, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "login.html";
    })
    .catch((err) => {
        alert("not success");
       let p = document.querySelector('.error');
      // p.innerHTML = err.message;
    }) 
  }
    /*
    console.log(regi.FN)
    console.log(regi.LN)
    console.log(regi.UN)
    console.log(regi.Pwd)
    registration.reset();
}
*/
const loginform=document.getElementById("login");
if(loginform) loginform.addEventListener('submit', loginuser)
function loginuser(l){
 console.log(l);   
    l.preventDefault();
    let user=document.getElementById('emailid').value;
    let password=document.getElementById('pwd').value;
    let logi= new notemaking(null,null,user,password);
    fetchData("/users/login", logi, "POST")
  .then((data) => {
    setCurrentUser(data);
    alert("success")
    window.location.href = "Note.html";
  })
  .catch((err) => {
    alert("not success");
  }) 

  let luser=new notemaking(user,password);
 console.log(`${user}`);
 console.log(`${password}`);
  loginform.reset();

}
 
    

    let user = getCurrentUser()

const noteform=document.getElementById("note");
if(noteform) noteform.addEventListener('submit',notem)
function notem(f)
{
    f.preventDefault();
    let notetext=document.getElementById("notes").value;
    let note1= new notes(notetext);
    note1.userID= user.userID;
    fetchData("/notes/create",note1, "POST")
    .then((data) => {

      window.location.href = "Note.html";
    })
    .catch((err) => {
     console.log(`Error!!! ${err.message}`)
     
    })
   
    console.log(`${notetext}`);
    noteform.reset();
}




if(user&&noteform) getallnotes();

function getallnotes(){
    let notetext=document.getElementById("notes");
    fetchData("/notes/getNote",user,"POST")
    .then((data) => {
 console.log(data);
 for(let i=0;i<data.length;i++){
    notetext.value='\n'+data[i].notes
 }

    })
}