import React, { useState } from 'react';
import shortid from 'shortid';

function App() {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState('');

    const agregarTarea = e => {
        e.preventDefault();

        if(!tarea.trim()) {
            console.log('Elemento Vacio');
            setError('Escriba algo por favor...')
            return;
        } else {
            setTareas([
                ...tareas,
                {id: shortid.generate(), nombreTarea: tarea}
            ]);
            setTarea('');
            setError(null);
        }
        return;
    }

    const eliminarTarea = id => {
        const arrayFiltrado = tareas.filter(item => item.id !== id);
        setTareas(arrayFiltrado);
    }

    const editarTarea = item => {
        setModoEdicion(true);
        setTarea(item.nombreTarea);
        setId(item.id);
    }

    const editar = e => {
        e.preventDefault();
        if(!tarea.trim()) {
            console.log('Elemento Vacio');
            setError('Escriba algo por favor...');
            return;
        } else {

            const arrayEditado = tareas.map(
                item => item.id === id ? 
                {id, nombreTarea: tarea} : 
                item);
            
            setTareas(arrayEditado);
            setModoEdicion(false);
            setTarea('');
            setId('');
            setError(null);
        }
        return;
    }


    return (
        <div className="container mt-2">
            <h1 className="text-center">CRUD APP</h1>
            <p className="text-center">Pequeña aplicacion de gestor de datos con las cuatro operaciones básicas.</p>
            <hr className="mb-5"/>
            <div className="row mb-5">

                <div className="col-8">
                    <h4 className="text-center">Lista de Tareas</h4>
                    <ul className="list-group">

                        {

                            tareas.length === 0 ? (
                                <li className='list-group-item'>No hay tareas</li>
                            ) : (

                            tareas.map(item => (
                                
                            <li className="list-group-item" key={item.id}>
                            <span className="lead">{item.nombreTarea}</span>
                            <button
                                className="btn btn-sm btn-danger float-end"
                                onClick={() => eliminarTarea(item.id)}
                            >Eliminar</button>
                            <button
                                className="btn btn-sm btn-warning float-end me-2"
                                onClick={() => editarTarea(item)}
                            >Editar</button>
                            </li>
                            
                            )))
                        }

                    </ul>
                </div>

                <div className="col-4">
                    <h4 className="text-center">
                        {modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'}
                    </h4>
                    <form onSubmit={modoEdicion ? editar : agregarTarea}>

                        {
                            error ? <span className="text-danger">{error}</span> : null
                        }


                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese Tarea"
                            onChange={e => setTarea(e.target.value)}
                            value={tarea}
                        /> 
                            {
                            modoEdicion ? (<button className="btn btn-warning w-100" type="submit">Editar</button>) : 
                            (<button className="btn btn-dark w-100" type="submit">Agregar</button>)
                            }
                    </form>
                </div>
            </div>
            <hr/>

            <div className="row">
                <p>CRUD es una agrupación de cuatro acciones que sirven para gestionar la información que se almacena en diferentes tipos de desarrollo. Asimismo, se usa para comprobar que los desarrollos sean completamente funcionales. En informática, CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar", que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software.</p>
                <p>También es usado el ABCDEF: "Agregar, Buscar, Cambiar, Desplegar (listar), Eliminar, Fichar (Ficha, cédula o Reporte de un registro)".</p>
                <span>Fuente: <a href="https://es.wikipedia.org/wiki/CRUD" target="_BLANCK">wikipedia</a></span>
            </div>

        </div>
    );
}

export default App;