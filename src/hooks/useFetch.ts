import {useEffect, useState} from "react";

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export function useFetch(url: string) {
    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)
    const [controller, setController] = useState<AbortController | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);

        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => setData(data)) //comentar si quieres probar el manejo de errores
            // .then(data => setError('Ocurrio un error al obtener los datos')) // Para probar el manejo de errores
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Peticion Cancelada');
                } else {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))

        return()=>{
            abortController.abort();
        }
    }, []);

    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
            setError("Request Cancelled by User");
        }
    }

    return {data, loading, error, handleCancelRequest};
}