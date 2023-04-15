import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm1() {
    const form = useRef(0);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_ro8gppe",
          "template_49mw2wl",
          form.current,
          "eCea-pB1SWg6TGqbv"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
    };
  
    return (
        <div class="uk-padding uk-container uk-text-center uk-grid">
            <h1>HelloWorld</h1>
        </div>
    );
  }
  
  export default ContactForm1;
