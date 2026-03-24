import { PageHeader } from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Terms of Service | Magener Synergy',
  description: 'Terms and conditions governing the use of Magener Synergy services.',
};

export default function TermsPage() {
  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
      />

      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-12">
          <div className="bg-brand-charcoal border border-brand-border rounded-2xl p-8">
            <p className="text-brand-silver leading-relaxed">
              Last updated: {new Date().getFullYear()}. By accessing or using the services provided
              by Magener Synergy (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), you agree
              to be bound by these Terms of Service. If you do not agree with any part of these
              terms, please do not use our services.
            </p>
          </div>

          {[
            {
              title: '1. Services',
              body: `Magener Synergy provides travel consulting, visa assistance, study abroad guidance, tour packaging, corporate travel management, and hotel and flight booking services. The Company acts as an intermediary and consultant; we do not guarantee visa approvals as final decisions rest with the relevant embassy or consulate.`,
            },
            {
              title: '2. Consultation & Booking',
              body: `All consultations are subject to availability. Booking confirmations are only valid upon receipt of the required deposit or full payment as communicated by our team. Prices are subject to change and are confirmed at the time of booking.`,
            },
            {
              title: '3. Payments & Fees',
              body: `Payment terms are communicated on a per-service basis. Visa application fees paid to embassies are non-refundable regardless of the outcome. Service fees paid to Magener Synergy are subject to our refund policy detailed below.`,
            },
            {
              title: '4. Cancellations & Refunds',
              body: `Cancellation policies vary by service and supplier (airline, hotel, or tour operator). For visa services: if cancelled before document submission, a partial refund may be issued minus administrative fees. For tour packages: cancellations more than 30 days before departure may receive a 50% refund; within 30 days, cancellations are non-refundable unless otherwise specified in writing.`,
            },
            {
              title: '5. Visa & Travel Documents',
              body: `Clients are responsible for ensuring all personal information provided for visa applications is accurate and truthful. Magener Synergy shall not be held liable for visa rejections resulting from incomplete, inaccurate, or fraudulent information supplied by the client. It is the client's responsibility to ensure their passport and travel documents are valid for the duration of travel.`,
            },
            {
              title: '6. Limitation of Liability',
              body: `Magener Synergy shall not be liable for any losses, delays, injuries, or damages arising from circumstances beyond our control, including but not limited to: changes in embassy requirements, airline cancellations, force majeure events, or actions of third-party suppliers. Our maximum liability in any case shall not exceed the total fees paid to us for the specific service in question.`,
            },
            {
              title: '7. Intellectual Property',
              body: `All content on this website — including text, images, logos, and design — is the property of Magener Synergy and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.`,
            },
            {
              title: '8. Changes to Terms',
              body: `We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our services after such changes constitutes acceptance of the revised terms.`,
            },
            {
              title: '9. Governing Law',
              body: `These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be resolved through negotiation, and if unresolved, through arbitration in Abuja, Nigeria.`,
            },
            {
              title: '10. Contact',
              body: `For questions about these Terms, contact us at info@magenersynergy.org or Plot 242 Mohammadu Buhari Way, Central Business District, Abuja, Nigeria.`,
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
