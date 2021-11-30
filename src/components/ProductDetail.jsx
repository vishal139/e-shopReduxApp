import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { SelectedProduct,removeSelectedProduct } from '../redux/actions/productActions'
const ProductDetail = () => {
    const {productId} = useParams();
    const product = useSelector(state => state.selectedProducetReducer)
    const {title, image, description, price, category} = product;
    const dispatch = useDispatch()
    console.log(product);

    const fetchProductDetail = async(productId) =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                        .catch((err)=>{
                            console.log(err);
                        })
        dispatch(SelectedProduct(response.data));
    }

    useEffect(()=>{
        if(productId && productId!=='')
        {
            fetchProductDetail(productId);
        }
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId])

    return (
        <>
            <div className="container" style={{marginTop:'100px'}}>
                <div className="col-md-8 text-center mx-auto mt-5">
                    <div className="card mb-3 " style={{height:'600px'}}>
                        <div className="row">

                            <div className="col-md-4 flex justify">
                                <img src={image} className="img-fluid rounded-start mx-auto " alt="..." style={{height:'400px',marginTop:'80px'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className='card-title mt-5'>{category}</h1>
                                    <h4 className="card-title mt-5">{title}</h4>
                                    <p className="card-text mt-3">{description}</p>
                                    <h1 className='card-title mt-3'>{price} $</h1>
                                    <div className='d-flex justify-content-around mt-5'>   
                                        <button type="button" className="btn btn-primary btn-md ">Order Now</button>
                                        <button type="button" className="btn btn-secondary btn-md">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail
