import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://ec2-18-219-230-109.us-east-2.compute.amazonaws.com:8080/board/post/1'
      );
      console.log(response.data);
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    // setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
          {user.userName} ({user.userEmail})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;













// import React, { useState, useEffect } from "react";
// import Stomp from "stompjs";
// import SockJS from "sockjs-client";
// let sock;
// let ws;

// export default function ChatRoom(props) {
//   const [receivedMessages, setReceivedMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");
//   const [connected, setConnected] = useState(false);
//   const { roomId } = props.location.state;

//   useEffect(() => {
//     connect();
//     return () => {
//       ws.disconnect(() => {
//         setConnected(false);
//         console.log("disconnected...");
//       });
//     };
//   }, []);

//   useEffect(() => {
//     if (connected) {
//       ws.subscribe("/sub/chat/room/" + roomId, (data) => {
//         const newMessage = JSON.parse(data.body);
//         addMessage(newMessage);
//       });
//       setConnected(true);
//     } else {
//       ws.connect({}, () => {
//         ws.subscribe("/sub/chat/room/" + roomId, (data) => {
//           const newMessage = JSON.parse(data.body);
//           addMessage(newMessage);
//         });
//       });
//     }
//   }, [receivedMessages]);

//   const connect = () => {
//     sock = new SockJS("http://localhost:8080/ws-stomp");
//     ws = Stomp.over(sock);
//   };

//   const handleMessageInput = (e) => {
//     setMessageInput(e.target.value);
//   };
//   const handleSubmitButton = (e) => {
//     //let params = new URLSearchParams();
//     //params.append("name", roomName);
//     e.preventDefault();
//     ws.send(
//       "/pub/chat/message",
//       {},
//       JSON.stringify({
//         type: "TALK",
//         roomId: roomId,
//         sender: "상빈",
//         message: messageInput,
//       })
//     );

//     setMessageInput("");
//   };
//   const addMessage = (message) => {
//     setReceivedMessages((props) => [...props, message]);
//     //const newMessageList = newMessages.map()
//     //setReceivedMessages(receivedMessages.concat(message));

//     //const newMessage = receivedMessages.unshift(message);
//     //setReceivedMessages(newMessage);
//     console.log("rcv:", receivedMessages);
//   };

//   return (
//     <div>
//       <span>메시지</span>
//       <input onChange={handleMessageInput} />
//       <button onClick={handleSubmitButton}>메시지 전송</button>
//       <div>
//         {/* {receivedMessages && receivedMessages.length > 0 && (
//           <ul>
//             {receivedMessages.map((data, key) => (
//               <li key={key}>{data.message}</li>
//             ))}
//           </ul>
//         )} */}
//         <ul>
//           {receivedMessages.map((data, key) => (
//             <li key={key}>
//               {data.sender}: {data.message}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }