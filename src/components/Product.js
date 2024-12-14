import './Product.css'

const Product = ({ title }) => {
    const titleHandler = () => {
        console.log(title)
    }

    return <div className='product'>
        <div>{title}</div>
        <div>
            <button className='btn' onClick={titleHandler}>Click</button>
        </div>
    </div>
}


export default Product
