import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

const TabGroup = ({ tabs, activeTab, onChange }: TabGroupProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "px-4 py-2 rounded-2xl transition-all duration-300",
            activeTab === tab.id
              ? "bg-primary/20 backdrop-blur-sm text-primary font-medium border border-primary/30 shadow-md"
              : "bg-card/60 backdrop-blur-sm hover:bg-card/80 border border-border/50"
          )}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabGroup;
