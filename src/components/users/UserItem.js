import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const  UserItem =({user:{login,avatar_url,html_url}})=>{
   
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt='img'
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          
        </div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-l'> More</Link>
      </div>
    );
  
};

UserItem.propTypes = {
  user:PropTypes.object.isRequired
};

export default UserItem;
