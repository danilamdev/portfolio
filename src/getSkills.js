import fs from 'node:fs/promises'

export async function getSkills(){
  try {
    const files = await fs.readdir('./public/skills')
    return files
   } catch (error) {
    console.log('err', error) 
   }
}
