const token = '<INSERTA TU API KEY AQUI>'

export const urlCategories = `https://www.eventbriteapi.com/v3/categories/?token=${token}&locale=es_ES`

export const setUrlEvents = (name, category) =>
    `https://www.eventbriteapi.com/v3/events/search/?token=${token}&locale=es_ES&q=${name}
     &categories=${category}&sort_by=date`
