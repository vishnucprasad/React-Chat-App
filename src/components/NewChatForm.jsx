import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { newChat } from "react-chat-engine";

const NewChatForm = (props) => {
  const [chatName, setChatName] = useState("");
  const { creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = chatName.trim();

    if (title.length > 0) newChat(creds, { title });

    setChatName("");
  };

  return (
    <div className="new-chat-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          className="new-chat-input"
          type="text"
          placeholder="New Chat..."
          onChange={(e) => setChatName(e.target.value)}
        />
        <button type="submit" className="new-chat-button">
          <PlusCircleOutlined className="new-chat-icon" />
        </button>
      </form>
    </div>
  );
};

export default NewChatForm;
