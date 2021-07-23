import { contacts } from '../../data/contacts.js';

import './Contact.css';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contacts">
        {
          contacts.map((c, i) =>
            <div key={`contact-${i}`} className="contact-div">
              {
                c.email &&
                <a href={`mailto:${c.email}`}>
                  {c.icon}
                  <p>{c.text}</p>
                </a>
              }
              {
                c.link &&
                <a href={c.link} target="_blank" rel="noopener noreferrer">
                  {c.icon}
                  <p>{c.text}</p>
                </a>
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
