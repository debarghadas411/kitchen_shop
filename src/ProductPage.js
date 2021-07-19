import React from 'react';
import {withRouter} from 'react-router-dom'
class ProductDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.params[0];
        this.item=[];
        console.log(this.state);
    }
    changeHandler=(name)=>{
        // console.log(comp);
        var cb=document.getElementById(name);
        console.log(cb);
        for(var i=0;i<cb.length;i++){
            if(cb.isChecked){
                this.item.push(cb.name);
                console.log(this.item);
            }
        }
        
        
    }
    goToCartHandler = ()=>{
                this.props.params[1]=this.item;
                console.log(this.props.params[1]);
                // console.log(this.item);
                this.props.history.push('/cartPage');
                }
    render(){
        var temp=this.state.products;
        return (
            <div>
                <h1>PRODUCT LIST</h1>           
                    {temp && temp.map(T =>
                    <div>
                        <div id="prodImg"><img src={T.img} alt={T.name} width="200" height="200"/></div>
                        <div id="prodDesc">
                        <div>{T.brand} {T.name}</div>
                        <div>{T.description}</div>
                        <div className="price">{T.price}</div>
                        <div><input id={T.name+T.brand} type="checkbox" name={T.name} value={T.brand+" "+T.name} onChange={this.changeHandler(T.name+T.brand)}/>
                        <label> ADD TO CART </label>
                        </div>
                        </div>
                    </div>
                    )}
                    <div><button className="nav-content" onClick={this.goToCartHandler}>GO TO CART</button></div>
            </div>
        )
            
            
}
}
export default withRouter(ProductDisplay);