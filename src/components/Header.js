import { faAngleLeft, faCalculator, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

  return (
    <>
      <header className="text-light">
        <p className="brand" onClick={()=>navigate('/')}>
          <span>supcal +</span>
        </p>
        <p className="btns">
          <span><NavLink to= "/"> 
          <FontAwesomeIcon icon={faCalculator} />
          </NavLink> 
          </span>
          <span>
            <NavLink to = '/convert'>
            <FontAwesomeIcon icon={faNetworkWired}/>
            </NavLink>
          </span>
          <span onClick={()=>navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </p>
      </header>
    </>
  );
}

export default Header;
