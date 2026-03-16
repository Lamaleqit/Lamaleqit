import { ArrowRight, ShieldCheck, Users, FileCheck2 } from "lucide-react";
import { GlowingEffectDemo } from "@/components/landing/glowing-effect-demo";
import { HeroScrollDemo } from "@/components/landing/hero-scroll-demo";

const testimonials = [
  {
    quote:
      "I unlocked premium in 6 days. The referral progress and terms were very clear.",
    name: "Nora F., Startup Founder"
  },
  {
    quote:
      "Finally a legal platform with transparent rewards and zero upfront risk.",
    name: "Daniel R., Operations Lead"
  },
  {
    quote: "The referral model feels fair and the premium tools are genuinely useful.",
    name: "Priya S., Consultant"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
          <div className="text-lg font-extrabold">Fake<span className="text-blue-600">.legal</span></div>
          <a
            href="#final-cta"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="mx-auto w-[92%] max-w-6xl">
        <HeroScrollDemo />
        <div className="-mt-20 flex flex-wrap gap-3 pb-16 md:-mt-24">
          <TrustPill icon={<ShieldCheck className="h-4 w-4" />} text="Secure platform" />
          <TrustPill icon={<Users className="h-4 w-4" />} text="12,000+ trusted users" />
          <TrustPill icon={<FileCheck2 className="h-4 w-4" />} text="Verified legal content" />
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-6xl py-10 md:py-16">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["01", "Join for Free", "Create your account and receive your referral dashboard instantly."],
            ["02", "Recommend the Paid Plan", "Share your link and refer teams that need premium legal workflows."],
            ["03", "Unlock Premium Access", "As referrals convert, premium access is activated at no cost."]
          ].map((step) => (
            <article key={step[0]} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-blue-600">{step[0]}</p>
              <h3 className="mt-2 text-xl font-semibold">{step[1]}</h3>
              <p className="mt-2 text-slate-600">{step[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-6xl py-10 md:py-16">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Why users love Fake.legal</h2>
        <GlowingEffectDemo />
      </section>

      <section className="mx-auto grid w-[92%] max-w-6xl gap-6 py-12 md:grid-cols-2 md:py-16">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold">1 referral away from Premium</h3>
          <p className="mt-2 text-slate-600">Track your rewards in real time.</p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-blue-100">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
          </div>
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20">
            Invite Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <cite className="mt-2 block text-sm not-italic font-semibold text-slate-500">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-6xl py-10 md:py-16">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["How are referrals counted?", "A referral counts when a new customer signs up via your unique link and completes payment."],
            ["When does premium activate?", "Premium activates automatically after your threshold is reached and verified."],
            ["What does the paid service include?", "Advanced legal tools, premium templates, and priority support."],
            ["Any eligibility limits?", "Eligibility can vary by region and policy compliance. Full terms are visible in-app."]
          ].map((faq) => (
            <article key={faq[0]} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{faq[0]}</h3>
              <p className="mt-2 text-slate-600">{faq[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="final-cta" className="mx-auto w-[92%] max-w-6xl py-16 text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">Start Earning Premium Access Today</h2>
        <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-500/25">
          Get Started Free
        </button>
        <p className="mt-2 text-slate-500">No credit card required</p>
      </section>
    </main>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
      <span className="text-blue-600">{icon}</span>
      {text}
    </span>
  );
}
