import React from 'react';
import { NavLink,Route, HashRouter } from 'react-router-dom';
import Login from './Login';
import ProductPage from './ProductPage';
import ChangePassword from './ChangePassword';
import CartPage from './CartPage';
import "./stylesheet.css";
import userData from './user.json'
import productData from './product.json'
class WelcomePage extends React.Component{
  constructor(){
    super();
    this.userData=userData;
    this.productData=productData;
    this.items=[]
  }
    render(){
        return (
            <HashRouter>
        <div>
          <h1>Kitchen Shop</h1>
          <div className="navbar" id="nb">
            <div className="nav-content"><NavLink exact to="/admin-login"><h3 className="nav-link">ADMIN LOGIN</h3></NavLink></div>
            <div className="nav-content"><NavLink to="/change-password"><h3 className="nav-link">CHANGE PASSWORD</h3></NavLink></div>
          </div>
          <div className="content">
            <Route path="/admin-login"><Login params={this.userData}/></Route>
            <Route path="/change-password"><ChangePassword params={this.userData}/></Route>
            <Route path="/productPage"><ProductPage params={[this.productData,this.items]}/></Route>
            <Route path="/cartPage"><CartPage params={this.items}/></Route>
          </div>
        </div>
      </HashRouter>
        );}
}
export default WelcomePage;