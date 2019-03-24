import React from 'react';

var RepoListEntry = (props) => (
  <li>
    <a href={props.repo.html_url}>{props.repo.full_name}</a>
  </li>
)

export default RepoListEntry;