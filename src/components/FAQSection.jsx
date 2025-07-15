import { FAQS_DATA } from "@/constant/contact";

import styles from "./FAQSection.module.scss";

const FAQSection = () => {
  return (
      <div className={styles.faqSection} data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {FAQS_DATA.map((faq, index) => (
            <div
              className={styles.faqItem}
              id={faq.question + index}
              key={faq.id}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default FAQSection