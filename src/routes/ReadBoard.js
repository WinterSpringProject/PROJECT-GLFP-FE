
// import React, { Component } from 'react';
// import BoardService from '../services/BoardService';

// class ReadBoard extends Component {
//     constructor(props) {
//         super(props);

//         // this.state에 글 상세보기에 사용될 파라미터 정의
//         this.state = { 
//             no: this.props.match.params.no,
//             board: {}
//         }

//         this.goToUpdate = this.goToUpdate.bind(this);        
        
//     }

//     // 페이지가 로딩될때 api와 통신해 글 객체를 가져온다.
//     componentDidMount() {
//         BoardService.getOneBoard(this.state.no).then( res => {
//             this.setState({board: res.data});

//             console.log("get result => "+ JSON.stringify(res.data));   
//         });
//     }

//     // 파라미터 값에 따라 페이지에 표시할 내용을 변경하고
//     // 게시판 타입별로 표시를 다르게 한다.
//     returnBoardType(typeNo) {
//         let type = null;
//         if (typeNo == 1) {
//             type = "자유게시판";

//         } else if (typeNo == 2 ) {
//             type = "질문과 답변 게시판";

//         } else {
//             type = "타입 미지정";
//         }

//         return (
//             <div className = "row">
//                 <label> Board Type : </label> {type}
//             </div>
//         )

//     }

//     returnDate(cTime, uTime) {
//         return (
//             <div className = "row">
//                 <label>생성일 : [ {cTime} ] / 최종 수정일 : [ {uTime} ] </label>
//             </div>
//         )
//     }

//     // 글 목록으로 이동하는 함수를 정의한다.
//     goToList() {
//         this.props.history.push('/post');
//     }

//     goToUpdate = (event) => {
//         event.preventDefault();
//         this.props.history.push(`/post/${this.state.no}`);
//     }

//     // 글 삭제 함수를 추가하낟. alert창을 띄워 삭제할지를 결정한다.
//     // alert창에서 확인 버튼이 클릭외면, api와 통신하여 글을 삭제한 후, 성공하면 글 목록으로 이동한다.
//     deleteView = async function () {
//         if(window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
//             BoardService.deleteBoard(this.state.no).then( res => {
//                 console.log("delete result => "+ JSON.stringify(res));
//                 if (res.status == 200) {
//                     this.props.history.push('/post');
//                 } else {
//                     alert("글 삭제가 실패했습니다.");
//                 }
//             });

//         }
//     }


//     render() {
//         return (
//             <div>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className ="text-center"> Read Detail</h3>
//                     <div className = "card-body">
                            
//                             {/* // 게시판 타입별로 표시를 다르게 한다. */}
//                             {this.returnBoardType(this.state.board.type)} 
//                             <div className = "row">      
//                                 {/* // 파라미터 값을 그대로 표시한다. */}
//                                 <label> postTitle </label> : {this.state.board.postTitle}
//                             </div>

//                             <div className = "row">
//                                 <label> Content </label> : <br></br>
//                                 <textarea value={this.state.board.content} readOnly/> 
//                             </div >

//                             <div className = "row">
//                                 <label> boardId  </label>: 
//                                 {this.state.board.boardId}
//                             </div>

//                             {this.returnDate(this.state.board.postCreatedTime, this.state.board.postModifiedTime) }
//                             {/* // 글 목록으로 이동하는 함수를 bind한다. */}
//                             <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>

//                             <button className="btn btn-info" onClick={this.goToUpdate} style={{marginLeft:"10px"}}>글 수정</button>
//                             // 글 삭제 함수 버튼을 추가한다. 글  삭제 함수와 bind한다.
//                             <button className="btn btn-danger" onClick={() => this.deleteView()} style={{marginLeft:"10px"}}>글 삭제</button>

//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }

// export default ReadBoard;
