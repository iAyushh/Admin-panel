import { useParams } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from './ui/separator';

const dummyChats = [
  {
    id: '1', name: 'Luis - Github', time: '45m',
    messages: [
      { from: 'user', text: 'I bought a product from your store in November...' },
      { from: 'agent', text: 'Let me just look into this for you, Luis.', seen: true },
    ],
  },
  {
    id: '2', name: 'Ivan - Nike', time: '3min',
    messages: [
      { from: 'user', text: 'I have an issue with my order.' },
      { from: 'agent', text: 'Please share your order ID.', seen: false },
    ],
  },
  {
    id: '3', name: 'Lead from New York', time: '40m',
    messages: [
      { from: 'user', text: 'Interested in your services.' },
      { from: 'agent', text: 'I will get back to you shortly.', seen: false },
    ],
  },
];

export default function Conversation() {
  const { id } = useParams();
  const chat = dummyChats.find(c => c.id === id);

  if (!chat) return <div className="p-4">Chat not found.</div>;

  return (
    <div className="bg-white p-3 rounded-lg shadow h-full max-w-[900px] mx-auto  space-y-3">
      {/* Heading close to the separator */}
      <h2 className="text-lg font-semibold leading-tight">{chat.name}</h2>
      <Separator className="mb-2" />

      {/* Messages */}
      {chat.messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.from === 'agent' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`p-3 rounded-xl max-w-[75%] ${
              msg.from === 'user'
                ? 'bg-muted text-black'
                : 'bg-violet-200 text-black'
            }`}
          >
            {msg.text}
            {msg.seen && msg.from === 'agent' && (
              <div className="text-xs text-muted-foreground mt-1">Seen · 1min</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
