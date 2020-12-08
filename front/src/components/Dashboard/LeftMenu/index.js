import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    FiHome, FiUsers, FiSettings, FiDatabase, 
    FiFileText, FiBox, FiShoppingCart, FiPower, 
    FiTruck
} from 'react-icons/fi';
import { FaMagento } from 'react-icons/fa';

import { signOut } from '../../../store/modules/auth/actions';

import api from '../../../services/api';
import { Container } from './styles';

export default function LeftMenu({ pagina }) {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(signOut());
    }
    
    return (
    <>
        <Container>
            <ul>
                <li title="Dashboard"><Link to="/dashboard"><FiHome size={20} /></Link></li>
                <li title="Programadores"><Link to="/programadores"><FiUsers size={20} /></Link></li>
            </ul>

            <span>
                <button alt="Sair" type="button" onClick={handleLogout}><FiPower size={20} /></button>
            </span>
        </Container>
    </>
  );
}
