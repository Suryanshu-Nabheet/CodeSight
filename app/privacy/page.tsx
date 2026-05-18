import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CodeSight — how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 26, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">1. Introduction</h2>
            <p>
              CodeSight (&quot;the Service&quot;), operated by Suryanshu Nabheet, is committed to protecting your privacy. We believe in complete transparency and maximum security. Our service is designed to be fully anonymous and local-first; we do not utilize database servers to save your credentials or track your sessions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">2. Information We Collect</h2>

            <h3 className="text-base font-medium text-foreground">2.1 Information You Provide</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Account Information:</strong> We do not require or offer account creation, passwords, or logins. You use the service completely anonymously.</li>
              <li><strong className="text-foreground">Repository URLs:</strong> The public GitHub repository URLs you submit for analysis.</li>
            </ul>

            <h3 className="text-base font-medium text-foreground">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">No IP Tracking:</strong> We do not store or track your IP address for rate-limiting or profiling.</li>
              <li><strong className="text-foreground">No Logging:</strong> We do not keep records of your analyzed repositories on any external database servers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">3. How We Use Your Information</h2>
            <p>We use the information you submit solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Analyze public repository code to generate AI-powered insights.</li>
              <li>Improve response efficiency using temporary server-side caching.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">4. Data Retention</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">No Account Data:</strong> Because there are no accounts, we retain zero user identity data.</li>
              <li><strong className="text-foreground">Repository Code:</strong> We do not store repository source code. Code is fetched in real-time from GitHub, processed for analysis, and immediately discarded.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">5. Data Sharing</h2>
            <p>We do not share or sell your data. However, to fulfill repository analysis requests:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">AI Providers:</strong> Repository code structures and file paths are sent to secure AI inference systems (via OpenRouter) to compile the analysis dashboard. No identity data is attached to these requests.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">6. Cookies &amp; Local Storage</h2>
            <p>
              We do not use tracking cookies. We may use standard browser local storage to save your preference selections (such as your preferred dark or light UI theme) directly on your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">7. Security</h2>
            <p>
              We implement industry-standard encryption protocols during all communications with GitHub and LLM API hosts to ensure your repository structures are analyzed securely.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">8. Your Rights</h2>
            <p>
              Since we store zero personal identifiers, user credentials, IP addresses, or historical search lists on any servers, there is no personal data to retrieve, restrict, correct, or delete.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of the Service constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please reach out to us at{" "}
              <a href="https://github.com/Suryanshu-Nabheet" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">
                Suryanshu Nabheet on GitHub
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
