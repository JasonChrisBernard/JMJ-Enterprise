// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './AboutUs.module.css'

export const AboutUs = ( ) => {
  return (
      <div className={`${styles.about} ${styles.section}`}>
        <div className={`${styles.about_container} ${styles.container} ${styles.grid}`}>

          <div className={`${styles.about_data}`}>
            <h2 className={`${styles.about_title}`}>
              About Us
            </h2>

            <div className={`${styles.about_columns}`}>
              {[
                {
                  src: './images/1.png',
                  title: 'Comprehensive Range of Printing Materials',
                  description: 'JMJ Enterprise specializes in providing high-quality printing materials such as flex banners, stickers, lamination film, and more. Our extensive product range caters to various industries and businesses, ensuring diverse solutions for all printing needs.'
                },
                {
                  src: './images/2.png',
                  title: 'Commitment to Quality and Reliability',
                  description: 'With years of industry experience, we prioritize customer satisfaction and reliability. Our commitment to sourcing the finest materials guarantees products of superior quality and durability for our clients.'
                },
                {
                  src: './images/3.png',
                  title: 'Efficient and Responsive Customer Service',
                  description: 'At JMJ Enterprise, we value efficiency and responsive service. Whether you\'re a small business or a large corporation, we strive to meet your printing material needs promptly and effectively.'
                },
                {
                  src: './images/4.png',
                  title: 'Keeping Pace with Technological Advancements',
                  description: 'We stay ahead of the curve by continually updating our product offerings and integrating the latest printing technologies. This ensures that our customers have access to innovative materials that enhance their printing projects.'
                },
                {
                  src: './images/5.png',
                  title: 'Expert Guidance and Personalized Solutions',
                  description: 'Beyond offering top-notch products, our team provides expert guidance and personalized solutions to help clients make informed decisions. We understand your unique requirements and offer tailored recommendations to suit your needs and budget.'
                },
                {
                  src: './images/6.png',
                  title: 'Trusted Partner for Printing Needs',
                  description: 'As a trusted importer and seller, JMJ Enterprise takes pride in being a reliable partner for businesses seeking to enhance their printing capabilities. Count on us for quality products, exceptional service, and competitive prices.'
                }
              ].map((item, index) => (
                  <div key={index} className={`${styles.about_box}`}>
                    <div className={`${styles.circular_icons}`}>
                      <img src={item.src} alt="" className={`${styles.about_img}`} />
                    </div>

                    <div className={`${styles.about_details}`}>
                      <div className={`${styles.about_sub_topics}`}>
                        {item.title}
                      </div>
                      <div className={`${styles.about_paragraph}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
