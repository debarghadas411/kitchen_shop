import React from 'react';
import {withRouter} from 'react-router-dom'
class CartPage extends React.Component{
    constructor(props){
        super(props);
        this.item=this.props.params.items   ;
        console.log(this.props);
    };
    removeFromCartHandler=(product)=>{
        if(this.item.includes(product)){
            var ind=this.item.indexOf(product)
            this.item.splice(ind,1);
            console.log(this.item);
            this.props.params.items = this.item;
            this.props.history.push('/cartPage');
        }
    };
    orderHandler = ()=>{
        this.props.params[1]=this.item;
        console.log(this.props.params[1]);
        // console.log(this.item);
        alert("YOUR ORDER WAS PLACED SUCCESSFULLY!!")
        this.props.history.push('/orderConfirmed');
        }
render(){
    var temp=this.item;
        return (
            <div>
                <h1>CART</h1>           
                    {temp && temp.map(T =>
                    <div>
                        <div id="prodImg"><img src={T.img} alt={T.name} width="200" height="200"/></div>
                        <div id="prodDesc">
                        <div>{T.brand} {T.name}</div>
                        <div>{T.description}</div>
                        <div className="price">Rs. {T.price}</div>
                        <div>
                            <button className='nav-content' onClick={() => this.removeFromCartHandler(T)}>REMOVE</button>
                        </div>
                        </div>
                    </div>
                    )}
                    <div><button className="nav-content" onClick={this.orderHandler}>ORDER</button></div>
            </div>
        )
}
}

export default withRouter(CartPage);