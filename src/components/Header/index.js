/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';
/* eslint-disable prettier/prettier */
export default function Header() {

  const botaoClicado = useSelector(state => state.exampleReducer.botaoClicado)

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>

      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
      <a>{botaoClicado ? "clicado" : "n clicou"}</a>
    </Nav>
  );
}
