import React from 'react'
import BGImage from 'gatsby-background-image'

const BGSection = ({ img, styleClass, title, children }) => {
    return (
        <BGImage fluid={img} className={styleClass}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BGImage>
    )
}

BGSection.defaultProps = {
    title: 'Default Title',
    styleClass: 'default-background',
}

export default BGSection
