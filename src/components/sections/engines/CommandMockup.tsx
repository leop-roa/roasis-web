"use client";

import FadeIn from "@/components/ui/FadeIn";
import ChannelBars from "@/components/visuals/ChannelBars";

export default function CommandMockup() {
  return (
    <FadeIn delay={0.2}>
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <ChannelBars />
      </div>
    </FadeIn>
  );
}
