import axios, { AxiosResponse } from 'axios'
// 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
import { IPokeCard } from './model'

export const apiCall = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export async function fetchPokemons(): Promise<AxiosResponse<IPokeCard> | undefined> {
  try {
    const response = await apiCall.get(
      '/pokemon?limit=10&offset=0'
    )
    return response
  } catch (err) {
    console.error(err)
  }
}

export async function fetchDetails() {
  const url = 'https://pokeapi.co/api/v2/pokemon/1'
  try {
    const response = await axios.get(
      url
    )
    return response
  } catch (err) {
    console.error(err)
  }
}