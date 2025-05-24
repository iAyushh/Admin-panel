import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";

function ChatCopilot() {
  return (
    <div className="w-full lg:w-80 p-4 border-l bg-muted/20 flex flex-col justify-between">
      <div>
        <Tabs defaultValue="account" className="w-75">
          <TabsList>
            <TabsTrigger value="account">AI Copilot✨ </TabsTrigger>
            <TabsTrigger value="password">Details</TabsTrigger>
          </TabsList>
          <Separator/>
          <TabsContent value="account">
            Hey I am AI Copilot
            <p className="text-sm text-muted-foreground">
              Ask me anything about this conversation.
            </p>
          </TabsContent>
          <TabsContent value="password">Details appear here.</TabsContent>
        </Tabs>
      </div>
      <div className="mt-4">
        <input
          className="w-full p-2 rounded border border-input"
          placeholder="Ask a question..."
        />
        <div className="text-xs text-muted-foreground mt-1">
          Suggested: 💸 How do I get a refund?
        </div>
      </div>
    </div>
  );
}

export default ChatCopilot;
