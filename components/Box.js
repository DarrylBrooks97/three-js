import { useRef } from 'react'
import { useFrame,useLoader } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { TextureLoader } from 'three'

export default function Box(props) {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x  += 0.01))
  const colorMap = useLoader(TextureLoader, 'world.jpg')

  return (
    <Sphere
    args={[2, 64, 64]}
    ref={mesh}
    >
      <meshStandardMaterial attach="material" map={colorMap} bumpScale={0.05}/>
    </Sphere>
  )
}
