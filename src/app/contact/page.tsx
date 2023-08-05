'use client'

import React, { useState } from 'react';
import Header from '../Header/Header';

import styles from './contact.module.css';

const CONTACT_HEADER_IMAGES = [
  {
    imageAlt: 'goblin friend',
    imageSrc: '/images/goblin.gif',
  },
  {
    imageAlt: 'spinning globe',
    imageSrc: '/images/globe.gif',
  },
];

const CONTACT_HEADER_TEXT = 'CONTACT';

const CONTACT_FORM_INPUT_CLASS = 'bg-gray-200 text-black text-xl';

function Page() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitForm(event: React.FormEvent) {
    event.preventDefault();
    console.log('form data', formData)
  }

  return (
    <main>
      <Header
        headerImages={CONTACT_HEADER_IMAGES}
        headerText={CONTACT_HEADER_TEXT}
      />

      <div className={`grid content ${styles.contactContainer}`}>
        <form className="flex flex-col" onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={CONTACT_FORM_INPUT_CLASS}
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={CONTACT_FORM_INPUT_CLASS}
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            type="email"
          />

          <label htmlFor="message">Good Words</label>
          <textarea
            id="message"
            className={CONTACT_FORM_INPUT_CLASS}
            name="message"
            onChange={handleInputChange}
            style={{ resize: 'none' }}
            value={formData.message}
          />

          <button
            className={`items-center flex text-3xl h-16 justify-center mt-5 p-8 cursor-pointer ${styles.contactFormButton}`}
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>

        <p className="contact-text">
          Got some feedback? Wanna collab? Shoot me an email.
        </p>
      </div>
    </main>
  );
}

export default Page;
