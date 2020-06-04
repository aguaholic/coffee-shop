import React, { useState } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const Menu = ({ items }) => {
    const [stateItems, setItems] = useState(items.edges)
    const [coffeeItems, setCoffeeItems] = useState(items.edges)

    return (
        <>
            {stateItems.length > 0 ? (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu" />
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
                                                    {node.title}
                                                </h6>
                                                <h6 className="mb-0">
                                                    ${node.price}
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
