import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { ACESFilmicToneMapping } from 'three';
import Earth from '../components/Earth';

export default function IndexPage() {
	return (
		<>
			<Canvas
				camera={{ position: [2, 0, 10], fov: 40, far: 10000 }}
				onCreated={({ gl }) => {
					gl.gammaInput = true;
					gl.toneMapping = ACESFilmicToneMapping;
				}}
			>
				<ambientLight intensity={3} />
				<Suspense fallback={null}>
					<Earth position={[2, 0, 1]} />
				</Suspense>
				<OrbitControls
					enableDamping={true}
					dampingFactor={0.05}
					enableZoom={false}
					maxPolarAngle={Math.PI / 1.9}
					minPolarAngle={Math.PI / 3}
					screenSpacePanning={true}
				/>
			</Canvas>
		</>
	);
}
