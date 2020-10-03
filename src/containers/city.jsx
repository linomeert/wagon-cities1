import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';


class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }
  render() {
    const classList = this.props.city === this.props.selectedCity ? "active" : ""
    return (
      <div className={classList} onClick={this.handleClick} key={this.props.city.name}>
        {this.props.city.name}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(City);
