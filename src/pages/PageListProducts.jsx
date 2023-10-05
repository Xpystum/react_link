import ListProducts from "../components/ListProducts/ListProducts";

export default function PageListProducts(props){
    let state = props.state;

    return(
        <div>
            <ListProducts 
                state={state}
                onAddCountProduct={props.onAddCountProduct}
            />
        </div>
    )
}