import React from 'react';
import Select from 'react-select';

export default class AuthorFilter extends React.Component {

  static defaultProps = {
    authors: [
      {
        id: 1,
        name: 'Paul'
      },
      {
        id: 2,
        name: 'John'
      },
      {
        id: 3,
        name: 'Aria'
      },
    ]
  };

  state = {
    authors: [],
    loading: true
  };

  componentDidMount = () => {
    this.getAuthors();
  };

  getAuthors = () => {
    setTimeout(() => {
      this.setState({
        authors: this.props.authors,
        loading: false
      });
    }, 500);
  };

  render = () => {
    return (
      <div>

        <Select
          placeholder="Select authors"
          isMulti
          isClearable
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          isSearchable
          isLoading={this.state.loading}
          onChange={value => this.props.callback(value)}
          name="author"
          options={this.state.authors}
        />

      </div>
    );
  }
}
