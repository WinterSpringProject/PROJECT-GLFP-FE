
import React, { Component } from 'react';
import BoardService from '../services/BoardService';

class CreateBoard extends Component {
    constructor(props) {
        super(props);

        // this.state에 폼 양식에서 사용될 파라미터 정의
        this.state = {
            // 글 작성인지 수정인지 구분하기 위한 파라미터를 선언하기
            no: this.props.match.params.no,
            id: '',
            postTitle: '',
            content: '',
            boardId: ''
        }

        // 폼 양식에 입력이 되면 this.state에 정의된 변수의 값을 변경하도록 bind
        // save를 누르면 api에 글 작성 리퀘스트를 보내는 함수 bind
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeMemberNoHandler = this.changeMemberNoHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    // this.setState로 this.state에 정의된 변수에 값을 대입해주는 함수 선언
    changeTypeHandler = (event) => {
        this.setState({id: event.target.value});
    }
    
    changeTitleHandler = (event) => {
        this.setState({postTitle: event.target.value});
    }
    
    changeContentsHandler = (event) => {
        this.setState({content: event.target.value});
    }
    
    changeMemberNoHandler = (event) => {
        this.setState({boardId: event.target.value});
    }

    // Save 버튼을 누를경우 api에 글 작성 리퀘스트를 보내는 함수를 선언
    createBoard = (event) => {
        event.preventDefault();
        let board = {
            id: this.state.id,
            postTitle: this.state.postTitle,
            content: this.state.content,
            boardId: this.state.boardId
        };
        console.log("board => "+ JSON.stringify(board));
        if (this.state.no === '_create') {
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/post');
            });
        } else {
            BoardService.updateBoard(this.state.no, board).then(res => {
                this.props.history.push('/post');
            });
        }   // 'Save' 버튼을 클릭할때 api에 글 작성 또는 글 수정 리퀘스트를 보내도록 수정한다.
    }


    // 글 작성 취소버튼이 클릭되었을때 글목록 페이지로 이동하는 함수 선언
    cancel() {
        this.props.history.push('/post');
    }

    // 페이지 타이틀을 글 작성인지 수정인지에 따라 구분해서 출력하도록 수정한다.
    getTitle() {
        if (this.state.no === '_create') {
            return <h3 className="text-center">새글을 작성해주세요</h3>
        } else {
            return <h3 className="text-center">{this.state.no}글을 수정 합니다.</h3>
        }
    }

    // 페이지 로딩 시 글 작성이면 비어있는 폼을, 글 수정이면 글의 객체 값을 가져와서 바인딩해도록 수정한다.
    componentDidMount() {
        if (this.state.no === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.no).then( (res) => {
                let board = res.data;
                console.log("board => "+ JSON.stringify(board));
                
                this.setState({
                        id: board.id,
                        postTitle: board.postTitle,
                        content: board.content,
                        boardId: board.boardId
                    });
            });
        }
    }



    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> ID </label>
                                        <select placeholder="id" name="id" className="form-control" 
                                        value={this.state.id} onChange={this.changeTypeHandler}>
                                            <option value="1">자유게시판</option>
                                            <option value="2">질문과 답변</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> postTitle </label>
                                        <input type="text" placeholder="postTitle" name="postTitle" className="form-control" 
                                        value={this.state.postTitle} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Content  </label>
                                        <textarea placeholder="content" name="content" className="form-control" 
                                        value={this.state.content} onChange={this.changeContentsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> boardId  </label>
                                        <input placeholder="boardId" name="boardId" className="form-control" 
                                        value={this.state.boardId} onChange={this.changeMemberNoHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateBoard;
