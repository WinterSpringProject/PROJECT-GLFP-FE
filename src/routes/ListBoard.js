import React, { Component } from 'react';
import BoardService from '../services/BoardService';

class ListBoard extends Component {
    constructor(props) {
        super(props)

    //  boards 변수 선언
        this.state = {
            boards: []
        }
        // 글 작성을 클릭했을 때 동작하는 createBoard 함수를 bind
		this.createBoard = this.createBoard.bind(this);

    }
    // 생명주기 메소드에서 BoardService 메소드 호출해서 데이터 가져옴
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data});
        }); // 페이지가 로딩 될때, 글 목록만 가져오던 것을 페이징 객체도 같이 가져오게 수정
    }


    // 글 작성 버튼을 클릭할때 글 작성 페이지로 이동해주는 함수를 정의
    createBoard() {
        this.props.history.push('/post/_create');
    }                           // 경로에 파라미터를 추가한다.

    // 글 제목을 클릭하였을때 글 상세보기로 이동해주는 함수 정의
	readBoard(post_id) {
        this.props.history.push(`/post/${post_id}`);
    }


    // render : 실제 웹페이지에 표시     maps : boards의 데이터 출력
    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>
                
                {/* // 글 작성 부분을 추가한다. */}
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.createBoard}> 글 작성</button>
                </div>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.boardId}> 
                                        <td> {board.boardId} </td>
                                        
                                        {/* // 글 제목을 클릭할때 글 상세보기 페이지로 이동할 수 있게 함수를 bind */}
                                        <td> <a onClick = {() => this.readBoard(board.boardId)}>{board.postTitle} </a></td>

                                        <td> {board.id} </td>
                                        <td> {board.postCreatedTime} </td>
                                        <td> {board.postModifiedTime} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }

}



export default ListBoard;
