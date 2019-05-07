// // import React from 'react';
// import React, { Component } from "react";
// // import './App.css';
// import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import Jumbotron from './components/Jumbotron';
// import SearchInput from './components/SearchInput';
// import API from './utils/API';  
// import Navtab from './components/Navtab';  
// import Saved from './components/pages/Saved'; 
// import ResultCard from './components/ResultCard' ;

// class Books extends Comment{
//     state= {
//         books:[],
//         title:'',
//         author:'',
//         image: '',
//         description:'',
//         link:'',
//         id:''
//     };

//     componentDidMount(){
//         this.loadBooks();
//     }

//     loadBooks = () =>{
//         API.search()
//         .then(res =>
//             this.setState({books:res.data,
//             title:'',author:'',image:'',description:''})
//             )
//             .catch(err => console.log(err));
//     };

//     deleteBook = id => {
//         API.delBook (id)
//             .then(res => this.loadBooks())
//             .catch(err => console.log(err));
//     };

//     handleInputChange = event => {
//         const {name,value } = event.target;
//         this.setState({[name]: value});
//     };
//     handleFormSubmit = event => {
//         event.preventDefault();
//         if(this.state.title && this.state.author){
//             API.saveBook({
//                 title:this.state.title,
//                 author:this.state.author,
//                 description:this.state.description,
//                 image:this.state.image,
//                 link:this.state.link
//             })
//                 .then(res => this.loadBooks())
//                 .catch(err => console.log(err));
//         }
//     };

//     render(){
//         return(
//             <div>
//                 <h2>---test---</h2>
//                     <ResultCard
//                     value={this.state.title}
//                     id={Books.id}
//                     key={Books.id}
//                     title={this.state.title}
//                     image={this.state.image}
//                     link={this.state.link}
//                     synopsis={this.state.synopsis}
//                     />
//             </div>
//         )
//     }
// }
// export default Books; 