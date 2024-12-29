import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

import { Helmet } from "react-helmet";

const HeadComponent = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "TM Restaurants",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Restaurant St.",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "Country",
    },
    telephone: "+1-234-567-890",
    url: "https://tmrestaurants.vercel.app",
    image: "https://tmrestaurants.vercel.app/images/restaurant-image.jpg",
  };

  return (
    <Helmet>
      <title>TM Restaurants | Delicious Food Delivered to Your Door</title>
      <meta
        name="description"
        content="TM Restaurants offers delicious food delivered straight to your door. Explore our menu and place your order today!"
      />
      <meta
        name="keywords"
        content="restaurant, mosesrestaurants, tmrestaurants, food delivery, TM Restaurants, online ordering, food menu"
      />

      {/* Open Graph Meta Tags (for social media) */}
      <meta
        property="og:title"
        content="TM Restaurants | Delicious Food Delivered"
      />
      <meta
        property="og:description"
        content="Order food online from TM Restaurants. Delicious meals delivered to your door."
      />
      <meta
        property="og:image"
        content="https://tmrestaurants.vercel.app/images/restaurant-image.jpg"
      />
      <meta property="og:url" content="https://tmrestaurants.vercel.app" />

      {/* Twitter Card Meta Tags */}
      <meta
        name="twitter:title"
        content="TM Restaurants | Delicious Food Delivered"
      />
      <meta
        name="twitter:description"
        content="Order food online from TM Restaurants. Delicious meals delivered to your door."
      />
      <meta
        name="twitter:image"
        content="https://tmrestaurants.vercel.app/images/restaurant-image.jpg"
      />

      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

const App = () => (
  <div>
    <HeadComponent />
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

// google-site-verification=32OQRjLlPldA0AssuCwGxAw7I1Ixknpl5B36KZp9bI4
