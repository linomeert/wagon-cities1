import React from 'react';
import { connect } from 'react-redux';


const ActiveCity = ({ activeCity }) => {
  if (!activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
  const imgUrl = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`;

  return (
    <div className="active-city">
    HALLO
      <h1>{activeCity.name}</h1>
      <p>{activeCity.address}</p>
      <img src={imgUrl} alt={activeCity.slug} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
