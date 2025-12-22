import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "About MEDCO & Accreditation",
    questions: [
      {
        question: "What is MEDCO?",
        answer: "MEDCO (Medical Reporting Organisation) is the official organisation that accredits medical experts who provide reports for personal injury claims involving soft tissue injuries from road traffic accidents. Since 2015, all medical reports for RTA soft tissue claims must come from a MEDCO-registered expert.",
      },
      {
        question: "Who can become MEDCO accredited?",
        answer: "A range of medical professionals can become MEDCO accredited, including GPs, hospital doctors, physiotherapists, osteopaths, and chiropractors. You must have appropriate qualifications and experience in your field, and complete the required MEDCO training.",
      },
      {
        question: "How long does it take to become MEDCO registered?",
        answer: "After completing our training course (typically 8-10 hours of self-paced learning), you can apply for MEDCO registration. The registration process itself usually takes 1-2 weeks, depending on MEDCO's processing times.",
      },
    ],
  },
  {
    title: "About Our Courses",
    questions: [
      {
        question: "Are the courses self-paced?",
        answer: "Yes, all our courses are completely self-paced. Once enrolled, you have lifetime access to the course materials and can study whenever it suits your schedule. There are no deadlines or fixed class times.",
      },
      {
        question: "What's included in the course price?",
        answer: "Your course fee includes full access to all course materials, video lessons, downloadable resources, practice exercises, and a certificate of completion. You also get access to any future updates we make to the course content.",
      },
      {
        question: "Is there a practical assessment?",
        answer: "Yes, our MEDCO Accreditation Training includes practical assessments where you'll practice writing medical reports. These are reviewed to ensure you meet the required standards before certification.",
      },
      {
        question: "Can I get a refund if the course isn't right for me?",
        answer: "We offer a 14-day money-back guarantee. If you're not satisfied with the course within 14 days of purchase, contact us for a full refund.",
      },
    ],
  },
  {
    title: "Payment & Booking",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) through our secure payment system powered by Stripe.",
      },
      {
        question: "Can I pay for my team or organisation?",
        answer: "Yes, we offer group bookings and can provide invoices for organisations. Please contact us directly at 0333 339 5773 to discuss group pricing and arrangements.",
      },
      {
        question: "When do I get access to the course?",
        answer: "Access is instant. As soon as your payment is confirmed, you'll receive an email with your login details and can start learning immediately.",
      },
    ],
  },
  {
    title: "Technical Requirements",
    questions: [
      {
        question: "What do I need to access the courses?",
        answer: "You just need a device with internet access (computer, tablet, or smartphone) and a modern web browser. Our courses work on all major browsers including Chrome, Firefox, Safari, and Edge.",
      },
      {
        question: "Can I access the course on mobile?",
        answer: "Yes, our learning platform is fully responsive and works on mobile devices. However, for the best experience, especially when completing practical exercises, we recommend using a tablet or computer.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about MEDCO accreditation, our courses, and the booking process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
