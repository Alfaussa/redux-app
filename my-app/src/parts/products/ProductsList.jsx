import { useSelector } from 'react-redux'
import { NewProductForm } from './NewProductForm'
import { Link } from 'react-router-dom'

export const ProductsList = () => {
	const products = useSelector((state) => state.products)
    const dispProducts = products.map((product) => (
	<div key={product.id} className="product-excerpt">
		<h3>{product.name}</h3>
		<p>{product.desc.substring(0, 100)}</p>
		<Link to={`/products/${product.id}`} className="link-btn">
			view
		</Link>
	</div>
))

return (
	<div>
        <NewProductForm/>
        <div>
		<h2>Products</h2>
		{dispProducts}
        </div>
	</div>
)
}