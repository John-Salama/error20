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
        "نشكرك على زيارة موقع ايرور 20. نحن نقدر خصوصيتك بشكل كبير. سياسة الخصوصية هذه توضح كيف أننا لا نجمع أي معلومات من المستخدمين.",
      sections: [
        {
          title: "عدم جمع المعلومات",
          content:
            "نحن لا نجمع أي معلومات شخصية أو بيانات من المستخدمين. لا نستخدم ملفات تعريف الارتباط (كوكيز) لتتبع المستخدمين أو تخزين أي معلومات شخصية.",
        },
        {
          title: "تقنيات التتبع",
          content:
            "موقعنا لا يستخدم أي تقنيات تتبع أو تحليلات تجمع البيانات الشخصية. نحن نحترم خصوصيتك بشكل كامل.",
        },
        {
          title: "مشاركة البيانات",
          content:
            "بما أننا لا نجمع أي معلومات، فلا توجد بيانات يمكن مشاركتها مع أطراف ثالثة.",
        },
        {
          title: "حقوقك",
          content:
            "نحن نؤمن بالحق في الخصوصية. إذا كانت لديك أي أسئلة حول ممارساتنا، يرجى التواصل معنا.",
        },
      ],
      contact: "للاستفسارات المتعلقة بسياسة الخصوصية، يمكنك التواصل معنا على:",
      email: "privacy@error20.org",
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: May 9, 2025",
      intro:
        "Thank you for visiting Error 20. We greatly value your privacy. This Privacy Policy explains that we do not collect any information from users.",
      sections: [
        {
          title: "No Information Collection",
          content:
            "We do not collect any personal information or data from users. We do not use cookies to track users or store any personal information.",
        },
        {
          title: "Tracking Technologies",
          content:
            "Our website does not use any tracking technologies or analytics that collect personal data. We fully respect your privacy.",
        },
        {
          title: "Data Sharing",
          content:
            "Since we do not collect any information, there is no data to share with third parties.",
        },
        {
          title: "Your Rights",
          content:
            "We believe in the right to privacy. If you have any questions about our practices, please contact us.",
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
