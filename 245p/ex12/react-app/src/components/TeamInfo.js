import React from 'react'

function TeamInfo(props) {
    return (
      <article>
        <h1>{props.teamName}</h1>
        <p>{props.teamInfo}</p>
      </article>
    );
  }

  export default TeamInfo;