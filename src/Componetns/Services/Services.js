import React from 'react';
import CartImage2 from '../../images/pexels-janko-ferlic-1083502.jpg';
import CartImage1 from '../../images/pexels-mike-198162.jpg';
import CartImage3 from '../../images/pexels-pixabay-39857.jpg';
import Cart from '../Cart/Cart';
const Services = () => {
    return (
        <div>
            <div className='text-center d-md-flex justify-content-around mt-5'>
            
            <Cart cartImage={CartImage2} title={'Thankful Soul'}></Cart>
            <Cart cartImage={CartImage1} title={'Kickin With Mon'}></Cart>
            <Cart cartImage={CartImage3} title={'On the Prowl'}></Cart>
            
        </div>
        </div>
    );
};

export default Services;