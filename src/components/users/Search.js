import React, { useState, useContext } from 'react';
import Ghcontext from '../../context/github/githubContext';
import Alertcontext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(Ghcontext);
  const alertContext = useContext(Alertcontext);
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);
  const { setAlert } = alertContext;

  const onSubmit = (e) => {
    console.log('onSubmit triggedred');
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter somthing', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users....'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-light btn-block'
            type='reset'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
