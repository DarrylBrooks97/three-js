import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { TextureLoader, Box3, Object3D } from 'three';

export default function Earth(props) {
	const mesh = new Object3D(mesh);
	const box = new Box3().setFromObject(mesh);
	box.getCenter(mesh.position);

	mesh.position.multiplyScalar(-1);
	console.log('hehe');

	useFrame(() => (mesh.current.rotation.x += 0.01));
	const colorMap = useLoader(TextureLoader, 'world.jpg');

	return (
		<Sphere args={[2, 64, 64]} ref={mesh}>
			<meshStandardMaterial attach="material" map={colorMap} />
		</Sphere>
	);
}
