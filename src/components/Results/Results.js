import React from "react";
import PropTypes from "prop-types";
import { SearchIcon } from "../icons/SearchIcon";
import { StyledResults } from "./StyledResults";

export default function Results(props) {

  const makeKeywordBold = (string, keyword) => {
    const parts = string.split(keyword);
    const boldParts = parts.map( (p, i) => 
        <span key={i}>
          {p}{i !== parts.length-1 && <strong>{keyword}</strong>}
        </span>
    )
    return boldParts;
  }

  const {
    results,
    onClick,
    showIcon,
    maxResults,
    searchString,
  } = props;

  return (
    results.length > 0 ?
      <StyledResults>
        <div className="line" />
        <ul>
          {
            results.slice(0, maxResults).map( result => 
              <li key={result.id} onMouseDown={()=>onClick(result)}>
                {showIcon && <div className="icon"><SearchIcon /></div>}
                <div className="ellipsis" title={result.name}>
                  {makeKeywordBold(result.name, searchString)}
                </div>
              </li>)
          }
        </ul>
      </StyledResults>
    :
      null
  )
}

Results.defaultProps = {
  results: [],
}

Results.propTypes = {
  results: PropTypes.array,
  onClick: PropTypes.func,
  showIcon: PropTypes.bool,
  maxResults: PropTypes.number,
  searchString: PropTypes.string,
}