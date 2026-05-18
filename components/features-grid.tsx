"use client";

import { Box, Lock, Search, Settings, Sparkles, Workflow, Shield, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function FeaturesGrid() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider jetbrains-mono">
            <Sparkles className="size-3.5" />
            Core Capabilities
          </div>
          <h2 className="instrument-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight">
            Intelligent Code Insights, <span className="text-primary italic">instantly</span>.
          </h2>
          <p className="text-muted-foreground jetbrains-mono text-sm sm:text-base max-w-2xl leading-relaxed">
            See your codebase structure, architecture diagrams, technical debt, and vulnerabilities in crystal-clear detail.
          </p>
        </div>

        {/* Glowing Grid Layout */}
        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Sparkles className="h-4 w-4 text-primary" />}
            title="AI-Powered Code Intelligence"
            description="Understand any codebase in seconds. CodeSight leverages next-generation LLM reasoners to explain architecture patterns and code quality insights."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Workflow className="h-4 w-4 text-primary" />}
            title="Visual Data Flow Mapping"
            description="Automatically generate structured, interactive component and data flow diagrams directly from your repository imports to visualize how elements connect."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Shield className="h-4 w-4 text-primary" />}
            title="Deep Security Shield"
            description="Scan public repositories for structural weaknesses, dependency issues, and security vulnerabilities before they can impact production environments."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Settings className="h-4 w-4 text-primary" />}
            title="Refactoring & Optimization"
            description="Receive clear, step-by-step refactoring proposals and automated actions to reduce technical debt, clean up nested conditions, and boost performance."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Zap className="h-4 w-4 text-primary" />}
            title="Lightning-Fast Caching"
            description="Get instant analysis results powered by state-of-the-art server-side caching systems, avoiding duplicate analysis requests and saving precious API usage."
          />
        </ul>

      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-primary/10 bg-muted/20 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-background/50 backdrop-blur-md p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#09090b]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-primary/20 bg-primary/5 p-2.5">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="instrument-serif text-2xl font-normal text-foreground">
                {title}
              </h3>
              <p className="jetbrains-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
