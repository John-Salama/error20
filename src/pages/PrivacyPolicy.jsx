import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { useLanguage } from "../context/useLanguage";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  // Translated content
  const content = {
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: ٩ مايو ٢٠٢٥",
      intro:
        "نشكرك على زيارة موقع ايرور 20. نحن نأخذ خصوصيتك على محمل الجد. تصف سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها.",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          content:
            "نحن نجمع معلومات مثل اسمك وبريدك الإلكتروني عندما تتواصل معنا أو تشترك في النشرة الإخبارية. نستخدم ملفات تعريف الارتباط لتتبع تفاعلك مع موقعنا وتحسين تجربة المستخدم.",
        },
        {
          title: "كيف نستخدم معلوماتك",
          content:
            "نستخدم المعلومات التي نجمعها للتواصل معك، وتقديم المحتوى المطلوب، وتحسين خدماتنا. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، باستثناء ما تقتضيه القوانين.",
        },
        {
          title: "أمن البيانات",
          content:
            "نحن نتخذ تدابير أمنية لحماية معلوماتك. نستخدم تقنيات التشفير ونتبع أفضل الممارسات في المجال لضمان سرية بياناتك.",
        },
        {
          title: "حقوقك",
          content:
            "لديك الحق في الوصول إلى بياناتك الشخصية، وتصحيحها، وطلب حذفها. يمكنك أيضًا الاعتراض على معالجة بياناتك لأغراض تسويقية.",
        },
      ],
      contact: "للأسئلة المتعلقة بسياسة الخصوصية، يرجى التواصل معنا على:",
      email: "privacy@error20.org",
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: May 9, 2025",
      intro:
        "Thank you for visiting Error 20. We take your privacy seriously. This Privacy Policy describes how your information is collected and used.",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect information such as your name and email address when you contact us or subscribe to our newsletter. We use cookies to track your interaction with our site and improve user experience.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use the information we collect to communicate with you, provide requested content, and improve our services. We will not share your personal information with third parties without your consent, except as required by law.",
        },
        {
          title: "Data Security",
          content:
            "We take security measures to protect your information. We use encryption technologies and follow industry best practices to ensure your data remains confidential.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to access your personal data, correct it, and request deletion. You can also object to the processing of your data for marketing purposes.",
        },
      ],
      contact:
        "For questions regarding this privacy policy, please contact us at:",
      email: "privacy@error20.org",
    },
  }[language];

  return (
    <Layout>
      <div className="pt-28 pb-16 bg-purple-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-purple-700">
              {content.title}
            </h1>
            <p className="text-gray-500 mb-8">{content.lastUpdated}</p>

            <p className="text-lg mb-8">{content.intro}</p>

            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-3 text-purple-600">
                  {section.title}
                </h2>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}

            <div className="mt-12 p-6 bg-purple-50 rounded-lg">
              <p className="font-medium">{content.contact}</p>
              <a
                href={`mailto:${content.email}`}
                className="text-purple-700 font-bold hover:underline"
              >
                {content.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
