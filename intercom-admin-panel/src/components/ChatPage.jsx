import ChatList from './ChatList';
import ChatCopilot from './ChatCopilot';
import { Outlet, useLocation } from 'react-router-dom';

export default function ChatPage() {
  const location = useLocation();
  const match = location.pathname.match(/^\/conversation\/(.+)$/);
  const selectedId = match ? match[1] : null;

  return (
    <div className="flex h-screen">
      <ChatList selectedId={selectedId} />
      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
      <ChatCopilot />
    </div>
  );
}
