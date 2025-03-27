import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Milestones from "./components/sections/Milestones";
import Testimonials from "./components/sections/Testimonials";
import Resources from "./components/sections/Resources";
import Videos from "./components/sections/Videos";
import Sponsors from "./components/sections/Sponsors";
import Workshops from "./components/sections/Workshops";
import CTA from "./components/sections/CTA";

const App = () => {
  return (
    <Layout>
      <Analytics />
      <Hero />
      <Sponsors />
      <Milestones />
      <Testimonials />
      <Resources />
      <Videos />
      <Workshops />
      <CTA />
    </Layout>
  );
};

export default App;
