import React, { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'alehandro', id: 2 },
        {title: 'web dev top tips', body: 'lorem ipsum...', author: 'maria', id: 3 }
    ]);

    return ( 
       <BlogList blogs={blogs} title={"All Blogs"}/>
     );
}
 
export default Home;
