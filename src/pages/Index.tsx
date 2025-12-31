import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import MainPage from "@/components/MainPage";
import NoPage from "@/components/NoPage";
import WelcomePage from "@/components/WelcomePage";
import RosePage from "@/components/RosePage";
import SurprisePage from "@/components/SurprisePage";

type PageState = "main" | "no" | "welcome" | "rose" | "surprise";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("main");

  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return (
          <MainPage
            onYes={() => setCurrentPage("welcome")}
            onNo={() => setCurrentPage("no")}
          />
        );
      case "no":
        return <NoPage onBack={() => setCurrentPage("main")} />;
      case "welcome":
        return <WelcomePage onMoveForward={() => setCurrentPage("rose")} />;
      case "rose":
        return <RosePage onOpenSurprise={() => setCurrentPage("surprise")} />;
      case "surprise":
        return <SurprisePage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      {renderPage()}
    </div>
  );
};

export default Index;
