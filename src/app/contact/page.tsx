'use client';

import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Header from '../Header/Header';

import { CONTACT_PAGE } from '../routeConfig';

import styles from './contact.module.css';

const CONTACT_FORM_INPUT_CLASS = 'bg-gray-200 text-black text-xl';

function ContactPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();

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

  async function handleSubmitForm(event: React.FormEvent) {
    event.preventDefault();

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not available yet');

      return;
    }

    const gRecaptchaToken = await executeRecaptcha('formSubmit');
    await submitForm(gRecaptchaToken);
  }

  async function submitForm(gRecaptchaToken: string) {
    const response = await axios.post('/api/email', { formData, gRecaptchaToken });

    console.log('~~~~~resyyyy`~~', response);
  }

  return (
    <main>
      <Header
        headerImages={CONTACT_PAGE.headerImages}
        headerText={CONTACT_PAGE.headerText}
      />

      <div className={`grid content ${styles.contactContainer}`}>
        <form className="flex flex-col" onSubmit={handleSubmitForm}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={CONTACT_FORM_INPUT_CLASS}
            dir="auto"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={CONTACT_FORM_INPUT_CLASS}
            dir="auto"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            type="email"
          />

          <label htmlFor="message">Good Words</label>
          <textarea
            id="message"
            className={CONTACT_FORM_INPUT_CLASS}
            dir="auto"
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

export default ContactPage;
