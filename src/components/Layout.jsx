import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CustomCursor from './CustomCursor'

const Layout = ({ children }) => {
    return (
        <>

            
            <div className=''>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout