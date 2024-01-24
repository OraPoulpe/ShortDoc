export const generateFileId = () => {
  let result = ""
  const characters = "0123456789qwertyuiopasdfghjklzxcvbnm"

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }
  
  return result
}
