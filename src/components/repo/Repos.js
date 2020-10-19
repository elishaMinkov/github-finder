import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'


const Repos = ({repos}) => {
  return  repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}

Repos.propeTypes={
  repos: PropTypes.array.isRequired,
}

export default Repos;