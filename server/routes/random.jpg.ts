// Images credits
// https://unsplash.com/@conti_photos
// https://unsplash.com/@denislinine
// https://unsplash.com/@powwpic
// https://unsplash.com/@timstief

export default eventHandler(async (event) => {
  // https://nitro.unjs.io/guide/assets#server-assets
  const images = useStorage('assets/server/images')
  const imagesIds = await images.getKeys()
  const randomImageId = imagesIds[Math.floor(Math.random() * imagesIds.length)]

  const image = await images.getItemRaw(randomImageId)

  const meta = (await images.getMeta(
    randomImageId
  )) as unknown as { type: string; etag: string; mtime: string }
  meta.type && setResponseHeader(event, 'content-type', meta.type)
  meta.etag && setResponseHeader(event, 'etag', meta.etag)
  meta.mtime && setResponseHeader(event, 'last-modified', meta.mtime)

  return image
})
