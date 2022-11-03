import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/actions/index';
import Card from '../Card/Card';

export default function Home (){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)

    useEffect (() => {
        dispatch(getPokemons())
    },[])
    
    function handleClick(e){
    e.preventDefault();
    dispatch(getPokemons());
    }

    return (
        <div>
            <Link to = '/pokemon'>Create Pokemon</Link>
            <h1>POKEMON...</h1>
            <button onClick = {e => {handleClick(e)}}>
            Reload Pokemons
            </button>
            <div>
                <select>
                    <option value = 'high'>High Strength</option>
                    <option value = 'low'>Low Strength</option>
                </select>
                <select>
                    <option value = 'all'>All Pokemons</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="fire">Fire</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="shadow">Shadow</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="physic">Psychic</option>
                    <option value="ice">Ice</option>
                </select>
                <select>
                    <option value = 'allpoke'>All</option>
                    <option value = 'apipoke'>Pokemons</option>
                    <option value = 'dbPoke'>Created Pokemon</option>
                </select>

                {allPokemons?.map((p) => {
                        return (
                        <fragment>
                            <Link to ={"/home/"+ p.id}>
                        <Card name = {p.name} img ={p.img} id ={p.id} types ={p.types}/>
                        </Link>
                        </fragment>
                        );
                    })}
            </div>
        </div>
    )
}
