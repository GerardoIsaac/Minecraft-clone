import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './Components/Ground'
import { FPV as Fpv } from './Components/FPV'
import { Player } from './Components/Player'
import { Cubes } from './Components/Cubes'
import { TextureSelector } from './Components/TextureSelect'

function App () {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
      <TextureSelector />
    </>
  )
}

export default App
