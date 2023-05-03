import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [order, setOrder] = useState([0, 1, 2]);
    const [hasEntered, setHasEntered] = useState(false);

    const images = [
        require('./images/tcairem.jpeg'),
        require('./images/presentation.jpeg'),
        require('./images/mcasom.jpeg'),
    ];

    const handleMouseEnter = (img_index, z_index) => {
        if (z_index === 0) {
            setHasEntered(false);
        } else if (!hasEntered) {
            console.log("[ENTERED] " + img_index.toString() + " " + z_index.toString());
            const newOrder = [...order];
            const topCardIndex = newOrder[0];
            newOrder[newOrder.indexOf(img_index)] = topCardIndex;
            newOrder[0] = img_index;
            setOrder(newOrder);
            setHasEntered(true);
        }
    };

    const handleMouseLeave = (img_index, z_index) => {
        console.log("[LEFT] " + img_index.toString() + " " + z_index.toString());
        setHasEntered(false);
    };

    return (
        <div className="gradient-header">

            <div className="container header-mobile-flex">

                <div style={{ width: '45%' }}>

                    <div className="picture-cards">
                        {order.map((img_index, z_index) => (
                            <img
                                key={img_index}
                                src={images[img_index]}
                                alt={`card-${img_index}`}
                                className={`card card-${z_index}`}
                                onMouseEnter={() => handleMouseEnter(img_index, z_index)}
                                onMouseLeave={() => handleMouseLeave(z_index, z_index)}
                            />
                        ))}
                    </div>
                </div>

                <div style={{ width: '55%', textAlign: 'left' }}>


                    <h1 className='header-title-name'>Kevin T.</h1>

                    <div className='bio-text-view' >
                        <p className="bio-text">
                            I am an incoming medical student at the <b>Mayo Clinic Alix School of Medicine</b>.
                        </p>
                        <p className="bio-text">
                            I have interned at <b>Microsoft</b>, done research at <b>Stanford</b>, and am experienced in the intersection of <b>AI and Medicine</b>.
                        </p>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default NavBar;
