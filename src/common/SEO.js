import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Wattle | Your MemExperts</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Wattle, A Digital Agency In Bristol" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;