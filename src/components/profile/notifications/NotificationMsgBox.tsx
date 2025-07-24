import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import TabContent from "./TabContent";
import { notificationsTab } from "@/components/helper/ProfileHelper";

function NotificationMsgBox() {
  return (
    <div className="h-full w-full rounded-[20px] min-[1024px]:py-5 min-[1440px]:!mr-0 min-[1700px]:py-[30px] lg:border lg:border-[#d9d9d9] lg:bg-[#f9f9f9] xl:mr-5">
      <div className="flex h-full w-full">
        <div className="h-full w-full">
          <Tabs className="h-full w-full bg-transparent" defaultValue="1">
            <div className="flex h-full gap-4">
              <div className="ml-5 hidden h-full w-full max-w-[379px] min-w-[300px] overflow-hidden rounded-[20px] bg-white min-[1470px]:block">
                <div className="sticky top-0 flex items-center justify-between gap-5 border-b-[1px] border-[#e4e7eb] px-4 py-3 min-[1400px]:px-5 min-[1400px]:py-4 min-[1700px]:px-8 min-[1700px]:py-6">
                  <h3 className="text-xl font-medium text-[#222527]">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-[60vh] min-h-[300px] overflow-y-auto">
                  {notificationsTab.map((item, index) => (
                    <div key={index}>
                      <TabsList className={`${item.listClass}`}>
                        {item.triggerValue.map((items, i) => (
                          <TabsTrigger
                            className="w-full text-start"
                            key={i}
                            value={items.triggerValue}
                          >
                            {items.triggerContent}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-full w-full">
                <TabsContent
                  className="h-full w-full rounded-t-[20px]"
                  value="1"
                >
                  <TabContent
                    profileImg="/assets/png/profile-pic.png"
                    profileName="Leslie Alexander"
                    msgDate="Today"
                    messageSentTime="10:06 AM"
                  />
                </TabsContent>
                <TabsContent
                  className="h-full w-full rounded-t-[20px]"
                  value="2"
                >
                  <TabContent
                    profileImg="/assets/png/notification-img-2.png"
                    profileName="Albert Flores"
                    msgDate="Today"
                    messageSentTime="10:06 AM"
                  />
                </TabsContent>
                <TabsContent
                  className="h-full w-full rounded-t-[20px]"
                  value="3"
                >
                  <TabContent
                    profileImg="/assets/png/notification-img-3.png"
                    profileName="Theresa Webb"
                    msgDate="Today"
                    messageSentTime="10:06 AM"
                  />
                </TabsContent>
                <TabsContent
                  className="h-full w-full rounded-t-[20px]"
                  value="4"
                >
                  <TabContent
                    profileImg="/assets/png/notification-img-4.png"
                    profileName="Kathryn Murphy"
                    msgDate="Today"
                    messageSentTime="10:06 AM"
                  />
                </TabsContent>
                <TabsContent
                  className="h-full w-full rounded-t-[20px]"
                  value="5"
                >
                  <TabContent
                    profileImg="/assets/png/notification-img-5.png"
                    profileName="Jacob Jones"
                    msgDate="Today"
                    messageSentTime="10:06 AM"
                  />
                </TabsContent>
                <TabsContent
                  className="h-full w-full rounded-t-[20px]"
                  value="6"
                >
                  <TabContent
                    profileImg="/assets/png/notification-img-6.png"
                    profileName="Jane Cooper"
                    msgDate="Today"
                    messageSentTime="10:06 AM"
                  />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default NotificationMsgBox;
