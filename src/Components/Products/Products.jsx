import styles from './Products.module.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Products = () => { 
      return( 
      <section className= {`${styles.shop} ${styles.container}`}>
      <h2 className= {`${styles.section_title}`}>Products</h2>
  
      <div className={styles.shop_content}>
      <Link to="/product-description/product_1">

          <div className={`${styles.product_box}`}>
            <div className={`${styles.product_box_img}`}>
              <img src='./images/Cold _Lamination_(Clear Vinyl)-_Gloss_Matt_2.jpg' alt="" className={`${styles.product_img}`} />
            </div>
    
            <div className={`${styles.product_box_title}`}>
              <h2 className={`${styles.product_title}`}>Cold Lamination (Clear Vinyl) - Gloss/Matt</h2>
            </div>
          </div>
        </Link>
  
        <Link to="/product-description/product_2">
          <div className={`${styles.product_box}`}>
            <div className={`${styles.product_box_img}`}>
              <img src='./images/Fabric_fla_ material_(Synthetic).jpg' alt="" className={`${styles.product_img}`}/>
            </div>
    
            <div className={`${styles.product_box_title}`}>
              <h2 className={`${styles.product_title}`}>Fabric flag material (Synthetic)</h2>
            </div> 
            
            
          </div>
        </Link>

        <Link to="/product-description/product_3">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
              <img src='./images/Flex Banner sheets- gloss finish_2.jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>Flex Banner sheets - gloss finish</h2>
              </div> 
            
            
          </div>
        </Link>

        <Link to="/product-description/product_4">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
              <img src='./images/Flex_Banner_sheets_matt_finish _(Black Back).jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>Flex Banner sheets - matt finish (Black Back)</h2>
              </div> 
            
            
          </div>
        </Link>

        <Link to="/product-description/product_5">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
                <img src='./images/Foam_Board_(Sun board)-8_by_4.jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>Foam Board (Sun board) - 8 by 4</h2>
              </div>
              
          </div>
        </Link>

        <Link to="/product-description/product_6">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
                <img src='./images/Light_board_flex_(Backlit).jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>Light board flex (Backlit)</h2>
              </div>
            
            
          </div>
        </Link>

        <Link to="/product-description/product_7">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
                <img src='./images/One_Way_Vision_Sticker_2.jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>One Way Vision Sticker</h2>
              </div>
            
          </div>
        </Link>

        <Link to="/product-description/product_8">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
                <img src='./images/Pull_up_stand_(Roll up stand).jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>Pull up stand (Roll up stand)</h2>
              </div>
            
            
          </div>
        </Link>

        <Link to="/product-description/product_9">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
                <img src='./images/PVC_Sticker_(Vinyl)_Gloss_Matt_Finish_(SELF_ADHESIVE_VINYL).jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
                <h2 className={`${styles.product_title}`}>PVC Sticker (Vinyl) - Gloss/Matt Finish(SELF ADHESIVE VINYL)</h2>
              </div>
          </div>
        </Link>
        <Link to="/product-description/product_10">
          <div className={`${styles.product_box}`}>
              <div className={`${styles.product_box_img}`}>
                <img src='./images/X_Banner_stand_(Good_quality).jpg' alt="" className={`${styles.product_img}`}/>
              </div>
    
              <div className={`${styles.product_box_title}`}>
              <h2 className={`${styles.product_title}`}>X Banner stand (Good quality)</h2>
              </div>
          </div>
        </Link>
        
      </div>
  
    </section>
  
      )
  }