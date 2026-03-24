import { PageHeader } from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Privacy Policy | Magener Synergy',
  description: 'How Magener Synergy collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Read how we handle your information."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <div className="bg-brand-charcoal border border-brand-border rounded-2xl p-8">
            <p className="text-brand-silver leading-relaxed">
              Last updated: {new Date().getFullYear()}. This Privacy Policy describes how Magener
              Synergy (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, and shares
              information about you when you use our website and services.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              body: `We collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with us via chat. This may include your name, email address, phone number, and the nature of your travel or study inquiry. We may also collect information automatically when you visit our website, including your IP address, browser type, pages visited, and the date and time of your visit.`,
            },
            {
              title: '2. How We Use Your Information',
              body: `We use the information we collect to: process and respond to your enquiries and consultation requests; provide travel, visa, and study abroad services; send you relevant updates, travel tips, and promotional content (with your consent); improve our website and services; and comply with legal obligations. We do not sell your personal information to third parties.`,
            },
            {
              title: '3. Information Sharing',
              body: `We may share your information with trusted service providers who assist us in operating our website and delivering our services (such as booking platforms, embassy appointment systems, and communication tools). These providers are contractually obligated to keep your information confidential. We may also disclose information if required by law or to protect the rights, property, or safety of Magener Synergy, our clients, or others.`,
            },
            {
              title: '4. Data Retention',
              body: `We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. For enquiry data, we typically retain records for up to 3 years after our last interaction with you.`,
            },
            {
              title: '5. Your Rights',
              body: `You have the right to access, correct, or request deletion of your personal information at any time. To exercise these rights, please contact us at info@magenersynergy.org. We will respond to your request within 30 days. If you are located in a jurisdiction with data protection laws (such as GDPR), you may also have additional rights including data portability and the right to object to processing.`,
            },
            {
              title: '6. Cookies',
              body: `Our website uses cookies to enhance your browsing experience and analyse site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our website may not function properly.`,
            },
            {
              title: '7. Contact Us',
              body: `If you have questions about this Privacy Policy or how we handle your information, please contact us at: info@magenersynergy.org or Plot 242 Mohammadu Buhari Way, Central Business District, Abuja, Nigeria.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-display text-brand-white mb-4">{section.title}</h2>
              <p className="text-brand-silver leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
