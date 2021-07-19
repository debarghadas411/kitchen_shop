import React from 'react';
import { NavLink,Route, HashRouter } from 'react-router-dom';
import Login from './Login';
import ProductPage from './ProductPage';
import ChangePassword from './ChangePassword';
import CartPage from './CartPage';
import OrderConfirmed from './OrderConfirmed';
import "./stylesheet.css";
import userData from './user.json';
import productData from './product.json';
class WelcomePage extends React.Component{
  constructor(){
    super();
    this.state={userData:userData,  
              productData:productData,
              items:[]};
    console.log(this.state)
  }
    render(){
        return (
            <HashRouter>
        <div>
          <h1>Kitchen Story</h1>
          <div className="navbar" id="nb">
            <div className="nav-content"><NavLink exact to="/admin-login"><h3 className="nav-link">ADMIN LOGIN</h3></NavLink></div>
            <div className="nav-content"><NavLink to="/change-password"><h3 className="nav-link">CHANGE PASSWORD</h3></NavLink></div>
          </div>
          <div className="content">
            <Route path="/admin-login"><Login params={this.state}/></Route>
            <Route path="/change-password"><ChangePassword params={this.state}/></Route>
            <Route path="/productPage"><ProductPage params={this.state}/></Route>
            <Route path="/cartPage"><CartPage params={this.state}/></Route>
            <Route path="/orderConfirmed"><OrderConfirmed params={this.state}/></Route>
          </div>
        </div>
      </HashRouter>
        );}
}
export default WelcomePage;