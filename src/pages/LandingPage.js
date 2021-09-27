import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/css/Button.css';


export default function LandingPage() {
  const [roomName, setRoomName] = useState("");
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    axios.get("http://ec2-3-20-225-119.us-east-2.compute.amazonaws.com:8080/chat/rooms").then((response) => {
      setChatRooms(response.data);
      console.log(response);
    });
  }, []);

  const handleNameInput = (e) => {
    setRoomName(e.target.value);
    console.log(roomName);
  };
  const handleSubmitButton = () => {
    let params = new URLSearchParams();
    params.append("name", roomName);
    axios.post("http://ec2-3-20-225-119.us-east-2.compute.amazonaws.com:8080/chat/room", params).then((response) => {
      console.log(response);
      setChatRooms(chatRooms.concat(response.data));
    });
  };

  return (
    <div>
      <h2>채팅방 리스트</h2>
      <div>
        <div>
          <span>방제목</span>
          <input onChange={handleNameInput} />
          <button onClick={handleSubmitButton}>채팅방 개설</button>
        </div>
        
          {chatRooms.map((room, key) => (
              <div className="ChatBox">
            <Link
              to={{ pathname: "/Chatroom", state: { roomId: room.roomId } }}
            >
                
              <li>{room.roomName}</li>
            </Link>
            </div>
          ))}
      </div>
    </div>
  );
}