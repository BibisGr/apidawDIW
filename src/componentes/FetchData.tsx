import {Suspense} from "react";
import {fetchDatanoHook} from "./fetchDataNoHook.ts";

const apiData = fetchDatanoHook('http://jsonplaceholder.typicode.com/users');
export default function FetchData(){

    const data = apiData.read();
    return(
        <>
        <h1>Hola desde FetchDataNoHook</h1>
        <Suspense fallback={<div>Loading...</div>}>
            {data?.map((user: {
                id: number;
                name: string;
                email: string;
                phone: string;
            }) => <div className="card shadow m-3"
                      key={user.id}>
                    <h2 className="card-title">{user.name}</h2>
                    <h6 className="card-subtitle">{user.phone}</h6>
                    <p className="card-text">{user.email}</p>
                </div>
            )})
        </Suspense>
        </>
    )
}