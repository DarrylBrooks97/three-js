import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { ACESFilmicToneMapping } from 'three';
import Earth from '../components/Earth';

export default function IndexPage() {
	return (
		<>
			<Canvas
				camera={{ position: [0, 0, 10], fov: 40, far: 10000 }}
				onCreated={({ gl }) => {
					gl.gammaInput = true;
					gl.toneMapping = ACESFilmicToneMapping;
				}}
			>
				<ambientLight intensity={2} />
				<Suspense fallback={null}>
					<Earth position={[5, 0, 0]} />
				</Suspense>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 1.9}
					minPolarAngle={Math.PI / 3}
				/>
			</Canvas>
		</>
	);
}
