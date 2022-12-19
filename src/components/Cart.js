import { Button, Container, Table, Image} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart () {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch()

    const totalPrice = cart.reduce((acc, product)=>{
        
        acc += product.price * product.quantity
        
        return acc;
    },0)

    console.log(totalPrice);
    return (
        <Container className="py-5">
            <h1 className="py-5">Welcom To Cart...</h1>
            <Button variant="primary" className="mb-3" onClick={()=>dispatch(clear())}>Clear Cart</Button>
            <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>image</th>
                    <th>Price</th>
                    <th>Quatity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product)=> (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td><Image style={{height:"100px",width:"100px"}} alt={product.title} src={product.image}></Image></td>
                    <td>{product.price}$</td>
                    <td>{product.quantity}</td>
                    <td><Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button></td>
                </tr>
                ))}
                <tr>
                    <th colSpan={2}>Products Count: {cart.length}</th>
                    <th colSpan={3}>Total Price: {totalPrice.toFixed(2)} $</th>
                </tr>
            </tbody>
            </Table>
            {cart.length > 0?  null : <h1 className="text-center">Your Cart is Empty</h1> }
        </Container>
    )
}

export default Cart;