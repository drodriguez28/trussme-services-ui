import React, { useEffect } from 'react';
import { ContactCard } from "../reuse/ContactCard";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto mt-10 px-2 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-white text-lg">Get in touch with us today for your service needs</p>
      </div>

      {/* Responsive Grid - 1 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 gap-8 md:gap-12 mb-16">
        <div className="flex items-center justify-center">
          <ContactCard pageName="Contact Us Page"/>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
