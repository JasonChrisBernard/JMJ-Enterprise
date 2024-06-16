import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from '../Products/Products.module.css';
import styles_d from './ProductDescription.module.css';


const getProductDetails = (productName) => {
    const productDetails = {
        "product_1":{
            name:"Cold Lamination (Clear Vinyl) - Gloss/Matt",
            images: ["../images/Cold _Lamination_(Clear Vinyl)-_Gloss_Matt.jpg","../images/Cold _Lamination_(Clear Vinyl)-_Gloss_Matt_2.jpg"],
            description : `Enhance and protect your prints with our cold lamination sheets, available in both gloss and matte finishes. The clear vinyl provides a sleek and professional look while safeguarding your prints from wear and tear.
            
            Available in sizes(ft)- 3,4`
            
        },

        "product_2":{
            name:"Fabric Flag Material (Synthetic)",
            images: ["../images/Fabric_fla_ material_(Synthetic).jpg"],
            description : `Our synthetic fabric flag material offers durability and vibrant color reproduction for your outdoor and indoor flag displays. With weather-resistant properties, these flags are ideal for advertising, events, and branding.

            Available sizes (ft)- 4,6`
            
        },

        "product_3":{
            name:"Flex Banner Sheets - Gloss Finish",
            images:["../images/Flex Banner sheets- gloss finish_2.jpg","../images/Flex Banner sheets- gloss finish.jpg"],
            description : `Make a bold statement with our gloss finish flex banner sheets. Perfect for outdoor signage, promotions, and events, these banners offer high visibility and vivid graphics to attract attention.

            Available in both Black Back and White Back (sizes in feet- 2,3,4,5,6,8,10)`
            
        },

        "product_4":{
            name:"Flex Banner Sheets - Matt Finish (Black Back)",
            images:["../images/Flex_Banner_sheets_matt_finish _(Black Back).jpg","../images/Flex_Banner_sheets_matt_finish _(Black Back)_2.jpg"] ,
            description : `Create eye-catching displays with our matt finish flex banner sheets featuring a black back. The matte surface reduces glare while the black backing ensures opacity, making them ideal for double-sided printing and indoor/outdoor applications. 

            Black Back (sizes in ft- 3,4,5,6,8,10)`
        },

        "product_5":{
            name:"Foam Board (Sun Board) - 8 by 4",
            images:["../images/Foam_Board_(Sun board)-8_by_4.jpg"],
            description : ` Our 8 by 4 foam boards, also known as sun boards, provide a sturdy and lightweight solution for mounting prints, signage, and presentations. The smooth surface ensures excellent print quality, making them perfect for exhibitions, displays, and presentations. 

            Available sizes (mm)- 2,3,4`
        },

        "product_6":{
            name:"Light Board Flex (Backlit)",
            images: ["../images/Light_board_flex_(Backlit).jpg"],
            description : `Illuminate your message with our backlit light board flex material. Designed for use in lightboxes and backlit displays, this material delivers vibrant colors and sharp graphics that stand out even in low-light environments.

            Available in sizes (ft)- 4,6,10`
        },

        "product_7":{
            name:"One Way Vision Sticker",
            images:["../images/One_Way_Vision_Sticker_2.jpg","../images/One_Way_Vision_Sticker.jpg"] ,
            description : `Achieve privacy without sacrificing visibility with our one-way vision stickers. Ideal for vehicle windows, storefronts, and glass partitions, these stickers allow one-way visibility from the inside while displaying your message clearly from the outside. 

            Available sizes (ft)- 4`
        },

        "product_8":{
            name:"Pull Up Stand (Roll Up Stand)",
            images:["../images/Pull_up_stand_(Roll up stand).jpg"],
            description : `Portable and easy to set up, our pull-up stands, also known as roll-up stands, are perfect for exhibitions, trade shows, and events. Featuring high-quality printing on durable materials, these stands offer a professional presentation for your branding and messaging.

            Standard Size`
        },

        "product_9":{
            name:"PVC Sticker (Vinyl) - Gloss/Matt Finish (SELF ADHESIVE VINYL)",
            images:["../images/PVC_Sticker_(Vinyl)_Gloss_Matt_Finish_(SELF_ADHESIVE_VINYL).jpg"],
            description : `Our self-adhesive PVC stickers are available in both gloss and matte finishes to suit your preferences. With strong adhesive properties and weather-resistant construction, these stickers are perfect for indoor and outdoor applications, including labeling, branding, and signage.

            Available sizes (ft)- 3,4 `
        },

        "product_10": {
            name: "X Banner Stand (Good Quality)",
            images: ["../images/X_Banner_stand_(Good_quality).jpg"],
            description: `Display your banners with stability and style using our good quality X banner stands.
            Lightweight and easy to assemble, these stands provide a sleek and professional presentation for your advertising and promotional materials.

            Available size- 5x2.5`
        }
    }

    return productDetails[productName];
}

export const ProductDescription = () => {
    const { productName } = useParams();
    const {name, images, description} = getProductDetails(productName);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Scroll to the top of the page when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    return(
        <div className={`${styles_d.product_d}`}>
            <div className={`${styles_d.product_imgDetails}`}>

                <div className={`${styles_d.product_id}`}>
                    <div className={`${styles_d.product_image}`}>
                    <img src={images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} className={`${styles.product_img}`} />
                        {images.length > 1 && (
                            <div className={`${styles.buttons}`}>
                                <button className={`${styles_d.prev} ${styles_d.arrow}`} onClick={prevSlide}><i className="ri-arrow-left-wide-line"></i></button>
                                <button className={`${styles_d.next} ${styles_d.arrow}`} onClick={nextSlide}><i className="ri-arrow-right-wide-line"></i></button>
                            </div>

                        )}

                        {images.length > 1 && (
                            <div className={`${styles_d.dots}`}>
                                <div className={`${styles_d.dot_1} ${currentImageIndex === 0 ? styles_d.active_dot : ''}`} onClick={prevSlide} ><i className="ri-circle-fill"></i></div>
                                <div className={`${styles_d.dot_2} ${currentImageIndex === 1 ? styles_d.active_dot : ''}`} onClick={nextSlide}><i className="ri-circle-fill"></i></div>
                            </div>

                        )}
                    </div>
                </div>

                <div className={`${styles_d.product_id}`}>
                    <div className={`${styles_d.product_title}`}>
                        <h2>{name}</h2> {/* Display the product name */}
                    </div>

                    <div className={`${styles_d.product_description}`}>
                        {description.split('\n').map((line, index) => (
                            <p key={index} style={{ margin: 1, textAlign:"center", padding: 2 }}>{line}</p>
                        ))}
                    </div>


                    <div className={`${styles_d.contact_us}`} >
                        <a href="/#contactUs" className={styles_d.button} >Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}