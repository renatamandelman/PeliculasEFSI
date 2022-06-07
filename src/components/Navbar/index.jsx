import React from "react";
import './navbar.css';
import styled from 'styled-components';
import logo from './logo.PNG';

function Navbar () {
    return(
        <>
    <navbarContainer>
        <nav>
        <img class="logo" src={logo}/>
        <div>
            <a class="nav-item" href="/">Home</a>
            <a class="nav-item" href="/">Movies</a>
            <a class="nav-item" href="/">Series</a>
            <a class="nav-item" href="/">Trailers</a>
        </div>
        </nav>
    </navbarContainer>
    
    </>
    )
}

export default Navbar; 

const navbarContainer = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

`




/*<nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="nav nav-pills " id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Home</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                        aria-controls="pills-profile" aria-selected="false">Movies</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                        aria-controls="pills-contact" aria-selected="false">Series</a>
                </li>
                <li class="nav-item">
                    <input class="nav-item" type="search" placeholder="Search" id="Buscador" />
                </li>
            </ul>
        </div>
    </nav> */