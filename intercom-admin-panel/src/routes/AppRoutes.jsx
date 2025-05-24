import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from '../components/ChatPage';
import Conversation from '../components/Conversation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />}>
          <Route index element={<div>Select a conversation</div>} />
          <Route path="conversation/:id" element={<Conversation />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
