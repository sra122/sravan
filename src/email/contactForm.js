import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef(0);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_cmhxzae",
          "template_b9u2v4s",
          form.current,
          "eCea-pB1SWg6TGqbv"
        )
        .then(
          (result) => {
            console.log(result.text);
            document.location.href="/";
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
    };
  
    return (
        <div class="uk-padding uk-container uk-text-center uk-grid uk-align-center uk-width-2-3@s">
            <form class="uk-form-horizontal uk-margin-large" ref={form} onSubmit={sendEmail}>

                <div class="uk-margin">
                    <label class="uk-form-label" for="for_name">Name</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" name='for_name' id="form-horizontal-text for_name" type="text" placeholder="Name..."  required/>
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="email">Email</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" name="email" id="form-horizontal-text email" type="text" placeholder="Email..." required/>
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="email_body">Message</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea" name="message" id="form-horizontal-text email_body" type="text" rows="5" cols="40" required></textarea>
                    </div>
                </div>


                <div class="uk-margin">
                    <div class="uk-form-controls">
                        <button type="submit" class="uk-button uk-button-primary uk-border-pill">Submit</button>
                    </div>
                </div>
            <br></br><br></br>
            </form>
        </div>
    );
  }
  
  export default ContactForm;
