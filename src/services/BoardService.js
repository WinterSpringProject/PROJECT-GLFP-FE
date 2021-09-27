// import axios from 'axios';

// const BOARD_URL = "http://ec2-18-219-230-109.us-east-2.compute.amazonaws.com:8080/board/post/1";
// //  spring boot api의 URL을 정의


// class BoardService {

//     // 표시할 페이지 번호를 파라미터로 설정하여 통신하도록 수정한다.
//     getBoards() {
//         return axios.get(BOARD_URL);
//     }       // 글 목록 데이터를 가져오는 함수이다.

//     createBoard(boardDto) {
//         return axios.post(BOARD_URL, boardDto);
//     }   // 글 작성 함수 추가
//         // axios의 post 함수를 사용해서 통신한다.

//     getOneBoard(no) {
//         return axios.get(BOARD_URL + "/" + no);
//     }   // 글 상세보기 함수 추가
//         // 경로 파라미터로 글 번호를 설정하여 통신한다.

//     updateBoard(no, board) {
//         return axios.put(BOARD_URL + "/" + no, board);
//     }   // 글 수정 함수 추가 
//         // 경로 파라미터로 글 번호를 설정하고, 수정할 객체정보를 body에 담아 통신한다.

//     deleteBoard(no) {
//         return axios.delete(BOARD_URL + "/" + no);
//     }   // 글 수정 함수 추가
//         // 경로 파라미터로 글 번호를 설정, 글 번호에 해당하는 글을 삭제한다.


// }

// export default new BoardService();