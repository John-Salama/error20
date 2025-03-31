import React, { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";

// Lazy load non-critical sections
const Sponsors = lazy(() => import("./components/sections/Sponsors"));
const Milestones = lazy(() => import("./components/sections/Milestones"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Resources = lazy(() => import("./components/sections/Resources"));
const Videos = lazy(() => import("./components/sections/Videos"));
const Workshops = lazy(() => import("./components/sections/Workshops"));
const CTA = lazy(() => import("./components/sections/CTA"));

// Simple loading component
const SectionLoader = () => (
  <div className="py-16 flex justify-center">
    <div className="w-16 h-16 border-4 border-purple-300 border-t-purple-700 rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <Layout>
      <Analytics />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Sponsors />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Milestones />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Resources />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Videos />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Workshops />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTA />
      </Suspense>
    </Layout>
  );
};

export default App;
