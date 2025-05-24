import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import ChatList from '../components/ChatList';
import Conversation from '../components/Conversation';
import ChatCopilot from '@/components/ChatCopilot';


function MainLayout() {
  const location = useLocation();

  // Extract id from the path: /conversation/:id
  const match = location.pathname.match(/^\/conversation\/(.+)$/);
  const selectedId = match ? match[1] : null;

  return (
    <div className="flex h-screen">
      <ChatList selectedId={selectedId} />
      <div className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<div className="p-4">Select a conversation</div>} />
          <Route path="/conversation/:id" element={<Conversation />} />
         
          <Route path="*" element={<div className="p-4">Page Not Found</div>} />
        </Routes>
      </div>
      <ChatCopilot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
