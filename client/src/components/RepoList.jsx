import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <p>There are {props.repos.length} repos.</p>
    <ul>
      {props.repos.map( (repo, i) => {
        return <RepoListEntry repo={repo} key={i}/>
      })}      
    </ul>
  </div>
)

export default RepoList;