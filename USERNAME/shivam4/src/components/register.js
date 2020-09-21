


import React, { Component } from 'react'

class Register extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            username: "",
             password: ""
       }
       this.handleChanger=this.handleChanger.bind(this)
       this.submitHandle= this.submitHandle.bind(this)
   }
 handleChanger(e)
{this.setState({[e.target.id]: e.target.value})}


submitHandle(e){
    e.preventDefault();
    var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText)
            var response=JSON.parse(xhr.responseText)
            localStorage.setItem('token',response.token)
        })   
        
        xhr.open('POST',"http://localhost:9000/signup");
        xhr.setRequestHeader("content-Type","application/json");
        xhr.send(JSON.stringify({
            "username":this.state.username,
            // "email": this.state.email,
            "password": this.state.password,

            })
        )
         console.log("data send");
        


    console.log("form submitted");
}


   render(){
       return(
           <React.Fragment>
               <form onSubmit={this.submitHandle} >
                   <br /><br /><br />



                   UserName:<input type="text" id="username" onChange= {this.handleChanger} /> <br /><br />
                   {/* Email:<input type="text" id="email" onChange= {this.handleChanger} /> <br /><br /> */}
                   Password:<input type="text" id="password"  onChange={this.handleChanger} /><br /><br />
                   <input type="submit" />
               </form>
           </React.Fragment>
           
               
           
       )
   }
   
}






export default Register