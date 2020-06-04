import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'

const Products = ({ products }) => {
    console.log('bundinhas', products)

    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our products" />
                <div className="row">
                    {products.edges.map(({ node }) => {
                        return <Product key={node.id} product={node} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products
