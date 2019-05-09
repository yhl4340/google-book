
import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import SearchInput from "../../components/SearchInput";
import API from "../../utils/API";
import Navtab from "../../components/Navtab";
import Saved from "../../pages/Saved";
import ResultCard from "../../components/ResultCard";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    image: "",
    description: "",
    link: "",
    id: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = (query) => {
    API.search(query)
      .then(res =>
        this.setState({
          books: res.data,
          title: "",
          author: "",
          image: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.delBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const searchTerms = event.target.value;
    this.setState({
        search: searchTerms
    });
};

handleFormSubmit = event => {
    event.preventDefault();
   console.log('clciked');
    API.search(this.state.search)
        .then(res => {
            this.setState({
                books: res.data.items
            });
        }).catch(err => console.log(err));
};


  render() {
    return (
      <div>
        <h2>---test---</h2>
        <SearchInput 
        onClick={this.handleFormSubmit}
        value = {this.title}
        name="search"
        onChange={this.handleInputChange}
        />
 
        <ResultCard
          value={this.state.title}
          id={this.state.id}
          key={this.state.id}
          title={this.state.title}
          image={this.state.image}
          link={this.state.link}
          synopsis={this.state.synopsis}
        />
      
      </div>
    );
  }
}
export default Books;