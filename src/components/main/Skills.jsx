import React from 'react';

import { motion } from 'framer-motion';

import maintenance from '../../assets/image/maintenance.png';
import working from '../../assets/image/working.png';
import shoppingCart from '../../assets/image/shoppingCart.png';
import vector from '../../assets/image/vector.png';

function Skills() {
    const image = [
        {
            id: 2,
            image: maintenance,
            title: 'Desarrollo-Web',
            parrafo: ' Realizamos desarrollo web a medida, altamente optimizado.',
        },
        {
            id: 1,
            image: working,
            title: 'Soporte',
            parrafo: 'Mantenimiento y actualizaciones de páginas web ya creadas.',
        },
        {
            id: 3,
            image: shoppingCart,
            title: 'E-commerce',
            parrafo: 'Creamos tu tienda online para potenciar tus ventas.',
        }
    ];

    return (
        <div id='skills'>
            <h2 className='title-major'>Mis servicios para tu empresa</h2>

            <p className='description-major'>Lo que mis clientes obtienen al contratarme.</p>

            <motion.div className='slider-container'>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 360, left: -347 }}>

                    {
                        image.map((imagen) => (
                            <motion.div key={imagen.id} className='item'>
                                <img src={imagen.image} alt={imagen.title} className='container-img' />
                                <div className='conteiner-title-description'>

                                    <h3 className='title-skills'>{imagen.title}</h3>
                                    <p className='parrafo-skills'>{imagen.parrafo}</p>
                                
                                    <button className='button-skills'> <a href="#contact"><span> Consultame </span></a> </button>
                                
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Skills