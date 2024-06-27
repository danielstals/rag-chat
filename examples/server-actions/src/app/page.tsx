import { Chat } from "./components/Chat";
import { ragChat } from "./rag-chat";

export default async function Page() {
  const history = await ragChat.history.getMessages({ amount: 5 });

  return <Chat initialMessages={history} />;
}
