import { useState } from 'react'




export const NewProductForm = () => {
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState(0)
	const [amount, setAmount] = useState(0)




    const onNameChanged = (e) => 
	setName(e.target.value) 
const onDescChanged = (e) => 
	setDesc(e.target.value) 
const onPriceChanged = (e) => 
	setPrice(e.target.value) 
const onAmountChanged = (e) => 
	setAmount(e.target.value) 

return (
	<div>
		<h2>Add a New Product</h2>
		<form>
		</form>
	</div>
)
}