import React from 'react';

const jsonData = {
  "@context":"https://schema.org",
  "@type":"Person",
  "address":{
  "@type":"PostalAddress",
  "addressLocality":"Araguaína",
  "addressRegion":"TO",
  "addressCountry":"BR"
  },
  "name":"Raimones Barros",
  "url":"https://raimones.vercel.app",
  "jobTitle":"Desenvolvedor Front-End",
  "image":"https://raimones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.b1a79cc5.png&w=640&q=75",
  "description":"Desenvolvedor Front-End. Autodidata com sólidos conhecimentos na área de desenvolvimento. HTML5, CSS3, JavaScript, ReactJS, Typescript, Git, GitHub e Figma.",
  "email":"mailto:raimonesrg3@gmail.com",
  "telephone":"https://api.whatsapp.com/send?phone=5563992304536"
}

const JsonLd: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonData),
      }}
    />
  );
};

export default JsonLd;