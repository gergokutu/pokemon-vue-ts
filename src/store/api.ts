import axios, { AxiosResponse } from 'axios'
// 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
import { IPokeCard } from './model'

export const apiCall = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export async function fetchPokemons(): Promise<IPokeCard[] | undefined> {
  try {
    return axios.get(
      '?limit=10&offset=0'
    )
  } catch (err) {
    console.error(err)
  }
}