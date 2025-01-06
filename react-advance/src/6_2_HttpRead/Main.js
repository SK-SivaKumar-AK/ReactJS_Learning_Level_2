import React, { useEffect, useState } from "react";
import style from './Main.module.css';

function Main(){

    const [users , setUsers] = useState( [] );
    const [newId , setnewId] = useState('');
    const [newName , setnewName] = useState('');
    const [newEmail , setnewEmail] = useState('');
    const [newWebsite , setnewWebsite] = useState('');


    
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users').then( (res) => {
            return res.json();
        }).then( ( jsonData) => {
            setUsers(jsonData);
        });
    } , [] );

    function addUser(){
        const id = newId.trim();
        const name = newName.trim();
        const email = newEmail.trim();
        const website = newWebsite.trim();
        if(name && email && website){
            fetch('https://jsonplaceholder.typicode.com/users' , {
                method : 'POST',
                body : JSON.stringify({
                    id,
                    name , 
                    email , 
                    website
                }),
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            }).then((res) => {
                return res.json();
            }).then((data) => {
                setUsers([...users , data]);
                setnewId('');
                setnewName('');
                setnewEmail('');
                setnewWebsite('');
            })
        }
    }

    function onChangeHandler(id , key , value){
        setUsers((users) => {
            return users.map((user) => {
                return user.id === id ? {...user , [key]: value} : user;
            })
        })
    }

    function updateUser(id){
        const findUsers = users.find((user) => {
            return user.id === id;
        });
        fetch(`https://jsonplaceholder.typicode.com/users/${id}` , {
            method : 'PUT',
            body : JSON.stringify(findUsers),
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setnewId('');
            setnewName('');
            setnewEmail('');
            setnewWebsite('');
        })
    }

    function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}` , {
            method : 'DELETE',
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setUsers((users) => {
                return users.filter((user) => {
                    return user.id !== id;
                })
            })
            setnewId('');
            setnewName('');
            setnewEmail('');
            setnewWebsite('');
        })
    }


    return (
        <div className={style.App}>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Website
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( (user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td><input type="text" id={'name'+user.id} name="name" value={user.name}  autoComplete="false" onChange={ (value) => { onChangeHandler(user.id , 'name' , user.name) } }/></td>
                                    <td><input type="text" id={'email'+user.id} name="email" value={user.email}  autoComplete="false" onChange={ (value) => { onChangeHandler(user.id , 'email' , user.email) } }/></td>
                                    <td><input type="text" id={'website'+user.id} name="website" value={user.website}  autoComplete="false" onChange={ (value) => { onChangeHandler(user.id , 'website' , user.website) } }/></td>
                                    <td>
                                        <button onClick={() => updateUser(user.id)}>Update</button>
                                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        } )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                        <input type="text" id="newId" name="newId" value={newId} onChange={ (e) => { setnewId(e.target.value) } } autoComplete="false"/>
                        </td>
                        <td>
                            <input type="text" id="newName" name="newName" value={newName} onChange={ (e) => { setnewName(e.target.value) } } autoComplete="false"/>
                        </td>
                        <td>
                            <input type="text" id="newEmail" name="newEmail" value={newEmail} onChange={ (e) => { setnewEmail(e.target.value) } } autoComplete="false"/>
                        </td>
                        <td>
                            <input type="text" id="newWebsite" name="newWebsite" value={newWebsite} onChange={ (e) => { setnewWebsite(e.target.value) } } autoComplete="false"/>
                        </td>
                        <td>
                            <button onClick={addUser}>Add User</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Main;