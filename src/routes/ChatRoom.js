import React, { useState, useEffect } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
let sock;
let ws;

export default function ChatRoom(props) {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [connected, setConnected] = useState(false);
  const { roomId } = props.location.state;

  useEffect(() => {
    connect();
    return () => {
      ws.disconnect(() => {
        setConnected(false);
        console.log("disconnected...");
      });
    };
  }, []);

  useEffect(() => {
    if (connected) {
      ws.subscribe("/sub/chat/room/" + roomId, (data) => {
        const newMessage = JSON.parse(data.body);
        addMessage(newMessage);
      });
      ws.send(
        "/pub/chat/message",
        {},
        JSON.stringify({ type: "ENTER", roomId: roomId, sender: "상빈" })
      );
      setConnected(true);
    } else {
      ws.connect({}, () => {
        ws.subscribe("/sub/chat/room/" + roomId, (data) => {
          const newMessage = JSON.parse(data.body);
          addMessage(newMessage);
        });
        ws.send(
          "/pub/chat/message",
          {},
          JSON.stringify({ type: "ENTER", roomId: roomId, sender: "상빈" })
        );
      });
    }
  }, [receivedMessages]);

  
  const connect = () => {
    sock = new SockJS("http://ec2-3-20-225-119.us-east-2.compute.amazonaws.com:8080/ws-stomp");
    ws = Stomp.over(sock);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };
  const handleSubmitButton = (e) => {
    //let params = new URLSearchParams();
    //params.append("name", roomName);
    e.preventDefault();
    ws.send(
      "/pub/chat/message",
      {},
      JSON.stringify({
        type: "TALK",
        roomId: roomId,
        sender: "상빈",
        message: messageInput,
      })
    );

    setMessageInput("");
  };
  const addMessage = (message) => {
    setReceivedMessages((props) => [...props, message]);
    //const newMessageList = newMessages.map()
    //setReceivedMessages(receivedMessages.concat(message));

    //const newMessage = receivedMessages.unshift(message);
    //setReceivedMessages(newMessage);
    console.log("rcv:", receivedMessages);
  };

  return (
    <div>
      <span>메시지</span>
      <input onChange={handleMessageInput} />
      <button onClick={handleSubmitButton}>메시지 전송</button>
      <div>
        {/* {receivedMessages && receivedMessages.length > 0 && (
          <ul>
            {receivedMessages.map((data, key) => (
              <li key={key}>{data.message}</li>
            ))}
          </ul>
        )} */}
        <ul>
          {receivedMessages.map((data, key) => (
            <li key={key}>
              {data.sender}: {data.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
