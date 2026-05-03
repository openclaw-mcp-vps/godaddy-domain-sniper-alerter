export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Domain Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Domain{" "}
          <span className="text-[#58a6ff]">Getting Sniped</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Add domains to your watchlist. We monitor WHOIS data around the clock and fire
          instant email or webhook alerts the moment a domain flips from available to registered.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $19/mo
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> WHOIS polling every 15 min
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> Email &amp; webhook alerts
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> Unlimited watchlist domains
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold">✓</span> Cancel anytime
          </li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited domain watchlist",
              "WHOIS checks every 15 minutes",
              "Instant email alerts",
              "Webhook / Slack notifications",
              "Dashboard with status history",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does the monitoring work?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              We query WHOIS records for every domain on your watchlist every 15 minutes. When a
              domain's registration status changes from available to registered, we immediately
              dispatch an alert via email and any configured webhooks.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Which TLDs are supported?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              We support all major TLDs including .com, .net, .org, .io, .co, .ai, and hundreds
              more. If a TLD has a publicly accessible WHOIS server, we can monitor it.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel at any time?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Yes. There are no long-term contracts. Cancel your subscription at any time from your
              billing dashboard and you won't be charged again.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Domain Sniper Alerter. All rights reserved.
      </footer>
    </main>
  );
}
