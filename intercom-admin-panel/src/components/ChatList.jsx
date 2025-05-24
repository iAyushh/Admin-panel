import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const dummyChats = [
  { id: "1", name: "Luis - Github", time: "45m" },
  { id: "2", name: "Ivan - Nike", time: "3min" },
  { id: "3", name: "Lead from New York", time: "40m" },
];

export default function ChatList({ selectedId }) {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-auto p-4 space-y-2 bg-white">
      <h1 className="font-semibold mb-2">Your Inbox</h1>
      <Separator />

      {dummyChats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => navigate(`/conversation/${chat.id}`)}
          className={cn(
            "flex items-center justify-between p-2 rounded cursor-pointer hover:bg-violet-100",
            selectedId === chat.id && "bg-violet-100 font-medium"
          )}
        >
          <div>
            <div>{chat.name}</div>
            <div className="text-xs text-gray-500">{chat.time}</div>
          </div>
          <Avatar className="h-6 w-6 bg-gray-200 text-gray-800">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="text-sm font-medium">
              {chat.name[0]}
            </AvatarFallback>
          </Avatar>
        </div>
      ))}
    </div>
  );
}
