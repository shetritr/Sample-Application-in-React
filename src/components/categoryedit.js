import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { editCategory } from "../actions/categoryActions";

class CategoryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount = () => {
    this.state = this.props.category;
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    const category = {
      name: this.state.name
    };
    this.props.editCategory(this.props.id, category);
    this.props.history.push("/Category");
  }
  render() {
    return (
      <div>
        <h1>Edit Category</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label>Edit Name</label>
              <br />
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
CategoryEdit.propTypes = {
  editCategory: propTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.edit_id;

  return {
    id: id,
    category: state.categories.categories[id]
  };
};
export default connect(
  mapStateToProps,
  { editCategory }
)(CategoryEdit);
