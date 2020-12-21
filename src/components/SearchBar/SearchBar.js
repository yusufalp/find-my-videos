import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }
  inputChangeHandler = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  formSubmitHandler = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm)
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.formSubmitHandler(e)}>
          <label htmlFor='video-search'>Search: </label>
          <input
            id='video-search'
            name='video-search'
            type='text'
            value={this.state.searchTerm}
            onChange={this.inputChangeHandler}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;