import React, { useState } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ['all', ...categories]
    return categories
}

const Menu = ({ items }) => {
    const [stateItems, setItems] = useState(items.edges)
    const [coffeeItems, setCoffeeItems] = useState(items.edges)
    const [categories, setCategories] = useState(getCategories(items.edges))

    const handleItems = category => {
        let tempItems = [...stateItems]
        if (category === 'all') {
            setCoffeeItems(tempItems)
        } else {
            let items = tempItems.filter(
                ({ node }) => node.category === category
            )
            setCoffeeItems(items)
        }
    }

    return (
        <>
            {stateItems.length > 0 ? (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu" />
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {categories.map((category, index) => {
                                    return (
                                        <button
                                            className="btn btn-yellow text-capitalize m-3"
                                            onClick={() => {
                                                handleItems(category)
                                            }}
                                            key={index}
                                            type="button"
                                        >
                                            {category}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="row">
                            {coffeeItems.map(({ node }) => {
                                return (
                                    <div
                                        key={node.id}
                                        className="col-11 col-md-6  my-3 d-flex mx-auto"
                                    >
                                        <div>
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">
                                                    <small>{node.title}</small>
                                                </h6>
                                                <h6 className="mb-0 text-yellow">
                                                    <small>${node.price}</small>
                                                </h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>
                                                    {
                                                        node.description
                                                            .description
                                                    }
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu" />
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>The are no to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Menu
