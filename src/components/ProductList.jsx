import React,{useEffect} from 'react'
import axios from 'axios'
import {SetProducts} from '../redux/actions/productActions'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const products = useSelector((state)=>state.productReducers.products)
    const dispatch = useDispatch();
    const fetchProducts = async() =>{
        const response  = await axios.get('https://fakestoreapi.com/products')
                            .catch((err)=>{
                                console.log(err);
                            }) 
        dispatch(SetProducts(response.data));                   
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    console.log(products);
    return (
        <>
            <div className="container mt-5">
                <div className='row'>
                        {
                            products.map((element)=>{
                                const {id, image, title, price} = element;
                                return(
                                    <div className="col-md-3 text-center mt-5" key={id}>
                                        <Link to={`/product/${id}`} style={{textDecoration:'none',color:'black'}}>

                                            <div className="card mycard" style={{height:'420px'}} >
                                                <img src={image} className="card-img-top mx-auto" alt="..." style={{width:'200px',height:'250px'}}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <h1>{price} $</h1>
                                                </div>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                )
                            })
                        }
                      
                </div>
            </div>
        </>
    )
}

export default ProductList
