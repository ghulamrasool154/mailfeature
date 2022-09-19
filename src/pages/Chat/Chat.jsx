import "./Chat.css";
import ChatInbox from "../../components/chatInbox/ChatInbox";
import Chatsidebar from "../../components/chatsidebar/Chatsidebar";
import SingleUserProfile from "../../components/singleUserProfile/SingleUserProfile";
import InviteMember from "../../components/invitemember/InviteMember";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
const Chat = () => {
  const data = useContext(contentCreate);

  return (
    <div className="chat--page">
      <Chatsidebar />
      <ChatInbox />
      <SingleUserProfile />
      {data.state.popNewTeam && <InviteMember />}
    </div>
  );
};

export default Chat;
