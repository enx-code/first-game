// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "cdfe83ae-b412-45d1-ab62-9c40aa188ed6",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div className="background">
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} />
//     </div>
//   );
// };
// export default ChatsPage;

// cdfe83ae-b412-45d1-ab62-9c40aa188ed6

import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;