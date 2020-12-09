import React, { useState, useLayoutEffect, useCallback } from 'react';
import MultiSelect from "react-multi-select-component";
import { Link } from 'react-router-dom';

import { Form, Input } from "@rocketseat/unform";
import { FiCheck, FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { Container, Content, ButtonDelete, ButtonSave } from './styles';

import LeftMenu from '../../../components/Dashboard/LeftMenu';
import LoadButton from '../../../components/Dashboard/LoadButton';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

export default function DevelopersEdit({ match }) {
    const { id } = match.params;
    const options = [
        { label: "C#", value: "c#" },
        { label: "Javascript", value: "javascript" },
        { label: "Nodejs", value: "nodejs"},
        { label: "Angular", value: "angular" },
        { label: "React", value: "react" },
        { label: "Ionic", value: "ionic" },
        { label: "Mensageria", value: "mensageria" },
        { label: "PHP", value: "php" },
        { label: "Laravel", value: "laravel" },
    ];

    const [loading, setLoading] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [developer, setDeveloper] = useState([]);
    const [techsSelected, setTechsSelected] = useState([]);
    
    const loadDev = useCallback(async () => {
        try {
            if (id != 0) {
                await api.get(`developers/${id}`)
                    .then(function (res) {
                        setLoading(true);
                        setDeveloper(res.data);
                    })
                    .finally(function () {
                        setLoading(false);
                    });
            }
        } catch (err) {
            history.push('/programadores');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useLayoutEffect(() => {
        loadDev();
    }, [loadDev]);

    async function handleSubmit(data) {
        try {
            setLoading(true);
            if (id == 0) {
                await api.post('developers', { 
                    name: data.name, 
                    email: data.email, 
                    age: data.age,
                    url_linkedin: data.url_linkedin,
                    technologies: JSON.stringify(techsSelected)
                }).then(function (res) {
                        toast.success('Programador criado com sucesso!');
                        history.push('/programadores');
                    });
            } else {
                await api.put(`developers/${id}`, { 
                    name: data.name, 
                    email: data.email, 
                    age: data.age,
                    url_linkedin: data.url_linkedin,
                    technologies: JSON.stringify(techsSelected)
                }).then(function (res) {
                        toast.success('Programador editado com sucesso!');
                        history.push('/programadores');
                    });
            }
        } catch (err) {
            toast.error('Erro ao editar programador. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }
    
    async function handleDelete() {
        try {
            setLoadingDelete(true);
            await api.delete(`developers/${id}`);
            toast.success('Usuário deletado com sucesso!');
            history.push('/programadores');
        } catch (err) {
            toast.error('Erro ao deletar programador. Tente novamente.');
        } finally {
            setLoadingDelete(false);
        }
    }

    return (
        <>
        <Container>
            <LeftMenu pagina="programadores"/>
            <Content>
                <h1>Programadores
                    <Link to={`/programadores`}>
                        <FiArrowLeft size={15} />
                    </Link>
                </h1>
                <Form initialData={developer} onSubmit={handleSubmit} >
                    <Input id="name" name="name" label="Nome" type="text" />
                    <Input id="email" name="email" label="E-mail" type="text" />
                    <Input id="age" name="age" label="Idade" type="text" />
                    <Input id="url_linkedin" name="url_linkedin" label="Linkedin" type="text" />
                    <label>Tecnologias</label>
                    <MultiSelect
                        id="technologies" 
                        name="technologies"
                        options={options}
                        value={techsSelected}
                        onChange={setTechsSelected}
                        labelledBy={"Tecnologias"}
                    />

                    <ButtonSave type="submit">{loading ? <LoadButton /> : <><FiCheck size={15} /> Salvar</>}</ButtonSave>
                    {id != 0 ? <ButtonDelete type="button" onClick={handleDelete}>{loadingDelete ? <LoadButton /> : <><FiTrash2 size={15} /> Remover</>}</ButtonDelete> : ""}
                </Form>
            </Content>
        </Container>
        </>
    );
}
