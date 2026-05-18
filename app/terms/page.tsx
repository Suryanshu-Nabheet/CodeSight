import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for CodeSight — AI-powered GitHub repository analysis.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 26, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using CodeSight (&quot;the Service&quot;), operated by Suryanshu Nabheet, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">2. Description of Service</h2>
            <p>
              CodeSight is an AI-powered repository analysis tool that scans public GitHub repositories to provide structure diagrams, dependency graphs, security assessments, and code quality reviews. The Service is provided entirely free, anonymous, and local-first, and is delivered &quot;as is&quot; and &quot;as available&quot;.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">3. Account-Free Access</h2>
            <p>
              We believe in frictionless developer experiences. You do not need to sign up, sign in, or create an account to access our repository analysis suite. You use the service anonymously at all times.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use the Service to analyze private repositories without proper authorization.</li>
              <li>Slam or flood the service using bots, script automations, or denial-of-service tactics that overload server resources.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the Service&apos;s proprietary components.</li>
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">5. AI-Generated Content</h2>
            <p>
              Analysis results are generated dynamically by large language models and are provided for informational and educational purposes only. CodeSight does not guarantee the accuracy, completeness, or reliability of any AI-generated insights. You should independently verify any findings before adopting changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">6. Intellectual Property</h2>
            <p>
              The Service, including its design, logos, brand assets, and underlying code structure, is the property of Suryanshu Nabheet. You retain all rights to your repositories. We do not claim ownership, capture, or store any code analyzed through the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Suryanshu Nabheet shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">8. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">9. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
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
