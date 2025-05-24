import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const dummyChats = [
  {
    id: '1',
    name: 'Luis - Github',
    username: 'luis',
    time: '45m',
    messages: [
      { from: 'user', text: 'I bought a product from your store in November...' },
      { from: 'agent', text: 'Let me just look into this for you, Luis.', seen: true },
    ],
  },
  {
    id: '2',
    name: 'Ivan - Nike',
    username: 'ivan',
    time: '3min',
    messages: [
      { from: 'user', text: 'I have an issue with my order.' },
      { from: 'agent', text: 'Please share your order ID.', seen: false },
    ],
  },
  {
    id: '3',
    name: 'Lead from NY',
    username: 'leadny',
    time: '40m',
    messages: [
      { from: 'user', text: 'Interested in your services.' },
      { from: 'agent', text: 'I will get back to you shortly.', seen: false },
    ],
  },
];


export default function Conversation() {
  const { id } = useParams();
  const chat = dummyChats.find(c => c.id === id);
  const [message, setMessage] = useState('');

  if (!chat) return <div className="p-4">Chat not found.</div>;

  const handleSend = () => {
    if (message.trim()) {
      alert(`Message sent: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b flex items-center gap-3">
        <Avatar>
          <AvatarImage src={`https://avatar.iran.liara.run/public/boy?username=${chat.username}`} />
          <AvatarFallback>{chat.name[0]}</AvatarFallback>
        </Avatar>
        <h2 className="text-base sm:text-lg font-semibold">{chat.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4 sm:p-6">
        {chat.messages.map((msg, i) => {
  const isAgent = msg.from === 'agent';
  return (
    <div
      key={i}
      className={`flex items-end gap-2 ${
        isAgent ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isAgent && (
        <Avatar className="w-8 h-8">
          <AvatarImage src={`https://avatar.iran.liara.run/public/boy?username=${chat.username}`} />
          <AvatarFallback>{chat.name[0]}</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`p-3 rounded-xl max-w-[85%] sm:max-w-[75%] break-words ${
          isAgent ? 'bg-violet-200' : 'bg-muted'
        } text-black`}
      >
        {msg.text}
        {msg.seen && isAgent && (
          <div className="text-xs text-muted-foreground mt-1">Seen · 1min ago</div>
        )}
      </div>

      {isAgent && (
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://avatar.iran.liara.run/public/boy?username=agent" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
})}

      </div>

      {/* Message Input Box */}
      <div className="p-4 border-t flex gap-2">
        <Input
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend}>
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
