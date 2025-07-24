import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FunctionComponent, ReactNode } from "react";

interface TabItem {
  name: string;
  value: string;
}

interface TabContent {
  Content: ReactNode;
  value: string;
}

interface TabLayoutProps {
  tabClass?: string;
  defaultValue: string;
  tablistClass?: string;
  tabsTriggerClass?: string;
  tabtrigger: TabItem[];
  contentClass?: string;
  tabsContent: TabContent[];
  onTabChange?: (value: string) => void;
}

const TabLayout: FunctionComponent<TabLayoutProps> = ({
  tabClass,
  defaultValue,
  tablistClass,
  tabtrigger,
  tabsTriggerClass,
  contentClass,
  tabsContent,
  onTabChange,
}) => {
  return (
    <Tabs
      defaultValue={defaultValue}
      onValueChange={onTabChange}
      className={`flex h-full flex-col ${tabClass}`}
    >
      <TabsList className={`shrink-0 ${tablistClass}`}>
        {tabtrigger.map((item, index) => (
          <TabsTrigger
            value={item.value}
            key={index}
            className={tabsTriggerClass}
          >
            <div>{item.name}</div>
          </TabsTrigger>
        ))}
      </TabsList>

      <div
        className={`max-h-[calc(100vh-260px)] min-h-[calc(100vh-260px)] flex-grow overflow-y-auto !px-0 ${contentClass}`}
      >
        <div className="bg-gray sticky top-0 z-[1] h-[1.2px] w-full"></div>
        {tabsContent.map((item, index) => (
          <TabsContent key={index} value={item.value} className="mb-20 lg:px-5">
            {item.Content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default TabLayout;
