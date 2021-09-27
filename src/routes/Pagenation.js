// import styled from 'styled-components';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import More from './More';

// function Pagenation() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(10);

//   useEffect( async() => {
//     setLoading(true);
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     setPosts(response.data);
//     setLoading(false);
//   },[]);

//   /* 새로 추가한 부분 */
//   const indexOfLast = currentPage * postsPerPage;
//   const indexOfFirst = indexOfLast - postsPerPage;
//   function currentPosts(tmp) {
//     let currentPosts = 0;
//     currentPosts = tmp.slice(indexOfFirst, indexOfLast);
//     return currentPosts;
//   }
//   /*                 */

//   return (
//     <div className="pagenation">
//       <Posts posts={currentPosts(posts)} loading={loading}></Posts>
//       <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
//     </div>
//   );
//   }




// const PageUl = styled.ul`
//   float:left;
//   list-style: none;
//   text-align:center;
//   border-radius:3px;
//   color:white;
//   padding:1px;
//   border-top:3px solid #186EAD;
//   border-bottom:3px solid #186EAD;
//   background-color: rgba( 0, 0, 0, 0.4 );
// `;

// const PageLi = styled.li`
//   display:inline-block;
//   font-size:17px;
//   font-weight:600;
//   padding:5px;
//   border-radius:5px;
//   width:25px;
//   &:hover{
//     cursor:pointer;
//     color:white;
//     background-color:#263A6C;
//   }
//   &:focus::after{
//     color:white;
//     background-color:#263A6C;
//   }
// `;

// const PageSpan = styled.span`
//   &:hover::after,
//   &:focus::after{
//     border-radius:100%;
//     color:white;
//     background-color:#263A6C;
//   }
// `;

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div style=>
//       <nav style=>
//         <PageUl className="pageination">
//           {pageNumbers.map(number => (
//             <PageLi key={number} className="page-item">
//               <PageSpan onClick={() => paginate(number)} className="page-link">
//                 {number}
//               </PageSpan>
//             </PageLi>
//           ))}
//         </PageUl>
//       </nav>
//     </div>
//   );
// };

// export default Pagination;