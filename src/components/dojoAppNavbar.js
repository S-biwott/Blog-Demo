import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/"> Home </a> 
                <a href="/create" 
                // style={{
                //     color: "white",
                //     backgroundColor: 'red',
                //     borderRadius: '8px'
                // }}
                > New Blog </a>
            </div>
        </nav>
     );
}
 
export default Navbar;
