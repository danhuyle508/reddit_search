import React, { Component } from 'react'
import superagent from 'superagent'


class RedditSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: '',
            page: 0,
            errorClass: '',
            category: 'films'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const url = `https://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`;

        superagent.get(url)
        .then( res => {
            this.setState({errorClass: '' })
            this.props.onSearch( res.body.results);
        })
        .catch( error => {
            console.error(error);
            this.setState({errorClass: 'search-error'})
        })
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="reddit-search">
                <form className={this.state.errorClass} onSubmit={this.handleSubmit}>
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
                    <option value="beer">Beer</option>
                    <option value="food">Food</option>
                    <option value="movies">Movies</option>
                    <option value="python">Python</option>
                    </select>
                <input
                    type="text"
                    name="searchName"
                    value={this.state.searchName} 
                    onChange={this.handleChange}/>

                    <button type="submit">Search</button>
                </form>       
            </div>  
        )
    }
}

export default RedditSearch