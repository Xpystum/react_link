import { useState } from 'react';

import Product from "../Product/Product";
import styles from "./ListProducts.module.scss";
import Cart from '../Cart/Cart';

export default function ListProducts(props){

    let [addProductCart, setAddProductCart] = useState();

    let state = props.state;
    
    const results = [];

    function onAddProductCart(id_product, id_characteristic){
        console.log(id_product + " "+ id_characteristic);

        setAddProductCart({
            'id_product': id_product,
            count: 2,
            'id_characteristic': id_characteristic,
        })
    }

    return (
        <div className={styles.ListProducts}>

            <Cart 
                state={state} 
                onAddCountProduct={props.onAddCountProduct}
            />

            <div className="container">
                <div className="row mb--n30">
                    
                    {
                        state.products.map((product)=>
                            <Product key={product.id} product={product} onAddProductCart={onAddProductCart}/>
                        )
                    }

                </div>
            </div>
            
            
        </div>
    );
}