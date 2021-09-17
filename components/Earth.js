import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { TextureLoader, Box3, Object3D, Group, Scene as scene } from 'three';

export default function Earth(props) {
	const mesh = new Object3D();
	const box = new Box3().setFromObject(mesh);
	const colorMap = useLoader(TextureLoader, 'world.jpg');

	// Update rotation axis
	box.center(mesh.position);
	mesh.position.multiplyScalar(-1);

	// Animation
	useFrame(() => (mesh.current.rotation.y += 0.001));

	return (
		<Sphere args={[2, 64, 64]} ref={mesh}>
			<meshStandardMaterial attach="material" map={colorMap} />
		</Sphere>
	);
}
