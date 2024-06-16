import React from "react";
import styles from "./Splash.module.css";

export const Splash = () => {
    return (
      <div>
          {/* Splash Section Background Image */}
          <div className={styles.homewall}>
              <div className={styles.homeBg_img}></div>

              {/* Home Page Description */}
              <div className={styles.description}>
                  <div className={styles.home_title}>
                      <h1>JMJ ENTERPRISE</h1>
                  </div>

                  <div className={styles.content}>
                      <span>IMPORTERS OF ALL KINDS OF PRINTING MATERIAL</span>
                      <p>All kinds of flex banner sheet, Self Adhesive Stickers, Lamination Film, Roll Up Stand, X Banner stand, Corrugated Board and Foam Board</p>
                  </div>
              </div>
          </div>
      </div>
    )
}





