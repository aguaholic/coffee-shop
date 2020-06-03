import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

const Info = () => {
    return (
        <section className="py-5">
            <Title title="Our Story"></Title>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Sit ut aliquip aute sint ex dolor incididunt anim
                            labore dolore pariatur. Occaecat elit ex pariatur
                            elit do labore. Eu nulla sunt sint ipsum mollit. Et
                            amet laborum in elit nisi ad ad est cillum anim sit
                            amet veniam. Dolor ex dolore cupidatat incididunt
                            consequat laborum labore velit in proident voluptate
                            excepteur ut.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
