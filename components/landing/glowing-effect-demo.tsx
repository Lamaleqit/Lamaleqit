"use client";

import { BadgeCheck, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<BadgeCheck className="h-4 w-4 text-blue-700" />}
        title="Premium legal tools without upfront cost"
        description="Start free and unlock advanced legal templates and workflows via referrals."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-blue-700" />}
        title="Simple referral tracking"
        description="Monitor clicks, signups, and unlock milestones from one dashboard."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-blue-700" />}
        title="Verified legal content"
        description="All premium content is reviewed and structured for practical use."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-blue-700" />}
        title="Fast reward unlocks"
        description="Most users unlock premium with only a few successful referrals."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-blue-700" />}
        title="Transparent terms"
        description="No hidden clauses—eligibility and limits are always visible."
      />
    </ul>
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
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border border-blue-200/70 bg-white/90 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-blue-100 bg-white p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-blue-100 bg-blue-50 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="text-balance pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.02em] text-slate-900 md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <p className="text-sm leading-[1.3rem] text-slate-600 md:text-base">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
