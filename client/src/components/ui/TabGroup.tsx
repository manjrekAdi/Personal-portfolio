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
            "px-4 py-2 rounded-md transition-colors",
            activeTab === tab.id
              ? "bg-primary/15 text-primary font-medium"
              : "hover:bg-card"
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
