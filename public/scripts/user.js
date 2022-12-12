import {fetchData} from './main.js'

class notemaking 
{
    constructor(fname,lname,uname,pwd,note)
    {
    this.FN=fname;
    this.LN=lname;
    this.UN=uname;
    this.Pwd=pwd;
    this.Note=note;

    }
    getFN(){
        return this.FN;
    }
    getLN(){
        return this.LN;
    }
    getUN(){
        return this.UN;
    }
    getPwd()
    {
        return this.Pwd;
    }
    getNote()
    
    {
        return this.Note;
    }
     getUser()
     {
        return this.User;
      }
    getLoginpwd()
    {
        return this.Loginpwd;
    } 
    setFN(fname){
        this.FN=fname;
    }
    setLN(lname){
        this.LN=lname;
    }      
    setUN(uname){
        this.UN=uname;
    }
    setPwd(pwd)
    {
        this.Pwd=pwd;
    }
    setNote(note)
    {
        this.Note=note;
    }
    setUser(user)
    {
        this.User=user;
    }
    setLoginpwd(password)
    {
        this.Loginpwd=password;
    }
}
const registration=document.getElementById("formreg");
if(registration) registration.addEventListener('submit',register)
function register(e){
    e.preventDefault();
    let firstname=document.getElementById('fname').value;
    let lastname=document.getElementById('lname').value;
    let username=document.getElementById('uname').value;
    let passwrd=document.getElementById('password').value;

    let regi= new notemaking(firstname,lastname,username,passwrd,);

    fetchData("/users/register", regi, "POST")
    .then((data) => {
      //setCurrentUser(data);
      window.location.href = "login.html";
    })
    .catch((err) => {
        alert("not success");
     // let p = document.querySelector('.error');
      //p.innerHTML = err.message;
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
    l.preventDefault();
    let user=document.getElementById('uname').value;
    let password=document.getElementById('password').value;
    let logi= new notemaking(user,password);
    fetchData("/users/login", logi, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Note.html";
  })
  .catch((err) => {
    alert("not success");
  }) 
}
 
    loginform.reset();

const noteform=document.getElementById("note");
if(noteform) noteform.addEventListener('submit',notem)
function notem(f)
{
    f.preventDefault();
    let notetext=document.getElementById('noteid').value;
    console.log(`${notetext}`);
    noteform.reset();
}