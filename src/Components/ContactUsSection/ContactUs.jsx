import React, { useState} from 'react';
import styles from './ContactUs.module.css';

export const ContactUs = () => {
 
    // Reset scroll position to top when main page component mounts
    window.scrollTo(0,3750);
 
  
  const [formData, setFormData] = useState({
    fname: '',
    femail: '',
    fphoneNo: '',
    fmessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          access_key: "67685a77-39c3-480c-bc07-5c7217ad098e" // Replace "your_access_key" with your actual access key
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          console.log("Form submitted successfully");
          // Optionally, reset form fields
          setFormData({
            fname: '',
            femail: '',
            fphoneNo: '',
            fmessage: ''
          });
        } else {
          console.error("Form submission failed:", data);
        }
      } else {
        console.error("Server responded with error:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className={styles.contactUs}>
      <h2 className={styles.section_title}>Contact Us</h2>
      <div className={styles.contact_container}>
        <form onSubmit={handleSubmit} className={styles.contactUs_details}>
          <div className={styles.contact_us_box}>
            <div className={styles.contactUs_Map}>
              <iframe
              title='Google Maps'
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.492927492744!2d79.8650189748099!3d6.951033093049227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258f261881111%3A0x4745dfca8ac0c20!2sJMJ%20Enterprise!5e0!3m2!1sen!2slk!4v1708289076501!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="origin"
              ></iframe>
            </div>
          </div>

          <div className={styles.contact_us_box}>
            <div className={styles.contactUs_Form}>
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />

              <label htmlFor="femail">Email</label>
              <input
                type="text"
                id="femail"
                name="femail"
                value={formData.femail}
                onChange={handleChange}
              />

              <label htmlFor="fphoneNo">Phone Number</label>
              <input
                type="text"
                id="fphoneNo"
                name="fphoneNo"
                value={formData.fphoneNo}
                onChange={handleChange}
              />

              <label htmlFor="fmessage">Message (optional)</label>
              <textarea
                id="fmessage"
                name="fmessage"
                value={formData.fmessage}
                onChange={handleChange}
              />

              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};