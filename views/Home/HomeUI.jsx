import * as React from 'react';
import PropTypes from 'prop-types';

import { headerStyles, filterStyles, bodyStyles, brandsStyle } from './HomeStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function HomeUI({
  brandsList, handleChange, productsList
}) {
  return (
    <div className="home">
      <div className="header" style={headerStyles}>Home / Dogs / Food</div>
      <div className="body" style={bodyStyles}  >
        <div className="filters" style={filterStyles} >
          <div style={brandsStyle}>
            <div>
              Brands
            </div>
            <div className="brands-name">
              {
                brandsList.map((element) => (
                  <div key={element.id}>
                    <input type="checkbox" onChange={() => handleChange(element.id)} checked={element.checked} />
                    <span>
                      {element.name}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div style={{ width: '70%' }} >
          <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div style={{ fontSize: 18, color: 'rgb(233 24 177)', fontWeight: 500 }}>
              DOGS FOOD
            </div>
            <div>
              Sort By:
              <select defaultValue="None">
                <option>None</option>
                <option value="Name">Name</option>
                <option>Recently added</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <img src="https://www.glenandspetstores.com/pub/media/wysiwyg/LBanner2.jpg" width="100%" />
          </div>
          <div style={{ marginTop: 20, boxShadow: '4px 2px 25px 2px rgba(166,152,152,0.75)', height: 'auto' }}>
            <div style={{ padding: 10, display: 'flex', flexWrap: 'wrap' }}>
              {
                productsList.map(element => {
                  return (
                    <div style={{ padding: 15, width: '15%', margin: 20, boxShadow: '4px 2px 15px 2px rgba(166,152,152,0.75)' }}>
                      <img src={element.image} width="100px" height="120px" />
                      <div style={{ fontSize: 12, margin: 5 }}>{element.name}</div>
                      <div><FontAwesomeIcon icon={faRupeeSign} /> {element.price}</div>
                      <div style={{ display: 'flex', borderTop: '1px solid #c5c5c5', marginTop: '10%', marginBottom: '-12%' }}>
                        <div style={{ width: '30%', padding: 10 }}>
                          <FontAwesomeIcon icon={faHeart} style={{ color: 'grey', cursor: 'pointer' }} />
                        </div>
                        <div style={{ fontSize: 12, width: '70%', paddingLeft: 7, paddingTop: 12 }}>Add to Cart</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomeUI.defaultProps = {
  productsList: []
};

HomeUI.propTypes = {
  productsList: PropTypes.array,
  brandsList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
