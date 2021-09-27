import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

function More() {
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
        'https://jsonplaceholder.typicode.com/posts'
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

  if (!loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <Wrap>
                <h2>게시판</h2>
                <h2>{users.title}</h2>
                
                {users.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            <Link to={`/read/${item.id}`}>    
                                <h3>{item.title} | {item.userId}</h3>
                                <p>{item.userId}</p>
                                <p>{item.id}</p>
                            </Link>
                        </ListItem>
                    );
                })}

                <Button>
                    <Link to={`/write`}>글쓰기</Link>
                </Button> 
                </Wrap>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}


const Wrap = styled.div`
    padding: 20px;
    `;

const ListItem = styled.div`
    width: 100%;
    margin-top: 1px;
    padding: 10px;
    border-top: 1px solid #eee;
    color: #FFEBCD;
    a {
    text-decoration: none;
        h3 {
        margin: 0;
        padding: 0;
        color: #212121;                                                                     }
    p { 
        margin: 0; 
        padding: 10px 0 0 0;
        color: #787878;
    }
        &:hover {
        h3 {
        color: #0066ff;
        }
    }
}
`;
const Button = styled.div`
                 border-top: 1px solid #eee; 
                 padding: 20px; 
                 a {
                    float: right;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    background: #212121;
                    color: #fff;
                } 
        `;

export default More;