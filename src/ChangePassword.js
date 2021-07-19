import React from 'react';
// import userData from './user.json'
class ChangePassword extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.params;
        console.log(this.state);
    }
    pwdMatchChecker=()=>{
        var n1password=document.getElementById('n1password').value;
        var n2password=document.getElementById('n2password').value;
        if(n1password!==n2password){
            document.getElementById("result").innerHTML="Passwords do not match!";
        }
        else{
            document.getElementById("result").innerHTML="Passwords match";
        }
    };
    passwordChangeHandler = ()=>{
        var uname=document.getElementById('uname').value;
        var upassword=document.getElementById('opassword').value;
        var n1password=document.getElementById('n1password').value;
        var n2password=document.getElementById('n2password').value;
        var temp=this.state.users;
        var isLoggedIn=0;
        if(n1password!==n2password){
            document.getElementById("result").innerHTML="Passwords do not match!";
        }
        else{
            for(var i=0;i<temp.length;i++){
                // console.log(temp[i].username.toLowerCase()+" "+temp[i].password+" "+uname.toLowerCase()+" "+upassword);
                if(temp[i].username.toLowerCase()===uname.toLowerCase()){
                    isLoggedIn=1;
                    if(temp[i].password===upassword){
                        isLoggedIn=2;
                        temp[i].password=n1password;
                        this.setState(
                            {users:temp}
                        );
                        document.getElementById("result").innerHTML="PASSWORD CHANGED SUCCESSFUL!";
                    }
                    else{
                        document.getElementById("result").innerHTML="INVALID PASSWORD!";
                    }
    
                }
                else if(isLoggedIn===0){
                    // console.log(this.state.loggedIn+" "+uname);
                    document.getElementById("result").innerHTML="INVALID USERNAME!";
                }

        }
        
        }
        
    };
    render(){
        return(
            <div>
                <div><h1>CHANGE PASSWORD</h1></div>
            <div>
                <label className="loginform">USERNAME</label>
                <input  className="loginform" type="text" id="uname"/>
            </div>
            <div>
                <label className="loginform">OLD PASSWORD</label>
                <input  type="password" className="loginform" id="opassword"/>
            </div>
            <div>
                <label className="loginform">NEW PASSWORD</label>
                <input  className="loginform" type="text" id="n1password"/>
            </div>
            <div>
                <label className="loginform">RETYPE NEW PASSWORD</label>
                <input  className="loginform" type="text" id="n2password" onChange={this.pwdMatchChecker}/>
            </div>
            <div>
                <button onClick={this.passwordChangeHandler}><b>CHANGE PASSWORD</b></button>
            </div>
            <div><b id="result"></b></div>
            </div>
        ); 
    }
}
export default ChangePassword;