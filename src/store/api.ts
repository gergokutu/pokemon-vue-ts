import axios, { AxiosResponse } from 'axios'
import { IPokeCard, Detail, PokeType } from './model'

export const apiCall = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export async function fetchPokemons(url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`): Promise<AxiosResponse<IPokeCard> | undefined> {
  try {
    const response = await axios.get(
      url
    )
    return response
  } catch (err) {
    console.error(err)
  }
}

export async function fetchDetails(actualURL: string): Promise<AxiosResponse<Detail> | undefined> {
  const url = actualURL
  try {
    const response = await axios.get(
      url
    )
    return response
  } catch (err) {
    console.error(err)
  }
}

export async function randomPokemon(): Promise<AxiosResponse<Detail> | undefined> {
  const randomID = Math.ceil(Math.random() * 800)
  try {
    const response = await apiCall.get(
      `/pokemon/${randomID}`
    )
    return response
  } catch (err) {
    console.error(err)
  }
}

export async function fetchCategories(): Promise<AxiosResponse<PokeType> | undefined> {
  try {
    const response = await apiCall.get(
      '/type'
    )
    return response
  } catch (err) {
    console.error(err)
  }
}