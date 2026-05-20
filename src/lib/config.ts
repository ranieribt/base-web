// Configurações para Astro

import getConfig from './getConfig'

export const prod = import.meta.env.PROD

// export const test = import.meta.env.TEST

const config = getConfig(prod)

export const lang = config.lang

export const year = config.year

export const name = config.name

// export const dbName = config.dbName

export const url = config.url

export const host = config.host

export const maxCollections = config.maxCollections

export const itemsPerPage = config.itemsPerPage

export const sep = config.sep

export const headline = config.headline

export const description = config.description

export const wame_href = config.wame_href

export const getTitle = config.getTitle

export const getDescription = config.getDescription

export const getCanonical = config.getCanonical
