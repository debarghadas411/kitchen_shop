import React from 'react';
import {withRouter} from 'react-router-dom'
class OrderConfirmed extends React.Component{
    constructor(props){
        super(props);
        this.item=this.props.params.items   ;
        console.log(this.props);
    };
    render(){
        var temp=this.item;
        var price=0
        for(var i=0;i<this.item.length;i++){
            price+=parseInt(this.item[i].price);
            console.log(price);
        }
        return(
            <div>
                <h1>ORDER CONFIRMED!!</h1>
                <table>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    {temp && temp.map(T =>
                    <tr>
                        <td>{T.brand+" "+T.name}</td>
                        <td>Rs. {T.price}</td>
                    </tr>
                    )}
                     <tr>
                        <td><hr/></td>
                        <td><hr/></td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td>Rs. {price}</td>
                    </tr>
                </table>
            </div>)
    }
}
export default withRouter(OrderConfirmed);