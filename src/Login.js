import React from 'react';
// import userData from './user.json'
import {withRouter} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.isloggedIn=0;
        this.state=this.props.params;
        console.log(this.props.history);
    }
    userChangeHandler = ()=>{
        var uname=document.getElementById('uname').value;
        var upassword=document.getElementById('upassword').value;
        var temp=this.state.users;
        for(var i=0;i<temp.length;i++){
            // console.log(temp[i].username.toLowerCase()+" "+temp[i].password+" "+uname.toLowerCase()+" "+upassword);
            if(temp[i].username.toLowerCase()===uname.toLowerCase()){
                this.isLoggedIn=1;
                if(temp[i].password===upassword){
                    this.isLoggedIn=2;
                    document.getElementById("result").innerHTML="SUCCESSFUL LOGIN!";
                    this.props.history.push('/productPage');
                    
                }
                else{
                    document.getElementById("result").innerHTML="INVALID PASSWORD!";
                }

            }
            else if(this.isLoggedIn===0){
                // console.log(this.state.loggedIn+" "+uname);
                document.getElementById("result").innerHTML="INVALID USERNAME!";
            }
        }
        
    };
    render(){
        return(
            <div>
                <div><h1>LOGIN</h1></div>
            <div>
                <label className="loginform">USERNAME</label>
                <input  className="loginform" type="text" id="uname"/>
            </div>
            <div>
                <label className="loginform">PASSWORD</label>
                <input  type="password" className="loginform" id="upassword"/>
            </div>
            <div>
                <button onClick={this.userChangeHandler}><b>LOGIN</b></button>
            </div>
            <div><b id="result"></b></div>
            </div> 
        ); 
    }
}
export default withRouter(Login);