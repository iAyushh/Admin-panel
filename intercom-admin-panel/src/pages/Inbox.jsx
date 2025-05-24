import ChatList from '../components/ChatList';

export default function Inbox() {
  return (
    <div className="flex h-screen">
      <ChatList />
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        Select a conversation to view details
      </div>
    </div>
  );
}
