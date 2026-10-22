import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import PhoneModel from './components/canvas/PhoneModel'
import Overlay from './components/ui/Overlay'
import AnimatedBackground from './components/ui/AnimatedBackground'

function App() {
  const [phoneModel, setPhoneModel] = useState('iphone')
  const [activeAppId, setActiveAppId] = useState(null)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full min-h-screen relative">
      {/* Animated Gradient Background - Behind everything */}
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>

      <Overlay
        setPhoneModel={setPhoneModel}
        currentModel={phoneModel}
        setActiveAppId={setActiveAppId}
      />

      {/* 3D Scene - Positioned on right column on desktop, lower half on mobile */}
      <div className="absolute top-0 right-0 w-full md:w-[60vw] h-screen z-0 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />

          <Suspense fallback={null}>
            <group rotation={[0, 0, 0]}> {/* Initial rotation to face user */}
              <PhoneModel
                modelType={phoneModel}
                activeAppId={activeAppId}
                setActiveAppId={setActiveAppId}
              />
            </group>
          </Suspense>

          <ContactShadows
            position={isMobile ? [0, -1.35, 0] : [0, -1.8, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />
          <OrbitControls
            target={[0, 0, 0]}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default App
