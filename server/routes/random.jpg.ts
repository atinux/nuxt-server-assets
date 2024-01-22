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

  // const image = await images.getItemRaw<ArrayBuffer>(randomImageId)
  const image = await images.getItemRaw(randomImageId)

  return new Response(image, {
    headers: {
      'Content-Type': 'image/jpeg',
      // 'Content-Length': image!.byteLength.toString()
    }
  })
})