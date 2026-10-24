import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import PhoneModel from './components/canvas/PhoneModel'
import Overlay from './components/ui/Overlay'
import AnimatedBackground from './components/ui/AnimatedBackground'
import MobileDeviceNotice from './components/ui/MobileDeviceNotice'

function App() {
  const [phoneModel, setPhoneModel] = useState('iphone')
  const [activeAppId, setActiveAppId] = useState(null)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
  const [isDrag3DActive, setIsDrag3DActive] = useState(false)

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
        isDrag3DActive={isDrag3DActive}
        setIsDrag3DActive={setIsDrag3DActive}
      />

      {/* Mobile Notice Popup */}
      <MobileDeviceNotice isMobile={isMobile} />

      {/* 3D Scene - Positioned below text/buttons on mobile, right column on desktop */}
      <div
        className={`absolute right-0 z-0 ${
          isDrag3DActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
        style={{
          top: isMobile ? '310px' : '0px',
          bottom: '0px',
          left: isMobile ? '0px' : 'auto',
          width: isMobile ? '100%' : '60vw',
          touchAction: isDrag3DActive ? 'none' : 'pan-y'
        }}
      >
        <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} />
          <directionalLight position={[-5, -5, -5]} intensity={0.4} />

          <Suspense fallback={null}>
            <Environment preset="city" />
          </Suspense>

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
            position={isMobile ? [0, -1.25, 0] : [0, -1.8, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />
          <OrbitControls
            enabled={isDrag3DActive}
            target={[0, 0, 0]}
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            minPolarAngle={0.05}
            maxPolarAngle={Math.PI - 0.05}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default App
