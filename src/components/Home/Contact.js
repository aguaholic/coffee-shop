import React from 'react'
import Title from '../Globals/Title'

const Contact = () => {
    return (
        <section className="contact py-5">
            <Title title="row" />
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
                <form action="https://formspree.io/xqkyqdea" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Smith"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email@email.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            className="form-control"
                            rows="5"
                            placeholder="Your decription goes here"
                        />
                    </div>
                    <button
                        className="btn btn-yellow btn-block text-capitalize mt-5"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
