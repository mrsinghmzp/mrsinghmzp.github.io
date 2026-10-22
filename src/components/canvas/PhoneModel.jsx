import { Html, useGLTF, RoundedBox, Cylinder } from '@react-three/drei'
import * as THREE from 'three'
import { useState, useMemo, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import HomeOS from '../ui/HomeOS'

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
}

// --- SHARED GEOMETRY ---
const shape = new THREE.Shape()
const width = 1.5
const height = 3.02
const radius = 0.22
const x = -width / 2
const y = -height / 2

shape.moveTo(x, y + radius)
shape.lineTo(x, y + height - radius)
shape.quadraticCurveTo(x, y + height, x + radius, y + height)
shape.lineTo(x + width - radius, y + height)
shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
shape.lineTo(x + width, y + radius)
shape.quadraticCurveTo(x + width, y, x + width - radius, y)
shape.lineTo(x + radius, y)
shape.quadraticCurveTo(x, y, x, y + radius)

const extrudeSettings = {
    depth: 0.15,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.015, // Smooth edge rounding
    bevelThickness: 0.015
}

// Shared Screen Logic
const ScreenContent = ({ activeAppId, setActiveAppId, occlude, scale = 0.036, width = '1500px', height = '3220px', borderRadius = '190px', osType = 'ios' }) => (
    <Html
        transform
        occlude={occlude}
        position={[0, 0, 0.001]}
        style={{
            width: width,
            height: height,
            backgroundColor: 'transparent',
            overflow: 'hidden',
            borderRadius: borderRadius,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textRendering: 'optimizeLegibility'
        }}
        scale={scale}
    >
        <HomeOS activeAppId={activeAppId} setActiveAppId={setActiveAppId} osType={osType} />
    </Html>
)

// --- SUB-COMPONENTS ---

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') + '/'
const iphoneModelPath = `${baseUrl}models/iphone.glb`
const pixelModelPath = `${baseUrl}models/pixel.glb`

const IPhoneModel = ({ activeAppId, setActiveAppId, ...props }) => {
    // iPhone 17 Pro - Custom Model
    const { scene } = useGLTF(iphoneModelPath)
    const clone = useMemo(() => scene.clone(), [scene])

    return (
        <group {...props} dispose={null}>
            <primitive object={clone} scale={20} position={[0, 0, 0]} rotation={[0, 0, 0]} />

            {/* Screen Content - iOS Edge-to-Edge with Apple Curved Edges */}
            <group position={[0, 0, 0.087]} rotation={[0, 0, 0]}>
                <ScreenContent
                    activeAppId={activeAppId}
                    setActiveAppId={setActiveAppId}
                    occlude
                    scale={0.036}
                    width="1500px"
                    height="3220px"
                    borderRadius="190px"
                    osType="ios"
                />
            </group>
        </group>
    )
}

