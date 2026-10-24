import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useState, useMemo, useEffect, useRef } from 'react'
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

// Shared Screen Logic with Deterministic Camera-Facing Occlusion
const ScreenContent = ({ activeAppId, setActiveAppId, scale = 0.036, width = '1500px', height = '3220px', borderRadius = '190px', osType = 'ios' }) => {
    const screenGroupRef = useRef()
    const [isFacingCamera, setIsFacingCamera] = useState(true)

    useFrame(({ camera }) => {
        if (!screenGroupRef.current) return

        // Compute screen surface normal in world space
        const normal = new THREE.Vector3(0, 0, 1)
        normal.applyQuaternion(screenGroupRef.current.getWorldQuaternion(new THREE.Quaternion()))

        // Vector from screen to camera
        const screenPos = screenGroupRef.current.getWorldPosition(new THREE.Vector3())
        const toCamera = camera.getWorldPosition(new THREE.Vector3()).sub(screenPos).normalize()

        // Facing camera if dot product > 0.06 (screen facing user, hides cleanly at edge-on/rear)
        const facing = normal.dot(toCamera) > 0.06
        if (facing !== isFacingCamera) {
            setIsFacingCamera(facing)
        }
    })

    return (
        <group ref={screenGroupRef}>
            <Html
                transform
                position={[0, 0, 0.001]}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: 'transparent',
                    overflow: 'hidden',
                    borderRadius: borderRadius,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    display: isFacingCamera ? 'block' : 'none',
                    pointerEvents: isFacingCamera ? 'auto' : 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }}
                scale={scale}
            >
                <HomeOS activeAppId={activeAppId} setActiveAppId={setActiveAppId} osType={osType} />
            </Html>
        </group>
    )
}

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') + '/'
const iphoneModelPath = `${baseUrl}models/iphone.glb`
const pixelModelPath = `${baseUrl}models/pixel.glb`

const IPhoneModel = ({ activeAppId, setActiveAppId, ...props }) => {
    // iPhone 17 Pro - Custom Model
    const { scene } = useGLTF(iphoneModelPath)
    const clone = useMemo(() => {
        const c = scene.clone(true)
        c.traverse((node) => {
            if (node.isMesh) {
                const nodeName = node.name || ''
                const matName = node.material?.name || ''
                // Give the static screen mesh a solid deep black OLED display finish
                if (nodeName.toLowerCase().includes('screen') || matName === 'Screen' || matName === 'Display') {
                    node.visible = true
                    node.material = new THREE.MeshBasicMaterial({ color: '#050505' })
                }
            }
        })
        return c
    }, [scene])

    return (
        <group {...props} dispose={null}>
            {/* Center the 3D phone model so that its front screen surface is at Z = 0 */}
            <primitive object={clone} scale={20} position={[0, 0, -0.087]} rotation={[0, 0, 0]} />

            {/* Screen Content - Positioned at Z = 0.001 flush with front display glass */}
            <group position={[0, 0, 0.001]} rotation={[0, 0, 0]}>
                <ScreenContent
                    activeAppId={activeAppId}
                    setActiveAppId={setActiveAppId}
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
            {/* Center the Google Pixel model so that its front screen surface is at Z = 0 and centered in X, Y */}
            <primitive
                object={clone}
                scale={13.85}
                position={[-0.031, 0.742, -0.140]}
                rotation={[0, Math.PI, 0]}
            />

            {/* Screen Content - Positioned flush with front display surface at origin */}
            <group position={[-0.005, 0.000, 0.001]} rotation={[0, 0, 0]}>
                <ScreenContent
                    activeAppId={activeAppId}
                    setActiveAppId={setActiveAppId}
                    scale={0.036}
                    width="1544px"
                    height="3355px"
                    borderRadius="68px"
                    osType="android"
                />
            </group>
        </group>
    )
}

// --- MAIN COMPONENT ---
const PhoneModel = ({ modelType = 'iphone', activeAppId, setActiveAppId, ...props }) => {
    const isMobile = useMobile()
    const mobileScale = 0.36 // Scaled cleanly for mobile view with generous top/bottom breathing room
    const desktopScale = 0.75 // Default desktop scale

    // Merge passed scale with our responsive scale
    const finalScale = props.scale && props.scale !== 0.75
        ? props.scale
        : (isMobile ? mobileScale : desktopScale)

    // Centered at [0, 0, 0] so device rotates perfectly on its center axis in all views
    const responsivePosition = [0, 0, 0]

    const responsiveProps = {
        ...props,
        scale: finalScale,
        position: props.position !== undefined ? props.position : responsivePosition,
        activeAppId,
        setActiveAppId
    }

    if (modelType === 'pixel' || modelType === 'android') {
        return <PixelModel {...responsiveProps} />
    }
    return <IPhoneModel {...responsiveProps} />
}

// Preload models
useGLTF.preload(iphoneModelPath)
useGLTF.preload(pixelModelPath)

export default PhoneModel
