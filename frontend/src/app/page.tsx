import Chat from "./components/screens/(chats)/Chat";
import ChatList from "./components/screens/(chats)/ChatsList";
import CurrentUser from "./components/screens/(chats)/CurrentUser";

export default function ChatsPage() {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: ".7fr 3fr",
      }}
    >
      <div
        className="border-r"
        style={{
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <CurrentUser />
        <ChatList />
      </div>
      <Chat />
    </div>
  );
}
