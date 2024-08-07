import { useState } from "react";
import Button from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import WayToTeach from "./components/WayToTeach";
import { ways, differences } from "./data";
import { TeachingSection } from "./components/TeachingSection";
import { DifferencesSection } from "./components/DifferencesSection";
import { IntroSection } from "./components/introSection";
import { TabsSection } from "./components/TabsSection";
import { FeedbackSection } from "./components/FeedbackSection";
import { EffectsSection } from "./components/EffectsSection";

export default function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header />

      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectsSection />}
      </main>
    </>
  );
}
