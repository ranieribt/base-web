// Configurações

export default function getConfig(prod: boolean, test?: boolean) {
  const lang = 'pt-BR'

  const year = new Date().getFullYear()

  const name = 'appName'

  // const suffix = prod ? '' : test ? '-test' : '-dev'

  // const dbName = name.toLowerCase().replace('.', '-') + suffix

  const url = 'https://www.appname.com/'

  const host = prod ? url.substring(0, url.length - 1) : 'http://localhost:4321'

  const maxCollections = 100

  const itemsPerPage = 6

  const sep = ' • '

  const headline = '--headline--'

  const description =
    '--description'

  const wame_href = "https://wa.me/5591980783376"
  
  const getTitle = (pageTitle = '') =>
    pageTitle ? pageTitle + sep + name : name

  const getDescription = (pageDescription = '') =>
    pageDescription || description

  const getCanonical = (pagePath = '') => url + pagePath.slice(1)

  return {
    lang,
    year,
    name,
    // dbName,
    url,
    host,
    maxCollections,
    itemsPerPage,
    sep,
    headline,
    description,
    wame_href,
    getTitle,
    getDescription,
    getCanonical,
  }
}
