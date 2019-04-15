import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedditHeader from './reddit-header/reddit-header';
import RedditSearch from './reddit-search/reddit-search';
import RedditData from './reddit-data/reddit-data';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results:[],
      promptSearch: true
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(searchResults){
    this.setState({
      results:searchResults,
      promptSearch: false
    })
  }

  render(){
    return (
      <div className="App">
        <RedditHeader subTitle="This is a Reddit thing."
        promptSearch={this.state.promptSearch} />

        <RedditSearch onSearch= {this.handleSearch} />

        <RedditData items={this.state.results}/>
      </div>
    )
  }
}


export default App;
