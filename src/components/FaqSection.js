// components/FaqSection.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/FaqSection.module.css';

const faqData = [
  {
    question: "What is my eligibility to book a car?",
    answer: "You should be 18 years old or above and you must possess a valid driving license.",
  },
  {
    question: "What documents do I need to provide?",
    answer: "You need to provide a valid driving license and an ID proof.",
  },
  {
    question: "Can I extend my booking?",
    answer: "Yes, you can extend your booking by contacting our support team.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellations made 24 hours before the booking time are free of charge.",
  },
  {
    question: "Do you offer insurance for the rental period?",
    answer: "Yes, we offer full coverage insurance during the rental period.",
  },
  {
    question: "What should I do in case of an accident?",
    answer: "Immediately contact our support team and local authorities for assistance.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <p className={styles.faqSection}>Frequently asked questions</p>
      <section className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className={styles.eligibility}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.ageGroup}>
                <p className={styles.bookCar}>{item.question}</p>
                {activeIndex === index && (
                  <p className={styles.license}>{item.answer}</p>
                )}
              </div>
              <div>
                <Image
                  src="/icons/cross.png"
                  alt="toggle"
                  width={24}
                  height={24}
                  className={activeIndex === index ? styles.rotated : ''}
                />
              </div>
            </div>
            {index < faqData.length - 1 && <hr />}
          </div>
        ))}
      </section>
    </div>
  );
}
