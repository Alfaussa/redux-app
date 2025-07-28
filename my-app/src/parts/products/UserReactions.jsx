

const reactionObj = {
	good: '+',
	soso: '+/-',
	bad: '-',
}

export const UserReactions = ({ product 
	}) => {
        const userReactions = Object.entries(reactionObj).map(([name, 
	image]) => { 
	return (
		<button key={name} type="button" 
			className="reaction-button"> 
			{image} {product.reactions[name]}
		</button>
	)
})
return <div>{userReactions}</div>
    } 