const PixelModel = ({ activeAppId, setActiveAppId, ...props }) => {
    // Google Pixel Pro - Flagship Hardware with Camera Visor & Aluminum Rails
    const { scene } = useGLTF(pixelModelPath)
    const clone = useMemo(() => {
        const c = scene.clone(true)
        c.traverse((node) => {
            if (node.isMesh) {
                const nodeName = node.name || ''
                const matName = node.material?.name || ''

                // Give the static screen mesh a solid deep black OLED display finish
                if (nodeName.toLowerCase().includes('screen') || matName === 'Screen') {
                    node.visible = true
                    node.material = new THREE.MeshBasicMaterial({ color: '#060608' })
                    return
                }

                if (node.material) {
                    node.material = node.material.clone()
                    const name = matName
                    if (name === 'Frame') {
                        // Aerospace aluminum frame with polished metallic rim
                        node.material.color = new THREE.Color('#383b40')
                        node.material.metalness = 0.88
                        node.material.roughness = 0.22
                    } else if (name === 'CamModule' || name === 'CamModuleBlack') {
                        // Iconic Google Pixel camera visor bar
                        node.material.color = new THREE.Color('#18191c')
                        node.material.metalness = 0.92
                        node.material.roughness = 0.15
                    } else if (name === 'Backtop' || name === 'BackBottom') {
                        // Silky satin matte back glass (Obsidian finish)
                        node.material.color = new THREE.Color('#1e2023')
                        node.material.metalness = 0.15
                        node.material.roughness = 0.38
                    } else if (name === 'Logo') {
                        // Polished Google 'G' emblem
                        node.material.color = new THREE.Color('#e0e2e8')
                        node.material.metalness = 0.95
                        node.material.roughness = 0.15
                    } else if (name === 'Lens') {
                        // Camera multi-layer sapphire lens with deep reflection
                        node.material.metalness = 0.9
                        node.material.roughness = 0.05
                    } else if (name === 'Bezel') {
                        // Deep black bezel
                        node.material.color = new THREE.Color('#08080a')
                        node.material.metalness = 0.5
                        node.material.roughness = 0.1
                    }
                }
            }
        })
        return c
    }, [scene])

    return (
        <group {...props} dispose={null}>
            <primitive
                object={clone}
                scale={13.85}
                position={[-0.002, 0.742, 0]}
                rotation={[0, Math.PI, 0]}
            />

            {/* Screen Content - Edge-to-edge flagship screen-to-body ratio on Google Pixel */}
            <group position={[0, 0.020, 0.144]} rotation={[0, 0, 0]}>
                <ScreenContent
                    activeAppId={activeAppId}
                    setActiveAppId={setActiveAppId}
                    occlude
                    scale={0.036}
                    width="1530px"
                    height="3320px"
                    borderRadius="68px"
                    osType="android"
                />
            </group>
        </group>
    )
}

