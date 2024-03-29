import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
class Read extends Component {
    state = {
        id: '',
        board: [],
    };
    //로딩 데이터 
    loadingData = async () => {
         
        try {
            // const id = 0; //test id 
            const { id } = this.props.match.params;
            console.log(id);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}
            `);
            this.setState({
                // boards: 'test'
                board: response.data,
            });
            console.log(response.data);
        }
        catch (e) {
            console.log(e);
        }
    };
    componentDidMount() {
        const { loadingData } = this;
        loadingData();
    }
    render() {
        const { board } = this.state;
        return (
            <Wrap>
                <h2>{board.title}</h2>
                <p>{board.id}</p>
                <Button>
                    <Link to="/List">목록</Link>
                    <a href="#"
                      onClick={() => {
                        alert('삭제');
                    }}
                    >
                    삭제
                    </a>
                    <a href="#"
                        onClick={() => {
                            alert('수정');
                        }}
                    >
                    수정
                    </a>
                </Button>
            </Wrap>
        );
    }
}
//styling 
const Wrap = styled.div`
    padding: 20px;
    h2 {
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        }
    p {
        min-height: 200px;
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
        background: #f2f2f2;
        border: 1px solid #ddd;
        color: #424242; 
        font-size: 16px;
        }
        a + a {
            margin-right: 5px;
                } 
`;

export default Read;

