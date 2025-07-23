import { ProductsList } from '../parts/products/ProductsList'

function Root() {
	return (
		<div id="main">
			<div id="menu">
				<nav>
					<a>Products</a>
					<a>Sellers</a>
				</nav>
			</div>
			<div id="main_page">
				<h2>My Products App</h2>
				<hr></hr>
                <ProductsList />
			</div>
		</div>
	)
}

export default Root