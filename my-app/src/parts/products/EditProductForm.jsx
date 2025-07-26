import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { productUpdated } from './productsSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const EditProductForm = () => {

    let params = useParams()
    const {productId} = params

    const product = useSelector((state)=>
    state.products.find((product)=> product.id === productId))

    const [name, setName] = useState(product.name)
    const [desc, setDesc] = useState(product.desc)
    const [price, setPrice] = useState(product.price)
    const [amount, setAmount] = useState(product.amount)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onNameChanged = (e) => 
    setName(e.target.value) 
const onDescChanged = (e) => 
    setDesc(e.target.value) 
const onPriceChanged = (e) => 
    setPrice(e.target.value) 
const onAmountChanged = (e) => 
    setAmount(e.target.value) 

const onSaveProductClick 
    = () => {if (name && desc && 
        price && amount) { 
        dispatch(
            productUpdated({
                id: productId,
                name,
                desc,
                price,
                amount
            })
        )

        navigate(`/products/${productId}`)
    }} 
return (
    <div>
        <h2>Edit Product</h2>
        <form>
    <p>
        <label htmlFor="productName">Name:</label>
        <input
            id="productName"
            name="productName"
            value={name}
            onChange={onNameChanged}
        />
    </p>
    <p>
    <label htmlFor="productDesc">Description:</label>
    <textarea
        id="productDesc"
        name="productDesc"
        value={desc}
        onChange={onDescChanged}
    />
    <p>
    <label htmlFor="productPrice">Price:</label>
    <textarea
        id="productPrice"
        name="productPrice"
        value={price}
        onChange={onPriceChanged}
    />
</p>
<p>
    <label htmlFor="productAmount">Amount:</label>
    <textarea
        id="productAmount"
        name="productAmount"
        value={amount}
        onChange={onAmountChanged}
    />
</p>
</p>
<button type="button" 
    onClick={onSaveProductClick}>save</button>
</form>
    </div>
)
}