const LockScreen = () => (
    <Html
        transform
        occlude
        position={[0, 0, 0.001]}
        rotation={[0, 0, Math.PI]}
        style={{ width: '600px', height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        scale={0.024}
    >
        <div style={{ fontSize: '190px', fontWeight: '400', lineHeight: '0.85', marginBottom: '0px', letterSpacing: '-4px' }}>
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </div>
        <div style={{ fontSize: '28px', opacity: 0.6, marginTop: '10px' }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
    </Html>
)

const Flip7Model = ({ activeAppId, setActiveAppId, ...props }) => {
    // Samsung Galaxy Flip 7 - Blue Shadow
    const [isFolded, setIsFolded] = useState(false)
    const [isNearlyUnfolded, setIsNearlyUnfolded] = useState(true)

    // Animation for folding
    const { rotationX, zOffset } = useSpring({
        rotationX: isFolded ? Math.PI * 0.98 : 0,
        zOffset: isFolded ? 0.08 : 0,
        config: { tension: 120, friction: 25 }
    })

    useFrame(() => {
        const currentRotation = rotationX.get()
        const nearlyUnfolded = currentRotation < 0.1
        if (nearlyUnfolded !== isNearlyUnfolded) {
            setIsNearlyUnfolded(nearlyUnfolded)
        }
    })

    // Dimensions
    const halfHeight = 1.51
    const width = 1.28
    const depth = 0.13
    const radius = 0.15
    const blueShadowColor = "#2c3e50"
    const screenColor = "#000000"

    // Shape helpers
    const createHalfShape = (w, h, r) => {
        const shape = new THREE.Shape()
        const x = -w / 2
        const y = -h / 2
        shape.moveTo(x, y + r)
        shape.lineTo(x, y + h - r)
        shape.quadraticCurveTo(x, y + h, x + r, y + h)
        shape.lineTo(x + w - r, y + h)
        shape.quadraticCurveTo(x + w, y + h, x + w, y + h - r)
        shape.lineTo(x + w, y + r)
        shape.quadraticCurveTo(x + w, y, x + w - r, y)
        shape.lineTo(x + radius, y)
        shape.quadraticCurveTo(x, y, x, y + r)
        return shape
    }
    const halfShape = createHalfShape(width, halfHeight, radius)
    const extrudeSettings = { depth, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.01, bevelThickness: 0.01 }

    return (
        <group {...props} dispose={null} onClick={() => setIsFolded(!isFolded)}>
            {/* Bottom Half */}
            <group position={[0, -halfHeight / 2, 0]}>
                <mesh position={[0, 0, -depth / 2]}>
                    <extrudeGeometry args={[halfShape, extrudeSettings]} />
                    <meshStandardMaterial color={blueShadowColor} roughness={0.4} metalness={0.7} />
                </mesh>
                <mesh position={[0, 0, -depth / 2 - 0.01]} rotation={[0, Math.PI, 0]}>
                    <shapeGeometry args={[halfShape]} />
                    <meshStandardMaterial color={blueShadowColor} roughness={0.3} metalness={0.6} side={THREE.BackSide} />
                </mesh>
                <mesh position={[0, 0, 0]}><shapeGeometry args={[halfShape]} /><meshBasicMaterial color="#000000" side={THREE.DoubleSide} /></mesh>
                <mesh position={[0, 0, depth / 2 + 0.01]}>
                    <shapeGeometry args={[halfShape]} />
                    <meshStandardMaterial color={screenColor} roughness={0.0} metalness={0.2} side={THREE.FrontSide} />
                    {!isFolded && isNearlyUnfolded && (
                        <group position={[0, halfHeight / 2, 0.004]}>
                            <mesh position={[0, 0, -0.002]}><planeGeometry args={[1.2, 2.85]} /><meshBasicMaterial color="#000000" side={THREE.DoubleSide} /></mesh>
                            <ScreenContent activeAppId={activeAppId} setActiveAppId={setActiveAppId} occlude scale={0.03} height="3350px" osType="android" />
                        </group>
                    )}
                </mesh>
            </group>

            {/* Top Half */}
            <animated.group position-z={zOffset} rotation-x={rotationX}>
                <mesh position={[0, halfHeight / 2, -depth / 2]}><extrudeGeometry args={[halfShape, extrudeSettings]} /><meshStandardMaterial color={blueShadowColor} roughness={0.4} metalness={0.7} /></mesh>
                <mesh position={[0, halfHeight / 2, -depth / 2 - 0.01]} rotation={[0, Math.PI, 0]}>
                    <shapeGeometry args={[halfShape]} />
                    <meshStandardMaterial color={blueShadowColor} roughness={0.3} metalness={0.6} side={THREE.BackSide} />
                    <mesh position={[0, 0, 0.001]}>
                        <shapeGeometry args={[halfShape]} /><meshStandardMaterial color="#000" roughness={0.0} metalness={0.2} />
                        {isFolded && (
                            <group position={[0, 0, 0.004]}>
                                <mesh position={[0, 0, -0.002]}><planeGeometry args={[1.2, 1.4]} /><meshBasicMaterial color="#000000" side={THREE.DoubleSide} /></mesh>
                                <LockScreen />
                            </group>
                        )}
                    </mesh>
                </mesh>
                <mesh position={[0, halfHeight / 2, 0]}><shapeGeometry args={[halfShape]} /><meshBasicMaterial color="#000000" side={THREE.DoubleSide} /></mesh>
                <mesh position={[0, halfHeight / 2, depth / 2 + 0.01]}>
                    <shapeGeometry args={[halfShape]} /><meshStandardMaterial color={screenColor} roughness={0.0} metalness={0.2} side={THREE.FrontSide} />
                </mesh>
                <group position={[0.35, halfHeight / 2 + 0.5, -depth / 2 - 0.025]}>
                    <Cylinder args={[0.08, 0.08, 0.04, 32]} rotation={[Math.PI / 2, 0, 0]} position={[-0.15, 0, 0]}><meshStandardMaterial color="#111" roughness={0.1} metalness={0.8} /></Cylinder>
                    <Cylinder args={[0.08, 0.08, 0.04, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0.15, 0, 0]}><meshStandardMaterial color="#111" roughness={0.1} metalness={0.8} /></Cylinder>
                </group>
                <RoundedBox args={[0.03, 0.5, 0.06]} radius={0.01} smoothness={4} position={[width / 2 + 0.015, halfHeight / 2 - 0.2, 0]}><meshStandardMaterial color={blueShadowColor} roughness={0.4} metalness={0.7} /></RoundedBox>
            </animated.group>

            <RoundedBox args={[width - 0.1, 0.02, 0.04]} radius={0.005} position={[0, 0, -depth - 0.005]}><meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.95} /></RoundedBox>
            <RoundedBox args={[0.03, 0.35, 0.06]} radius={0.01} position={[width / 2 + 0.015, -0.3, 0]}><meshStandardMaterial color={blueShadowColor} roughness={0.4} metalness={0.7} /></RoundedBox>
        </group>
    )
}

const DefaultModel = ({ activeAppId, setActiveAppId, ...props }) => {
    // Uses shared shape and settings
    return (
        <group {...props} dispose={null}>
            <mesh position={[0, 0, -0.075]}><extrudeGeometry args={[shape, extrudeSettings]} /><meshStandardMaterial color="#3a3a3a" roughness={0.2} metalness={1.0} /></mesh>
            <mesh position={[0, 0, 0]}><shapeGeometry args={[shape]} /><meshBasicMaterial color="#000000" side={THREE.DoubleSide} /></mesh>
            <mesh position={[0, 0, -0.090]} rotation={[0, Math.PI, 0]}><shapeGeometry args={[shape]} /><meshStandardMaterial color="#1c1c1c" roughness={0.1} metalness={0.8} /></mesh>
            <mesh position={[0, 0, 0.090]}>
                <shapeGeometry args={[shape]} /><meshStandardMaterial color="black" roughness={0.0} metalness={0.2} />
                <group position={[0, 0, 0.001]}>
                    <ScreenContent activeAppId={activeAppId} setActiveAppId={setActiveAppId} occlude scale={0.038} />
                </group>
            </mesh>
        </group>
    )
}

// --- MAIN COMPONENT ---
const PhoneModel = ({ modelType = 'default', activeAppId, setActiveAppId, ...props }) => {
    const isMobile = useMobile()
    const mobileScale = 0.40 // Scaled cleanly for mobile view
    const desktopScale = 0.75 // Default desktop scale

    // Merge passed scale with our responsive scale
    // If props.scale is provided, use it, otherwise use responsive default
    const finalScale = props.scale && props.scale !== 0.75
        ? props.scale
        : (isMobile ? mobileScale : desktopScale)

    // Position at [0, 0, 0] on desktop so it rotates purely from its own center axis
    // Placed lower on mobile at [0, -0.68, 0] with OrbitControls target at [0, 0, 0] to push device cleanly to the bottom
    const responsivePosition = isMobile ? [0, -0.68, 0] : [0, 0, 0]

    const responsiveProps = {
        ...props,
        scale: finalScale,
        position: props.position !== undefined ? props.position : responsivePosition,
        activeAppId,
        setActiveAppId
    }

    if (modelType === 'iphone' || modelType === 'ios' || modelType === 'default') return <IPhoneModel {...responsiveProps} />
    if (modelType === 'pixel' || modelType === 'android') return <PixelModel {...responsiveProps} />
    if (modelType === 'flip7') return <Flip7Model {...responsiveProps} />
    return <IPhoneModel {...responsiveProps} />
}

// Preload models
useGLTF.preload(iphoneModelPath)
useGLTF.preload(pixelModelPath)

export default PhoneModel
