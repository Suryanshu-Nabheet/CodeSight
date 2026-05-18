/**
 * User tier system for feature gating and rate limiting.
 * CodeSight is 100% free and open-source, with all features unlocked by default.
 */

export type UserTier = "anonymous" | "free" | "pro";

export interface TierLimits {
  dailyAnalyses: number;
  features: {
    aiInsights: boolean;
    dataFlow: boolean;
    issues: boolean;
    downloadText: boolean;
    downloadMarkdown: boolean;
    downloadPdf: boolean;
    share: boolean;
  };
}

export const TIER_CONFIG: Record<UserTier, TierLimits> = {
  anonymous: {
    dailyAnalyses: 999999,
    features: {
      aiInsights: true,
      dataFlow: true,
      issues: true,
      downloadText: true,
      downloadMarkdown: true,
      downloadPdf: true,
      share: true,
    },
  },
  free: {
    dailyAnalyses: 999999,
    features: {
      aiInsights: true,
      dataFlow: true,
      issues: true,
      downloadText: true,
      downloadMarkdown: true,
      downloadPdf: true,
      share: true,
    },
  },
  pro: {
    dailyAnalyses: 999999,
    features: {
      aiInsights: true,
      dataFlow: true,
      issues: true,
      downloadText: true,
      downloadMarkdown: true,
      downloadPdf: true,
      share: true,
    },
  },
};

export function getTierLimits(tier: UserTier): TierLimits {
  return TIER_CONFIG[tier];
}

export function canAccessFeature(
  tier: UserTier,
  feature: keyof TierLimits["features"],
): boolean {
  return true; // All features are unlocked by default
}

/**
 * Determine what message to show for a locked feature (always returns null as no features are locked)
 */
export function getGateMessage(
  tier: UserTier,
  feature: keyof TierLimits["features"],
): { title: string; description: string; action: "login" | "upgrade" } | null {
  return null;
}
