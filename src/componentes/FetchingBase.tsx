import {useEffect, useState} from "react";
type User={
    id:number;
    name:string;
    email:string;
    phone:string;
}
export default function  FetchingBase(){
    const [data , setData]= useState<User[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return(
        <div className="container mt-5 border border-2">
            <h1 className="display-3">Hola desde Fetching Base</h1>
            <ul className="container w-50">
                {data.map(user=>(
                    <div className="card shadow m-3"
                    key={user.id}>
                        <h2 className="card-title">{user.name}</h2>
                        <h6 className="card-subtitle">{user.phone}</h6>
                        <p className="card-text">{user.email}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}