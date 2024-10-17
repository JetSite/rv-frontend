import { redirect } from 'next/navigation'
import { FC } from 'react'

const Home: FC = async () => {
  return redirect('/ru')
}

export default Home
