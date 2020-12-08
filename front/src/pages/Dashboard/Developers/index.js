import React, { useState, useLayoutEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiPlus, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { Container, Content, Table } from './styles';

import LeftMenu from '../../../components/Dashboard/LeftMenu';
import Loader from '../../../components/Dashboard/Loader';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

export default function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true);

    function editDev(id) {
        history.push('/programadores/' + id);
    }

    useLayoutEffect(() => {
        async function loadDevs() {
            try {
                setLoading(true);
                const response = await api.get('developers');
                setDevelopers(response.data);
            } catch (err) {
                toast.error('Nenhum usuário encontrado');
                history.push('/programadores');
            } finally {
                setLoading(false);
            }
        }
    
        loadDevs();
    }, []);

    return (
        <Container>
            <LeftMenu pagina="programadores" />
            <Content>
                <h1>Programadores
                    <Link to={'/programadores/0'}> 
                        <FiPlus size={15} /> Novo programador
                    </Link>
                </h1>
                { loading ? <Loader /> : (developers.length == 0 ? 
                    <span><Link to={'/programadores/0'}>Nenhum registro, <strong>cadastrar um novo programador</strong></Link></span>
                    :
                    <>
                    <Table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Email</td>
                                <td>Idade</td>
                                <td>Linkedin</td>
                                <td>Tecnologias</td>
                            </tr>
                        </thead>
                        <tbody>
                            { developers.map(dev => (
                                <tr onClick={() => editDev(dev.id)} key={dev.id}>
                                    <td>{dev.name}</td>
                                    <td>{dev.email}</td>
                                    <td>{dev.age}</td>
                                    <td>{dev.url_linkedin}</td>
                                    <td>{dev.tecnologies}</td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                    </>)
                }
            </Content>
        </Container>
    );
}
