import {useFetch} from "../hooks/useFetch.ts";

export default function FetchingHook() {
    const urlBase = 'https://jsonplaceholder.typicode.com/users';
    const {data, loading, error, handleCancelRequest} = useFetch(urlBase)
    return (
        <>
            <button onClick={handleCancelRequest}>Cancelar Peticion
            </button>
            <div className="container mt-5 border border-2">
                <h1 className="display-3">Hola desde Fetching Base</h1>
                <ul className="container w-50">
                    {loading && <h2 className="display-1">
                        Cargando Datos...</h2>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    {data.map(user => (
                        <div className="card shadow m-3"
                             key={user.id}>
                            <h2 className="card-title">{user.name}</h2>
                            <h6 className="card-subtitle">{user.phone}</h6>
                            <p className="card-text">{user.email}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}