import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

class List extends Component {
    state = {
        boards: [],
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    //로딩 데이터 
    loadingData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            this.setState({
            //     // boards: 'test'
                boards: response.data,
            });
        } catch (e) {
            console.log(e);
        }
    };
    componentDidMount() {
        const { loadingData } = this;
        loadingData();
    }

    render() {
        const { boards } = this.state;
        return (
            <Wrap>
                <h2>게시판</h2>
                <h2>{boards.title}</h2>
                {/* {/* <h2>{boards.title}</h2> */}
                
                {boards.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            <Link to={`/read/${item.id}`}>    
                                <h3>{item.title} | {item.userId}</h3>
                                <p>{item.userId}</p>
                            </Link>
                        </ListItem>
                    );
                })}

                <Button>
                    {/* <button onClick={handleClick}>get Request</button> */}
                    <Link to={`/write`}>글쓰기</Link>
                </Button> 
                </Wrap>
                );
    }
}
//styling 
const Wrap = styled.div`
    padding: 20px;
    `;

const ListItem = styled.div`
    width: 100%;
    margin-top: 1px;
    padding: 10px;
    border-top: 1px solid #eee;
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

export default List;

