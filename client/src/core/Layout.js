import React, { Fragment } from 'react'

const Layout = ({ childern }) => {
    return (
        <Fragment>
            <p>
                This is navbar
            </p>
            <div className="container">
                {childern}
            </div>
        </Fragment>
    )
}

export default Layout;