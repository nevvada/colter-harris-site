'use client';

import axios from 'axios';
import React, { useState } from 'react';
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
    await axios.post('/api/email', { formData, gRecaptchaToken });
  }

  return (
    <main>
      <Header
        headerImages={CONTACT_PAGE.headerImages}
        headerText={CONTACT_PAGE.headerText}
      />

      <div className="grid content grid-rows-[auto_1fr] lg:gap-5 lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto]">
        <p className={styles.contactText}>
          got some feedback? wanna collab? shoot me an email.
        </p>

        <form
          className={`${styles.contactForm} flex flex-col`}
          onSubmit={handleSubmitForm}
        >
          <label htmlFor="name">name</label>
          <input
            id="name"
            className={CONTACT_FORM_INPUT_CLASS}
            dir="auto"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            type="text"
          />

          <label htmlFor="email">email</label>
          <input
            id="email"
            className={CONTACT_FORM_INPUT_CLASS}
            dir="auto"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            type="email"
          />

          <label htmlFor="message">good words</label>
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
            className="items-center flex text-3xl h-16 justify-center mt-5 p-8 cursor-pointer bg-[linear-gradient(#0b5563,#9198e5)] border-[10px] border-[#9198e5] hover:bg-[linear-gradient(#9198e5,#0b5563)] hover:border-[10px] hover:border-[#0b5563]"
            type="submit"
          >
            send message
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;
