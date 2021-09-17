import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'
import { Suspense } from 'react'
import {ACESFilmicToneMapping} from 'three'

export default function BoxesPage() {
  return (
    <>
      <h1>Click on me - Hover me :)</h1>
      <Canvas camera={{ position: [0, 0, 10],fov:40,far:10000 }} onCreated={({ gl }) => {
      gl.gammaInput = true
      gl.toneMapping = ACESFilmicToneMapping
    }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={null}>
          <Box position={[10, 0, 0]} />
        </Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI } minPolarAngle={(Math.PI) / 2}/>
      </Canvas>
    </>
  )
}
