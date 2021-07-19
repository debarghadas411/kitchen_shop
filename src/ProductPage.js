import React from 'react';
import {withRouter} from 'react-router-dom'
class ProductDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:this.props.params.productData.products,
            items:this.props.params.items
        };
        this.item=[];
        console.log(this.props.params);
    };
    handleChange=()=>{
        var input = document.getElementById('myInput');
        console.log(input);
        var filter = input.value.toUpperCase();
        var li = document.getElementsByClassName('product-list');
        console.log(li);
        for (var i = 0; i < li.length; i++) {
            var prod = li[i].getElementsByClassName('prod-name');
            console.log(prod);
            var txtValue = prod[0].innerText;
            if (txtValue.toUpperCase().includes(filter)) {
                li[i].style.display = "block";
            } else {
              li[i].style.display = "none";
            }
          }
    }
    addToCartHandler=(product)=>{
        this.item.push(product);
        console.log(this.item)
    };
    removeFromCartHandler=(product)=>{
        if(this.item.includes(product)){
            var ind=this.item.indexOf(product)
            this.item.splice(ind,1);
            console.log(this.item);
        }
    };
    goToCartHandler = async ()=>{
        await this.setState({ items: this.item}); 
        this.props.params.items=this.item
                console.log(this.props);
                // console.log(this.item);
                this.props.history.push('/cartPage');
                }
    render(){
        var temp=this.state.products;
        return (
            <div>
                <h2>SEARCH BAR</h2>
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for products.." onChange={this.handleChange}/>

                <h1>PRODUCT LIST</h1>           
                    {temp && temp.map(T =>
                    <div className="product-list">
                        <div id="prodImg"><img src={T.img} alt={T.name} width="190" height="190"/></div>
                        <div id="prodDesc">
                        <div className="prod-name">{T.brand} {T.name}</div>
                        <div>{T.description}</div>
                        <div className="price">Rs. {T.price}</div>
                        <div>
                            <button className='nav-content' onClick={() => this.addToCartHandler(T)}>ADD TO CART</button>
                            <button className='nav-content' onClick={() => this.removeFromCartHandler(T)}>REMOVE</button>
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