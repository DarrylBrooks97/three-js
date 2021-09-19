import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Box3, Group, Object3D, TextureLoader, Vector3 } from 'three';

export default function Earth(props) {
	const mesh = useRef();
	const colorMap = useLoader(TextureLoader, 'world.jpg');
	// var box = new Box3().setFromObject(mesh);
	var pivot = new Group();

	// useFrame(() => {
	// 	if (mesh.current) {
	// 		box.getCenter(new Vector3(props.position));
	// 		box.mesh.position.multiplyScalar(-1);
	// 		pivot.add(mesh);
	// 	}
	// });

	console.log(mesh.current);
	// Animation
	useFrame(() => (mesh.current.rotation.y += 0.001));

	return (
		<Sphere args={[2, 64, 64]} {...props} ref={mesh}>
			<meshPhysicalMaterial attach="material" map={colorMap} />
		</Sphere>
	);
}
