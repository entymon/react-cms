import React from 'react';
import Select from 'react-select';
import { categories as categoryData } from '../../helpers/cmsCustomData';

export default class CategoryFilter extends React.Component {

  static defaultProps = {
    multiSelect: false,
    placeholder: 'Select categories',
    selected: []
  };

  state = {
    categories: [],
    loading: true,
  };

  componentDidMount = () => {
    this.getCategories();
  };

  getCategories = () => {
    setTimeout(() => {
      this.setState({
        categories: categoryData,
        loading: false
      });
    }, 500);
  };

  render = () => {
    return (
      <div>

        <Select
          value={this.props.selected}
          placeholder={this.props.placeholder}
          isMulti={this.props.multiSelect}
          isClearable
          getOptionLabel={option => option.name}
          getOptionValue={option => option.uuid}
          isSearchable
          isLoading={this.state.loading}
          onChange={value => this.props.callback(value)}
          name="author"
          options={this.state.categories}
        />

      </div>
    );
  }
}
