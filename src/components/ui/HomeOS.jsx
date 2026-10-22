import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutGrid, MessageSquare, Briefcase, User, Github, Linkedin, Battery, Wifi, Signal, ChevronLeft, ExternalLink, Music, Settings, Image as ImageIcon, Moon, Sun, Globe, Upload, Play, SkipForward, Pause, X, Check, Mail, Mic, Camera, Search, Phone, PhoneCall, PhoneOff, MicOff, Volume2, Star, Clock, Users, Voicemail, Plus, Video, Send, Inbox, Archive, Reply, Trash2 } from 'lucide-react'
import { translations } from './translations'

// Wallpaper Imports
import wallpaperAndroid from '../../assets/wallpapers/google_wall.avif'
import wallpaperAndroidBlack from '../../assets/wallpapers/android_black.avif'
import wallpaperAndroidRed from '../../assets/wallpapers/android_wall.avif'
import wallpaperIphone from '../../assets/wallpapers/iphone_wall.avif'
import profilePic from '../../assets/profile.avif'

// Photo Imports
import photo1 from '../../assets/photos/photo1.avif'
import photo2 from '../../assets/photos/photo2.avif'
import photo3 from '../../assets/photos/photo3.avif'

import projectKranti from '../../assets/projects/kranti-app.avif'
import projectCityConnect from '../../assets/projects/city-connect.avif'
import projectResumeAnalyzer from '../../assets/projects/resume-analyzer.avif'
import projectLms from '../../assets/projects/lms-app.avif'
import projectVindhya from '../../assets/projects/vindhya-almirah.avif'

// --- AUTHENTIC iOS APP ICONS ---
const IosPhotosIcon = () => {
    const petals = [
        { rot: 0, color: '#FFD600' },
        { rot: 45, color: '#FF9500' },
        { rot: 90, color: '#FF3B30' },
        { rot: 135, color: '#FF2D55' },
        { rot: 180, color: '#AF52DE' },
        { rot: 225, color: '#5856D6' },
        { rot: 270, color: '#007AFF' },
        { rot: 315, color: '#34C759' },
    ]
    return (
        <div className="w-full h-full bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F5F5F7] flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-[74%] h-[74%]">
                <g transform="translate(50, 50)">
                    {petals.map((p, idx) => (
                        <rect
                            key={idx}
                            x="-6.5"
                            y="-37"
                            width="13"
                            height="30"
                            rx="6.5"
                            fill={p.color}
                            opacity="0.9"
                            transform={`rotate(${p.rot})`}
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    ))}
                    <circle r="7" fill="#FFFFFF" opacity="0.95" />
                </g>
            </svg>
        </div>
    )
}

const IosMusicIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#FA2D55] via-[#FA233B] to-[#D61633] flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[64%] h-[64%] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
            <path d="M72 20.5v43.2c0 6.2-5.4 11.3-12 11.3s-12-5.1-12-11.3 5.4-11.3 12-11.3c2.4 0 4.6.7 6.4 1.9V32.8L37.6 38.6v28.1c0 6.2-5.4 11.3-12 11.3s-12-5.1-12-11.3 5.4-11.3 12-11.3c2.4 0 4.6.7 6.4 1.9V28.2c0-2.4 1.8-4.4 4.2-4.9l31.2-6.5c2.7-.6 5.4 1.4 5.4 4.2v-0.5z" />
        </svg>
    </div>
)

const IosContactIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#4CD964] via-[#34C759] to-[#28B446] flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[64%] h-[64%] fill-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
            <path d="M76.5 68.2l-11.8-3.4c-1.4-.4-2.9 0-3.9 1l-5.6 5.6C44.7 65.5 38.5 59.3 32.6 48.8l5.6-5.6c1-1 1.4-2.5 1-3.9l-3.4-11.8c-.5-1.8-2.2-3-4-3H20.6c-2.4 0-4.4 2-4.2 4.4 1.7 20.3 17.9 36.5 38.2 38.2 2.4.2 4.4-1.8 4.4-4.2v-11.2c0-1.8-1.2-3.5-3-3.9z" />
        </svg>
    </div>
)

const IosSettingsIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#8E8E93] via-[#636366] to-[#48484A] flex items-center justify-center relative overflow-hidden">
        <div className="absolute w-[80%] h-[80%] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute w-[56%] h-[56%] rounded-full border border-white/10 pointer-events-none" />
        <Settings size={120} color="#FFFFFF" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10" />
    </div>
)

const IosProjectsIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#2EAEFF] via-[#007AFF] to-[#0056D6] flex items-center justify-center relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-[68%] h-[68%] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            <circle cx="50" cy="50" r="48" fill="white" opacity="0.06" />
            <rect
                x="44"
                y="14"
                width="12"
                height="72"
                rx="6"
                transform="rotate(30 50 50)"
                fill="#FFFFFF"
            />
            <rect
                x="17"
                y="55"
                width="66"
                height="12"
                rx="6"
                fill="#FFFFFF"
                style={{ filter: 'drop-shadow(0 -1px 2px rgba(0,0,0,0.12))' }}
            />
            <rect
                x="44"
                y="14"
                width="12"
                height="72"
                rx="6"
                transform="rotate(-30 50 50)"
                fill="#FFFFFF"
                style={{ filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.15))' }}
            />
            <circle cx="50" cy="20" r="6" fill="#FFFFFF" />
        </svg>
    </div>
)

const IosAboutIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#7A828E] via-[#5F6672] to-[#454A53] flex items-center justify-center relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[12%] flex flex-col justify-around py-3 opacity-90">
            <div className="w-full h-[20%] bg-[#FF3B30] rounded-l-md" />
            <div className="w-full h-[20%] bg-[#FF9500] rounded-l-md" />
            <div className="w-full h-[20%] bg-[#34C759] rounded-l-md" />
            <div className="w-full h-[20%] bg-[#007AFF] rounded-l-md" />
        </div>
        <svg viewBox="0 0 100 100" className="w-[62%] h-[62%] fill-white -translate-x-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <circle cx="50" cy="34" r="16" />
            <path d="M50 56c-16.6 0-30 11.4-30 25.5v3.5c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-3.5C80 67.4 66.6 56 50 56z" />
        </svg>
    </div>
)

const IosGithubIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#2D333B] via-[#1E232A] to-[#121518] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-[64%] h-[64%] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    </div>
)

const IosLinkedinIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#0A73B7] via-[#006097] to-[#004B76] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-[64%] h-[64%] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    </div>
)

const IosPortfolioIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#1B7CFF] via-[#0A84FF] to-[#0055D4] flex items-center justify-center relative overflow-hidden">
        {/* Apple Safari Compass Dial */}
        <svg viewBox="0 0 100 100" className="w-[74%] h-[74%] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            {/* Outer Dial Rings */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2.5" opacity="0.35" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" />
            
            {/* Compass Dial Ticks */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                    key={deg}
                    x1="50" y1="9" x2="50" y2={deg % 90 === 0 ? "15" : "12"}
                    stroke="white"
                    strokeWidth={deg % 90 === 0 ? "2.5" : "1.5"}
                    opacity={deg % 90 === 0 ? "0.9" : "0.5"}
                    transform={`rotate(${deg} 50 50)`}
                />
            ))}
            
            {/* Compass Needle (Tilted at 45deg) */}
            <g transform="rotate(45 50 50)">
                {/* Red North Needle */}
                <polygon points="50,14 43,50 50,47" fill="#FF3B30" />
                <polygon points="50,14 57,50 50,47" fill="#FF453A" style={{ filter: 'brightness(0.9)' }} />
                
                {/* White South Needle */}
                <polygon points="50,86 43,50 50,53" fill="#E5E5EA" />
                <polygon points="50,86 57,50 50,53" fill="#FFFFFF" />
                
                {/* Center Pivot */}
                <circle cx="50" cy="50" r="4.5" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
                <circle cx="50" cy="50" r="2" fill="#8E8E93" />
            </g>
        </svg>
    </div>
)

const IosMailIcon = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#4EA6FF] via-[#1A7CFF] to-[#0055D4] flex items-center justify-center relative overflow-hidden">
        {/* Apple Mail Envelope */}
        <svg viewBox="0 0 100 100" className="w-[74%] h-[74%] drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
            <rect x="10" y="24" width="80" height="52" rx="12" fill="#FFFFFF" />
            <path d="M10 28 L50 56 L90 28" fill="none" stroke="#D0E3FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 26 L50 54 L90 26" fill="none" stroke="#1A7CFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 74 L38 48" stroke="#E1EEFF" strokeWidth="4" strokeLinecap="round" />
            <path d="M90 74 L62 48" stroke="#E1EEFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
    </div>
)

// --- AUTHENTIC ANDROID APP ICONS (Material You Circle Design) ---
const GoogleGLogo = () => (
    <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
)

const AndroidPhotosIcon = () => (
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-[82%] h-[82%]">
            <g transform="translate(50, 50)">
                <path d="M0 0 V -38 A 19 19 0 0 1 19 -19 H 0 Z" fill="#FBBC05" />
                <path d="M0 0 H 38 A 19 19 0 0 1 19 19 V 0 Z" fill="#34A853" />
                <path d="M0 0 V 38 A 19 19 0 0 1 -19 19 H 0 Z" fill="#4285F4" />
                <path d="M0 0 H -38 A 19 19 0 0 1 -19 -19 V 0 Z" fill="#EA4335" />
            </g>
        </svg>
    </div>
)

const AndroidMusicIcon = () => (
    <div className="w-full h-full rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg relative">
        <svg viewBox="0 0 100 100" className="w-[70%] h-[70%] fill-white">
            <circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="8" />
            <polygon points="44,35 66,50 44,65" fill="white" />
        </svg>
    </div>
)

const AndroidContactIcon = () => (
    <div className="w-full h-full rounded-full bg-[#0F9D58] flex items-center justify-center shadow-lg relative">
        <svg viewBox="0 0 100 100" className="w-[66%] h-[66%] fill-white">
            <path d="M76.5 68.2l-11.8-3.4c-1.4-.4-2.9 0-3.9 1l-5.6 5.6C44.7 65.5 38.5 59.3 32.6 48.8l5.6-5.6c1-1 1.4-2.5 1-3.9l-3.4-11.8c-.5-1.8-2.2-3-4-3H20.6c-2.4 0-4.4 2-4.2 4.4 1.7 20.3 17.9 36.5 38.2 38.2 2.4.2 4.4-1.8 4.4-4.2v-11.2c0-1.8-1.2-3.5-3-3.9z" />
        </svg>
    </div>
)

const AndroidSettingsIcon = () => (
    <div className="w-full h-full rounded-full bg-[#49454F] flex items-center justify-center shadow-lg relative">
        <Settings size={120} color="#FFFFFF" />
    </div>
)

const AndroidAboutIcon = () => (
    <div className="w-full h-full rounded-full bg-[#1A73E8] flex items-center justify-center shadow-lg relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-[66%] h-[66%] fill-white">
            <circle cx="50" cy="35" r="16" />
            <path d="M50 56c-17 0-31 11.5-31 26v4h62v-4c0-14.5-14-26-31-26z" />
        </svg>
    </div>
)

const AndroidProjectsIcon = () => (
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-[72%] h-[72%]">
            <path d="M22 14l48 28-20 8-28-36z" fill="#34A853" />
            <path d="M22 14l28 36-28 36V14z" fill="#4285F4" />
            <path d="M50 50l20 8-48 28 28-36z" fill="#EA4335" />
            <path d="M70 42l14 8c2 1 2 3 0 4l-14 8-6-10 6-10z" fill="#FBBC05" />
        </svg>
    </div>
)

const AndroidGithubIcon = () => (
    <div className="w-full h-full rounded-full bg-[#24292E] flex items-center justify-center shadow-lg">
        <Github size={124} color="#FFFFFF" />
    </div>
)

const AndroidLinkedinIcon = () => (
    <div className="w-full h-full rounded-full bg-[#0A66C2] flex items-center justify-center shadow-lg">
        <Linkedin size={118} color="#FFFFFF" />
    </div>
)

const AndroidPortfolioIcon = () => (
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
        <svg viewBox="0 0 48 48" className="w-[82%] h-[82%]">
            <path fill="#4caf50" d="M44 24c0 11.045-8.955 20-20 20-4.043 0-7.798-1.206-10.94-3.267l8.283-14.346c.807.388 1.708.613 2.657.613 3.314 0 6-2.686 6-6 0-.825-.174-1.609-.475-2.327l14.343-.005C43.931 20.084 44 22.019 44 24z"/>
            <path fill="#fbc02d" d="M13.06 40.733C7.234 36.924 3.393 30.569 3.032 23.238l14.281 2.378c.451 1.696 1.488 3.143 2.904 4.098l-7.157 11.019z"/>
            <path fill="#e53935" d="M24 4c10.428 0 18.995 8.01 19.868 18.232l-14.343.005C28.847 20.474 26.621 19 24 19c-2.348 0-4.385 1.171-5.617 2.956L4.098 7.613C8.613 5.378 15.938 4 24 4z"/>
            <circle cx="24" cy="24" r="8" fill="#1e88e5"/>
        </svg>
    </div>
)

const AndroidMailIcon = () => (
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
        <svg viewBox="0 0 48 48" className="w-[74%] h-[74%]">
            <path fill="#4285F4" d="M45,16.2l-5,2.75v17.55c0,2.48-2.02,4.5-4.5,4.5h-5V26.5L24,21.5l-6.5,5V41H12.5c-2.48,0-4.5-2.02-4.5-4.5V18.95l-5-2.75c-1.84-1.01-2.96-2.9-2.96-4.99 0-3.9,4.01-6.14,7.24-4.36L24,16l16.72-9.2c3.23-1.78,7.24.46,7.24,4.36 0,2.09-1.12,3.98-2.96,4.99z"/>
            <path fill="#34A853" d="M17.5,41H12.5c-2.48,0-4.5-2.02-4.5-4.5V20l9.5,7.31V41z"/>
            <path fill="#FBBC05" d="M35.5,41h-5V27.31L40,20v16.5c0,2.48-2.02,4.5-4.5,4.5z"/>
            <path fill="#EA4335" d="M40,20l-16,12.31L8,20v-1.05l16,8.8 16-8.8V20z"/>
            <path fill="#C5221F" d="M24,27.55L8,18.75V11.21c0-3.9,4.01-6.14,7.24-4.36L24,11.8l8.76-4.95c3.23-1.78,7.24.46,7.24,4.36v7.54L24,27.55z"/>
        </svg>
    </div>
)

// Universal App Icon Renderer based on OS
const renderAppIcon = (appId, osType = 'ios') => {
    if (osType === 'android') {
        switch (appId) {
            case 'about': return <AndroidAboutIcon />
            case 'contact': return <AndroidContactIcon />
            case 'projects': return <AndroidProjectsIcon />
            case 'portfolio': return <AndroidPortfolioIcon />
            case 'mail': return <AndroidMailIcon />
            case 'music': return <AndroidMusicIcon />
            case 'photos': return <AndroidPhotosIcon />
            case 'settings': return <AndroidSettingsIcon />
            case 'github': return <AndroidGithubIcon />
            case 'linkedin': return <AndroidLinkedinIcon />
            default: return null
        }
    }
    // Apple iOS icons
    return renderIosAppIcon(appId)
}

const renderIosAppIcon = (appId) => {
    switch (appId) {
        case 'about': return <IosAboutIcon />
        case 'contact': return <IosContactIcon />
        case 'projects': return <IosProjectsIcon />
        case 'portfolio': return <IosPortfolioIcon />
        case 'mail': return <IosMailIcon />
        case 'music': return <IosMusicIcon />
        case 'photos': return <IosPhotosIcon />
        case 'settings': return <IosSettingsIcon />
        case 'github': return <IosGithubIcon />
        case 'linkedin': return <IosLinkedinIcon />
        default: return null
    }
}

// Android Status Bar
const AndroidStatusBar = ({ lang }) => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const localeMap = {
        en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR', it: 'it-IT',
        pt: 'pt-PT', ru: 'ru-RU', ja: 'ja-JP', zh: 'zh-CN', ko: 'ko-KR',
        hi: 'hi-IN', bn: 'bn-BD', ar: 'ar-SA', id: 'id-ID'
    }
    const locale = localeMap[lang] || 'en-US'
    const timeString = now.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' })

    return (
        <div className="absolute top-0 left-0 right-0 h-24 px-12 pt-4 z-50 flex items-center justify-between pointer-events-none">
            {/* Left: Live Time */}
            <div className="flex items-center min-w-[180px]">
                <span className="text-4xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    {timeString}
                </span>
            </div>

            {/* Center: Google Pixel Punch-Hole Camera */}
            <div className="w-10 h-10 rounded-full bg-[#0a0a0d] border border-[#23252a] flex items-center justify-center shadow-inner">
                <div className="w-4 h-4 rounded-full bg-[#020204] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1b2535] opacity-80" />
                </div>
            </div>

            {/* Right: Android Status Icons (Wifi, 5G, Battery) */}
            <div className="flex items-center justify-end gap-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] min-w-[180px]">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" title="Notifications" />
                <Wifi size={36} />
                <span className="text-2xl font-bold tracking-tight">5G</span>
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-medium">100%</span>
                    <Battery size={38} className="rotate-90" />
                </div>
            </div>
        </div>
    )
}

// Google Pixel "At a Glance" Widget
const AndroidAtAGlanceWidget = ({ lang }) => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const localeMap = {
        en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR', it: 'it-IT',
        pt: 'pt-PT', ru: 'ru-RU', ja: 'ja-JP', zh: 'zh-CN', ko: 'ko-KR',
        hi: 'hi-IN', bn: 'bn-BD', ar: 'ar-SA', id: 'id-ID'
    }
    const locale = localeMap[lang] || 'en-US'
    const dayOfWeek = now.toLocaleDateString(locale, { weekday: 'short' })
    const monthDay = now.toLocaleDateString(locale, { month: 'short', day: 'numeric' })

    return (
        <div className="flex flex-col mb-8 pl-1">
            <div className="flex items-center gap-4 text-5xl font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mb-3">
                <span>{dayOfWeek}, {monthDay}</span>
                <span className="text-white/60">•</span>
                <span className="flex items-center gap-3 text-amber-300">
                    <Sun size={48} className="text-amber-400 fill-amber-400/40" />
                    28°C
                </span>
            </div>
            <div className="flex items-center gap-3">
                <span className="px-5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-2xl font-medium shadow-md">
                    Rahul Singh
                </span>
                <span className="px-5 py-1.5 rounded-full bg-blue-500/35 backdrop-blur-md border border-blue-400/40 text-blue-100 text-2xl font-medium shadow-md">
                    Mobile Developer
                </span>
            </div>
        </div>
    )
}

// Android Material You Google Search Bar
const AndroidSearchBar = () => (
    <div className="w-full h-24 rounded-full bg-white/95 backdrop-blur-2xl shadow-xl px-8 flex items-center justify-between mb-4 cursor-pointer active:scale-[0.99] transition-transform border border-white/60">
        <div className="flex items-center gap-4">
            <GoogleGLogo />
            <span className="text-3xl text-gray-500 font-normal">Search apps & web...</span>
        </div>
        <div className="flex items-center gap-6 text-gray-600">
            <Mic size={42} className="text-blue-600 hover:scale-110 transition-transform" />
            <Camera size={42} className="text-emerald-600 hover:scale-110 transition-transform" />
        </div>
    </div>
)

const IOSStatusBar = ({ lang, isPlaying }) => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const localeMap = {
        en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR', it: 'it-IT',
        pt: 'pt-PT', ru: 'ru-RU', ja: 'ja-JP', zh: 'zh-CN', ko: 'ko-KR',
        hi: 'hi-IN', bn: 'bn-BD', ar: 'ar-SA', id: 'id-ID'
    }
    const locale = localeMap[lang] || 'en-US'
    const timeString = now.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' })

    return (
        <div className="absolute top-0 left-0 right-0 h-32 px-12 z-50 flex items-center justify-between pointer-events-none">
            {/* Left: Time */}
            <div className="w-[300px] flex items-center">
                <span className="text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    {timeString}
                </span>
            </div>

            {/* Center: Dynamic Island */}
            <div className="w-[460px] h-[116px] bg-black rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,0.7)] border border-white/10 flex items-center justify-between px-8 pointer-events-auto cursor-pointer transition-all duration-300">
                {/* FaceID / TrueDepth Sensor Module */}
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#070709] border border-white/5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#050507]" />
                </div>

                {/* Now Playing waveform or Camera Lens */}
                {isPlaying ? (
                    <div className="flex items-center gap-1.5 px-2">
                        <span className="w-1.5 h-6 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-9 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                ) : (
                    <div className="w-14 h-14 rounded-full bg-[#0c0c0e] border border-[#222226] flex items-center justify-center shadow-inner">
                        <div className="w-6 h-6 rounded-full bg-[#081528] border border-[#1a365d]/50 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#4895ef]/70 blur-[0.5px]" />
                        </div>
                    </div>
                )}
            </div>

            {/* Right: Cellular, Wi-Fi, Battery */}
            <div className="w-[300px] flex items-center justify-end gap-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                <Signal size={36} />
                <Wifi size={36} />
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-medium">100%</span>
                    <Battery size={42} className="rotate-90" />
                </div>
            </div>
        </div>
    )
}

// iOS Square Calendar Widget
const IOSCalendarWidget = ({ lang }) => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const localeMap = {
        en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR', it: 'it-IT',
        pt: 'pt-PT', ru: 'ru-RU', ja: 'ja-JP', zh: 'zh-CN', ko: 'ko-KR',
        hi: 'hi-IN', bn: 'bn-BD', ar: 'ar-SA', id: 'id-ID'
    }
    const locale = localeMap[lang] || 'en-US'
    const dayOfWeek = now.toLocaleDateString(locale, { weekday: 'long' })
    const monthDay = now.toLocaleDateString(locale, { day: 'numeric' })
    const monthName = now.toLocaleDateString(locale, { month: 'long' })

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full aspect-square rounded-[60px] bg-[#16161c] border-2 border-white/20 p-9 shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group select-none cursor-pointer"
        >
            {/* Top row: Weekday in signature iOS red & Month */}
            <div className="flex items-center justify-between relative z-10">
                <span className="text-[#FF453A] font-black text-4xl tracking-wider uppercase">
                    {dayOfWeek}
                </span>
                <span className="text-3xl font-extrabold text-white tracking-tight">
                    {monthName}
                </span>
            </div>

            {/* Center: Big Bold Apple Date Number */}
            <div className="flex flex-col items-start justify-center relative z-10 my-auto">
                <span className="text-[144px] font-bold tracking-tight leading-none text-white">
                    {monthDay}
                </span>
            </div>

            {/* Bottom info: Location & Schedule */}
            <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between text-3xl font-bold text-white">
                    <span>Pune, India</span>
                    <span className="text-amber-300 font-extrabold flex items-center gap-2">
                        <Sun size={32} className="fill-amber-300" />
                        28°C
                    </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/15 border border-white/20 text-white text-2xl font-bold">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FF453A] flex-shrink-0" />
                    <span className="truncate">Available for hire</span>
                </div>
            </div>
        </motion.div>
    )
}

// iOS Square Profile Widget
const IOSProfileWidget = ({ onOpenAbout }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={onOpenAbout}
            className="w-full aspect-square rounded-[60px] bg-[#16161c] border-2 border-white/20 p-9 shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group select-none cursor-pointer"
        >
            {/* Top row: Avatar & Availability Status Badge */}
            <div className="flex items-center justify-between relative z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-xl ring-4 ring-blue-500/40 flex-shrink-0">
                    <img src={profilePic} alt="Rahul Singh" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/30 border-2 border-emerald-400 text-emerald-200 text-2xl font-black shadow-md">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span>Open to Work</span>
                </div>
            </div>

            {/* Middle: Name & Title & Tech Highlights */}
            <div className="flex flex-col relative z-10 my-auto">
                <span className="text-5xl font-black tracking-tight text-white mb-2">
                    Rahul Singh
                </span>
                <span className="text-3xl font-black text-[#38bdf8] tracking-tight mb-2">
                    Mobile Developer
                </span>
                <span className="text-2xl font-bold text-gray-200 tracking-wide">
                    Android • React Native • AI
                </span>
            </div>

            {/* Bottom: Credentials & Action Badges */}
            <div className="flex items-center justify-between pt-3 border-t-2 border-white/20 gap-3 relative z-10">
                <span className="px-4 py-2 rounded-xl bg-white/20 text-white font-extrabold text-2xl tracking-tight border border-white/25">
                    C-DAC PGCP-MC
                </span>
                <span className="px-4 py-2 rounded-xl bg-blue-500/35 text-blue-200 font-extrabold text-2xl tracking-tight border border-blue-400">
                    Google Play Dev
                </span>
            </div>
        </motion.div>
    )
}

// --- AUTHENTIC CALL / PHONE APP COMPONENT ---
const CallApp = ({ isDark, profilePic }) => {
    const defaultFormatted = '+91 78805 26006'
    const [dialedNumber, setDialedNumber] = useState(defaultFormatted)
    const [activeTab, setActiveTab] = useState('keypad') // 'favorites' | 'recents' | 'contacts' | 'keypad' | 'voicemail'
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [isInCall, setIsInCall] = useState(false)
    const [callDuration, setCallDuration] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [isSpeaker, setIsSpeaker] = useState(false)
    const [isPlayingVoicemail, setIsPlayingVoicemail] = useState(false)

    useEffect(() => {
        if (!isInCall) return
        const interval = setInterval(() => {
            setCallDuration(prev => prev + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [isInCall])

    const formatTimer = (secs) => {
        const mins = Math.floor(secs / 60)
        const s = secs % 60
        return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }

    const handleDigitPress = (digit) => {
        if (dialedNumber === defaultFormatted) {
            setDialedNumber(digit)
        } else {
            if (dialedNumber.length < 18) {
                setDialedNumber(prev => prev + digit)
            }
        }
    }

    const handleDelete = () => {
        if (dialedNumber.length > 0) {
            setDialedNumber(prev => prev.slice(0, -1))
        }
    }

    const handleResetNumber = () => {
        setDialedNumber(defaultFormatted)
    }

    const handleInitiateCall = (numToCall = dialedNumber) => {
        if (numToCall) setDialedNumber(numToCall)
        setShowConfirmModal(true)
    }

    const handleConfirmCall = () => {
        setShowConfirmModal(false)
        setIsInCall(true)
        setCallDuration(0)
        try {
            window.location.href = `tel:${dialedNumber.replace(/[\s-]/g, '')}`
        } catch {
            // fallback
        }
    }

    const handleEndCall = () => {
        setIsInCall(false)
        setCallDuration(0)
    }

    const dialpad = [
        { num: '1', letters: '' },
        { num: '2', letters: 'ABC' },
        { num: '3', letters: 'DEF' },
        { num: '4', letters: 'GHI' },
        { num: '5', letters: 'JKL' },
        { num: '6', letters: 'MNO' },
        { num: '7', letters: 'PQRS' },
        { num: '8', letters: 'TUV' },
        { num: '9', letters: 'WXYZ' },
        { num: '*', letters: '' },
        { num: '0', letters: '+' },
        { num: '#', letters: '' },
    ]

    const recentCalls = [
        { id: 1, name: 'Rahul Singh', type: 'Incoming', time: '2 mins ago', number: '+91 78805 26006', missed: false },
        { id: 2, name: 'Google Recruiter', type: 'Missed Call', time: 'Yesterday', number: '+1 (650) 253-0000', missed: true },
        { id: 3, name: 'Tech Lead • Mobile Team', type: 'Outgoing', time: 'Oct 20', number: '+91 98230 45678', missed: false },
        { id: 4, name: 'Vindhya Almirah Client', type: 'Incoming', time: 'Oct 18', number: '+91 99341 12345', missed: false },
        { id: 5, name: 'Kranti App Support', type: 'Incoming', time: 'Oct 15', number: '+91 88765 43210', missed: false },
    ]

    const favoriteContacts = [
        { id: 1, title: 'Rahul Singh', subtitle: 'Mobile Direct', icon: Phone, action: () => handleInitiateCall(defaultFormatted), color: 'bg-emerald-500' },
        { id: 2, title: 'WhatsApp Chat', subtitle: '+91 78805 26006', icon: MessageSquare, action: () => window.open('https://wa.me/917880526006', '_blank'), color: 'bg-green-600' },
        { id: 3, title: 'Email Rahul', subtitle: 'rahul.cs6765@gmail.com', icon: Mail, action: () => window.open('mailto:rahul.cs6765@gmail.com', '_blank'), color: 'bg-blue-600' },
        { id: 4, title: 'Live Portfolio', subtitle: 'rahul-singh-profile-nine', icon: Globe, action: () => window.open('https://rahul-singh-profile-nine.vercel.app/', '_blank'), color: 'bg-purple-600' },
    ]

    return (
        <div className={`w-full h-full flex flex-col justify-between select-none relative overflow-hidden transition-colors duration-300 ${!isDark ? 'bg-[#F2F2F7] text-black' : 'bg-black text-white'}`}>
            {isInCall ? (
                /* --- IN-CALL CONNECTED SCREEN --- */
                <div className="flex-1 flex flex-col items-center justify-between py-16 px-8">
                    {/* Top Caller Card */}
                    <div className="flex flex-col items-center text-center mt-6">
                        <div className="w-56 h-56 rounded-full overflow-hidden border-[6px] border-emerald-400 shadow-[0_0_60px_rgba(52,211,153,0.45)] mb-8 relative">
                            <img src={profilePic} alt="Rahul Singh" className="w-full h-full object-cover" />
                            <span className="absolute inset-0 rounded-full ring-8 ring-emerald-400/40 animate-ping pointer-events-none" />
                        </div>
                        <h2 className="text-8xl font-bold mb-4 tracking-tight text-white">Rahul Singh</h2>
                        <p className="text-5xl font-mono text-emerald-400 font-semibold mb-6 tracking-wider">{dialedNumber}</p>
                        <div className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                            <p className="text-4xl text-gray-200 font-mono tracking-widest font-medium">
                                {callDuration === 0 ? 'Calling...' : `Connected • ${formatTimer(callDuration)}`}
                            </p>
                        </div>
                    </div>

                    {/* In-Call 6-Button Controls Grid */}
                    <div className="grid grid-cols-3 gap-8 w-full max-w-[1050px] my-auto">
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`flex flex-col items-center justify-center gap-3 p-8 rounded-[3rem] transition-all active:scale-95 ${
                                isMuted ? 'bg-white text-black shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            {isMuted ? <MicOff size={68} /> : <Mic size={68} />}
                            <span className="text-3xl font-medium">{isMuted ? 'Muted' : 'Mute'}</span>
                        </button>
                        <button
                            onClick={() => setIsInCall(false)}
                            className="flex flex-col items-center justify-center gap-3 p-8 rounded-[3rem] bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
                        >
                            <LayoutGrid size={68} />
                            <span className="text-3xl font-medium">Keypad</span>
                        </button>
                        <button
                            onClick={() => setIsSpeaker(!isSpeaker)}
                            className={`flex flex-col items-center justify-center gap-3 p-8 rounded-[3rem] transition-all active:scale-95 ${
                                isSpeaker ? 'bg-white text-black shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            <Volume2 size={68} />
                            <span className="text-3xl font-medium">{isSpeaker ? 'Speaker On' : 'Speaker'}</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('contacts')}
                            className="flex flex-col items-center justify-center gap-3 p-8 rounded-[3rem] bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
                        >
                            <Plus size={68} />
                            <span className="text-3xl font-medium">Add Call</span>
                        </button>
                        <button
                            onClick={() => window.open('https://wa.me/917880526006', '_blank')}
                            className="flex flex-col items-center justify-center gap-3 p-8 rounded-[3rem] bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
                        >
                            <Video size={68} />
                            <span className="text-3xl font-medium">Video</span>
                        </button>
                        <button
                            onClick={() => {
                                setIsInCall(false)
                                setActiveTab('contacts')
                            }}
                            className="flex flex-col items-center justify-center gap-3 p-8 rounded-[3rem] bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
                        >
                            <Users size={68} />
                            <span className="text-3xl font-medium">Contacts</span>
                        </button>
                    </div>

                    {/* Big Red End Call Button */}
                    <button
                        onClick={handleEndCall}
                        className="w-[220px] h-[220px] rounded-full bg-[#FF3B30] hover:bg-[#e0342a] active:scale-90 shadow-[0_20px_50px_rgba(255,59,48,0.6)] flex items-center justify-center text-white cursor-pointer transition-transform mb-6"
                        title="End Call"
                    >
                        <PhoneOff size={92} />
                    </button>
                </div>
            ) : (
                /* --- MAIN TAB CONTENT --- */
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    {/* TAB 1: KEYPAD */}
                    {activeTab === 'keypad' && (
                        <div className="flex-1 flex flex-col justify-between py-6 px-4">
                            {/* Header: Contact Card & Number Readout */}
                            <div className="flex flex-col items-center text-center pt-2">
                                <div className="w-48 h-48 rounded-full border-[5px] border-emerald-400 overflow-hidden shadow-2xl mb-4 relative">
                                    <img src={profilePic} alt="Rahul Singh" className="w-full h-full object-cover" />
                                </div>
                                <h2 className={`text-7xl font-bold mb-1 tracking-tight ${!isDark ? 'text-gray-900' : 'text-white'}`}>Rahul Singh</h2>
                                <p className={`text-4xl mb-4 ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>Mobile Developer • Pune, India</p>

                                {/* Dialed Number Display */}
                                <div className="min-h-[110px] flex flex-col items-center justify-center px-4">
                                    <span className={`text-8xl font-light tracking-wide select-all font-mono ${!isDark ? 'text-gray-900' : 'text-white'}`}>
                                        {dialedNumber || ' '}
                                    </span>
                                    {dialedNumber !== defaultFormatted ? (
                                        <button
                                            onClick={handleResetNumber}
                                            className="mt-2 px-6 py-2 rounded-full text-3xl font-semibold bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                                        >
                                            ↺ Reset to Rahul's Number
                                        </button>
                                    ) : (
                                        <div className="mt-2 flex items-center gap-3 px-6 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-3xl font-medium">
                                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>Direct Line • Available to Connect</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 3x4 Keypad Grid */}
                            <div className="grid grid-cols-3 gap-x-16 gap-y-7 max-w-[1050px] mx-auto w-full px-6">
                                {dialpad.map(({ num, letters }) => (
                                    <motion.button
                                        key={num}
                                        whileTap={{ scale: 0.92 }}
                                        onClick={() => handleDigitPress(num)}
                                        className={`w-[220px] h-[220px] rounded-full mx-auto flex flex-col items-center justify-center transition-all cursor-pointer ${
                                            !isDark
                                                ? 'bg-white hover:bg-gray-100 text-gray-900 shadow-md border border-gray-200 active:bg-gray-200'
                                                : 'bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#48484A] text-white shadow-lg border border-white/5'
                                        }`}
                                    >
                                        <span className="text-8xl font-light leading-none">{num}</span>
                                        {letters ? (
                                            <span className="text-2xl tracking-[0.25em] font-semibold uppercase opacity-60 mt-1">{letters}</span>
                                        ) : num === '0' ? (
                                            <span className="text-3xl font-light opacity-75 leading-none mt-0.5">+</span>
                                        ) : (
                                            <span className="text-2xl h-[1.5rem]" />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Bottom Call Action Row */}
                            <div className="flex items-center justify-around w-full max-w-[1050px] mx-auto px-12 py-3">
                                {/* Quick Mail Shortcut */}
                                <a
                                    href="mailto:rahul.cs6765@gmail.com"
                                    className={`w-[170px] h-[170px] rounded-full flex items-center justify-center transition-all active:scale-95 ${
                                        !isDark ? 'bg-white text-gray-700 shadow-md' : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                                    }`}
                                    title="Send Email"
                                >
                                    <Mail size={64} />
                                </a>

                                {/* Big Iconic Green Call Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.92 }}
                                    onClick={() => handleInitiateCall(dialedNumber)}
                                    className="w-[220px] h-[220px] rounded-full bg-[#34C759] hover:bg-[#2fb350] shadow-[0_16px_45px_rgba(52,199,89,0.55)] flex items-center justify-center text-white cursor-pointer transition-all"
                                    title="Call Rahul Singh"
                                >
                                    <Phone size={92} fill="currentColor" />
                                </motion.button>

                                {/* Backspace Delete Button */}
                                <button
                                    onClick={handleDelete}
                                    disabled={!dialedNumber}
                                    className={`w-[170px] h-[170px] rounded-full flex items-center justify-center transition-all active:scale-95 ${
                                        dialedNumber
                                            ? !isDark ? 'bg-white text-gray-700 hover:text-red-500 shadow-md' : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                                            : 'opacity-0 pointer-events-none'
                                    }`}
                                    title="Delete"
                                >
                                    <svg viewBox="0 0 24 24" className="w-18 h-18 fill-none stroke-current stroke-2">
                                        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                                        <line x1="18" y1="9" x2="12" y2="15" />
                                        <line x1="12" y1="9" x2="18" y2="15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* TAB 2: CONTACTS CARD */}
                    {activeTab === 'contacts' && (
                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            <div className="flex flex-col items-center text-center pt-4">
                                <div className="w-56 h-56 rounded-full border-[6px] border-emerald-400 overflow-hidden shadow-2xl mb-6 relative">
                                    <img src={profilePic} alt="Rahul Singh" className="w-full h-full object-cover" />
                                </div>
                                <h2 className={`text-8xl font-bold mb-2 tracking-tight ${!isDark ? 'text-gray-900' : 'text-white'}`}>Rahul Singh</h2>
                                <p className="text-4xl text-emerald-400 font-semibold mb-6">Mobile Application Developer</p>

                                {/* Quick Action Bar */}
                                <div className="grid grid-cols-4 gap-6 w-full max-w-[1100px] mb-8">
                                    <button
                                        onClick={() => handleInitiateCall(defaultFormatted)}
                                        className={`flex flex-col items-center justify-center p-6 rounded-3xl gap-2 transition-all active:scale-95 ${
                                            !isDark ? 'bg-white shadow-md' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    >
                                        <Phone size={52} className="text-emerald-400" />
                                        <span className="text-3xl font-medium">Call</span>
                                    </button>
                                    <button
                                        onClick={() => window.open('https://wa.me/917880526006', '_blank')}
                                        className={`flex flex-col items-center justify-center p-6 rounded-3xl gap-2 transition-all active:scale-95 ${
                                            !isDark ? 'bg-white shadow-md' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    >
                                        <MessageSquare size={52} className="text-green-500" />
                                        <span className="text-3xl font-medium">Message</span>
                                    </button>
                                    <button
                                        onClick={() => window.open('mailto:rahul.cs6765@gmail.com', '_blank')}
                                        className={`flex flex-col items-center justify-center p-6 rounded-3xl gap-2 transition-all active:scale-95 ${
                                            !isDark ? 'bg-white shadow-md' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    >
                                        <Mail size={52} className="text-blue-400" />
                                        <span className="text-3xl font-medium">Email</span>
                                    </button>
                                    <button
                                        onClick={() => window.open('https://rahul-singh-profile-nine.vercel.app/', '_blank')}
                                        className={`flex flex-col items-center justify-center p-6 rounded-3xl gap-2 transition-all active:scale-95 ${
                                            !isDark ? 'bg-white shadow-md' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    >
                                        <Globe size={52} className="text-purple-400" />
                                        <span className="text-3xl font-medium">Portfolio</span>
                                    </button>
                                </div>
                            </div>

                            {/* Contact Details List */}
                            <div className={`rounded-3xl overflow-hidden border ${!isDark ? 'bg-white border-gray-200 shadow-md' : 'bg-[#1C1C1E] border-white/10'}`}>
                                <div className="p-8 border-b border-white/10 flex flex-col gap-1">
                                    <span className="text-3xl text-gray-400 font-medium">Phone</span>
                                    <span className="text-5xl font-mono font-semibold text-emerald-400">{defaultFormatted}</span>
                                    <span className="text-3xl text-gray-500">Mobile • Direct</span>
                                </div>
                                <div className="p-8 border-b border-white/10 flex flex-col gap-1">
                                    <span className="text-3xl text-gray-400 font-medium">Email</span>
                                    <span className="text-5xl font-medium text-blue-400">rahul.cs6765@gmail.com</span>
                                    <span className="text-3xl text-gray-500">Work & Inquiries</span>
                                </div>
                                <div className="p-8 border-b border-white/10 flex flex-col gap-1">
                                    <span className="text-3xl text-gray-400 font-medium">Location</span>
                                    <span className="text-5xl font-medium">Pune, Maharashtra, India</span>
                                    <span className="text-3xl text-gray-500">Open to Relocation / Remote</span>
                                </div>
                                <div className="p-8 border-b border-white/10 flex flex-col gap-1">
                                    <span className="text-3xl text-gray-400 font-medium">Core Stack</span>
                                    <span className="text-4xl leading-relaxed font-medium">Java, Android SDK, React Native, SQLite, Room DB, Retrofit, REST APIs</span>
                                </div>
                                <div className="p-8 flex flex-col gap-1">
                                    <span className="text-3xl text-gray-400 font-medium">Education</span>
                                    <span className="text-4xl font-medium">PG Diploma in Mobile Computing (PGCP-MC)</span>
                                    <span className="text-3xl text-gray-500">C-DAC ACTS Pune</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3: RECENTS CALL LOG */}
                    {activeTab === 'recents' && (
                        <div className="flex-1 overflow-y-auto p-8 space-y-4">
                            <h2 className="text-7xl font-bold px-4 pt-4 pb-2">Recents</h2>
                            <div className={`rounded-3xl overflow-hidden border ${!isDark ? 'bg-white border-gray-200 shadow-md' : 'bg-[#1C1C1E] border-white/10'}`}>
                                {recentCalls.map((call, idx) => (
                                    <div
                                        key={call.id}
                                        onClick={() => handleInitiateCall(call.number)}
                                        className={`p-7 flex items-center justify-between cursor-pointer transition-colors ${
                                            idx !== recentCalls.length - 1 ? 'border-b border-white/10' : ''
                                        } ${!isDark ? 'hover:bg-gray-50' : 'hover:bg-white/5'}`}
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`p-4 rounded-full ${call.missed ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                                                <Phone size={44} />
                                            </div>
                                            <div>
                                                <h3 className={`text-5xl font-bold ${call.missed ? 'text-red-400' : ''}`}>{call.name}</h3>
                                                <p className="text-3xl text-gray-400 mt-1">{call.type} • {call.number}</p>
                                            </div>
                                        </div>
                                        <span className="text-3xl text-gray-500">{call.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB 4: FAVORITES SPEED DIAL */}
                    {activeTab === 'favorites' && (
                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                            <h2 className="text-7xl font-bold px-4 pt-4 pb-2">Favorites</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {favoriteContacts.map((fav) => {
                                    const IconComponent = fav.icon
                                    return (
                                        <motion.button
                                            key={fav.id}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={fav.action}
                                            className={`p-8 rounded-[2.5rem] flex flex-col justify-between aspect-square text-left border transition-all ${
                                                !isDark ? 'bg-white border-gray-200 shadow-lg' : 'bg-[#1C1C1E] border-white/10 hover:border-white/20 shadow-xl'
                                            }`}
                                        >
                                            <div className={`w-20 h-20 rounded-2xl ${fav.color} flex items-center justify-center text-white shadow-md`}>
                                                <IconComponent size={48} />
                                            </div>
                                            <div>
                                                <h3 className="text-5xl font-bold mb-2">{fav.title}</h3>
                                                <p className="text-3xl text-gray-400">{fav.subtitle}</p>
                                            </div>
                                        </motion.button>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* TAB 5: VOICEMAIL */}
                    {activeTab === 'voicemail' && (
                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                            <h2 className="text-7xl font-bold px-4 pt-4 pb-2">Voicemail</h2>
                            <div className={`p-8 rounded-[3rem] border ${!isDark ? 'bg-white border-gray-200 shadow-lg' : 'bg-[#1C1C1E] border-white/10'}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-5xl font-bold">Rahul Singh</h3>
                                        <p className="text-3xl text-emerald-400 mt-1">Senior Mobile Developer • Portfolio Greeting</p>
                                    </div>
                                    <span className="text-3xl text-gray-500">Today, 2:15 AM</span>
                                </div>

                                {/* Audio Waveform & Play Button */}
                                <div className="flex items-center gap-6 py-6 border-y border-white/10 my-4">
                                    <button
                                        onClick={() => setIsPlayingVoicemail(!isPlayingVoicemail)}
                                        className="w-24 h-24 rounded-full bg-[#007AFF] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                                    >
                                        {isPlayingVoicemail ? <Pause size={48} /> : <Play size={48} className="translate-x-1" />}
                                    </button>
                                    <div className="flex-1 flex items-center gap-2 h-16">
                                        {[40, 70, 90, 50, 85, 100, 60, 45, 95, 80, 55, 65, 90, 100, 75, 50, 80, 60, 40].map((h, i) => (
                                            <div
                                                key={i}
                                                className={`flex-1 rounded-full transition-all duration-300 ${
                                                    isPlayingVoicemail ? 'bg-emerald-400 animate-pulse' : 'bg-gray-600'
                                                }`}
                                                style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-3xl font-mono text-gray-400">0:24</span>
                                </div>

                                {/* Voicemail Transcript */}
                                <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-2xl font-bold uppercase tracking-widest text-gray-400 mb-2 block">Transcription</span>
                                    <p className="text-4xl text-gray-200 leading-relaxed font-light">
                                        "Hi! Thank you for visiting my interactive mobile developer portfolio. I specialize in crafting high-performance Android and cross-platform experiences. Feel free to explore my featured projects Kranti and Vindhya Almirah, and tap Call to connect directly!"
                                    </p>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => handleInitiateCall(defaultFormatted)}
                                        className="px-8 py-4 rounded-2xl bg-[#34C759] text-white text-3xl font-bold flex items-center gap-3 shadow-md active:scale-95 transition-all"
                                    >
                                        <Phone size={36} fill="currentColor" />
                                        <span>Call Back</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* AUTHENTIC iOS PHONE BOTTOM TAB BAR */}
                    <div className={`h-[200px] flex-shrink-0 w-full border-t flex items-center justify-around px-6 z-20 ${
                        !isDark ? 'bg-white/95 border-gray-200 text-gray-600' : 'bg-[#161618]/95 backdrop-blur-2xl border-white/10 text-gray-400'
                    }`}>
                        <button
                            onClick={() => setActiveTab('favorites')}
                            className={`flex flex-col items-center justify-center gap-2 py-3 px-6 rounded-2xl transition-colors cursor-pointer ${
                                activeTab === 'favorites' ? 'text-[#007AFF]' : 'hover:text-white'
                            }`}
                        >
                            <Star size={52} fill={activeTab === 'favorites' ? 'currentColor' : 'none'} />
                            <span className="text-2xl font-semibold">Favorites</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('recents')}
                            className={`flex flex-col items-center justify-center gap-2 py-3 px-6 rounded-2xl transition-colors cursor-pointer ${
                                activeTab === 'recents' ? 'text-[#007AFF]' : 'hover:text-white'
                            }`}
                        >
                            <Clock size={52} />
                            <span className="text-2xl font-semibold">Recents</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('contacts')}
                            className={`flex flex-col items-center justify-center gap-2 py-3 px-6 rounded-2xl transition-colors cursor-pointer ${
                                activeTab === 'contacts' ? 'text-[#007AFF]' : 'hover:text-white'
                            }`}
                        >
                            <Users size={52} fill={activeTab === 'contacts' ? 'currentColor' : 'none'} />
                            <span className="text-2xl font-semibold">Contacts</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('keypad')}
                            className={`flex flex-col items-center justify-center gap-2 py-3 px-6 rounded-2xl transition-colors cursor-pointer ${
                                activeTab === 'keypad' ? 'text-[#007AFF]' : 'hover:text-white'
                            }`}
                        >
                            <LayoutGrid size={52} />
                            <span className="text-2xl font-semibold">Keypad</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('voicemail')}
                            className={`flex flex-col items-center justify-center gap-2 py-3 px-6 rounded-2xl transition-colors cursor-pointer ${
                                activeTab === 'voicemail' ? 'text-[#007AFF]' : 'hover:text-white'
                            }`}
                        >
                            <Voicemail size={52} />
                            <span className="text-2xl font-semibold">Voicemail</span>
                        </button>
                    </div>
                </div>
            )}

            {/* --- POPUP CONFIRMATION MODAL --- */}
            <AnimatePresence>
                {showConfirmModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/85 backdrop-blur-2xl z-50 flex items-center justify-center p-10"
                        onClick={() => setShowConfirmModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.88, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.88, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`w-full max-w-[1050px] p-16 rounded-[4.5rem] border-2 shadow-[0_32px_80px_rgba(0,0,0,0.85)] text-center ${
                                !isDark ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#1C1C1E] border-white/20 text-white'
                            }`}
                        >
                            {/* Phone Icon Badge */}
                            <div className="w-36 h-36 rounded-full bg-emerald-500/20 border-4 border-emerald-500/50 flex items-center justify-center mx-auto mb-10 text-emerald-400 shadow-[0_0_40px_rgba(52,211,153,0.3)]">
                                <PhoneCall size={72} className="animate-pulse" />
                            </div>

                            <h3 className="text-7xl font-bold mb-6 tracking-tight">Are you sure you want to call?</h3>
                            <p className="text-6xl font-mono text-emerald-400 font-bold mb-4 tracking-wider">
                                {dialedNumber}
                            </p>
                            <p className={`text-4xl mb-14 ${!isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                                This will start a phone call to Rahul Singh.
                            </p>

                            <div className="flex gap-6 w-full">
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    className={`flex-1 py-8 rounded-[2.5rem] text-5xl font-bold transition-all active:scale-95 ${
                                        !isDark ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmCall}
                                    className="flex-1 py-8 rounded-[2.5rem] text-5xl font-bold bg-[#34C759] hover:bg-[#2fb350] text-white shadow-[0_8px_30px_rgba(52,199,89,0.5)] transition-all active:scale-95 flex items-center justify-center gap-4"
                                >
                                    <Phone size={48} fill="currentColor" />
                                    <span>Call</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// --- AUTHENTIC MAIL APP COMPONENT ---
const MailApp = ({ isDark }) => {
    const [selectedEmail, setSelectedEmail] = useState(null)
    const [showCompose, setShowCompose] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [composeForm, setComposeForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [toastMessage, setToastMessage] = useState('')

    const showToast = (msg) => {
        setToastMessage(msg)
        setTimeout(() => setToastMessage(''), 3000)
    }

    const emails = [
        {
            id: 1,
            from: 'Google Talent Acquisition',
            fromEmail: 'careers@google.com',
            to: 'Rahul Singh <rahul.cs6765@gmail.com>',
            subject: 'Excited about your Android & Mobile Portfolio',
            date: '10:30 AM',
            unread: true,
            avatarBg: 'bg-red-500',
            avatarText: 'G',
            preview: 'Hi Rahul, We reviewed your published Kranti app on Google Play and your mobile architecture implementations...',
            body: [
                'Hi Rahul,',
                'We reviewed your interactive mobile developer portfolio and were very impressed with your published Kranti App on Google Play Store, along with your clean architecture implementations using Room DB, SQLite, and Retrofit.',
                'We currently have active openings for Mobile Software Engineers (Android & Hybrid Platforms) at Google. Your C-DAC PGCP-MC training and hands-on React Native/Java expertise align closely with what our teams are building.',
                'Would you be open to an introductory conversation this week? Please feel free to reply with your preferred times or resume update.',
                'Warm regards,\nGoogle Talent Acquisition Team'
            ]
        },
        {
            id: 2,
            from: 'Vindhya Almirah',
            fromEmail: 'contact@vindhyaalmirah.com',
            to: 'Rahul Singh <rahul.cs6765@gmail.com>',
            subject: 'Production Launch & Customer Inquiries',
            date: 'Yesterday',
            unread: true,
            avatarBg: 'bg-amber-600',
            avatarText: 'V',
            preview: 'Hi Rahul, The web catalog at vindhyaalmirah.com is performing great! Showroom visitors love the responsive showcase...',
            body: [
                'Hi Rahul,',
                'We wanted to share that the website launch at https://www.vindhyaalmirah.com/ has been a huge success! Our showroom visitors and wholesale clients love the responsive showcase and smooth mobile experience.',
                'The fast image loading and mobile-friendly design have noticeably boosted our digital inquiries.',
                'Thank you for your dedicated work and exceptional technical execution on this project.',
                'Best regards,\nVindhya Almirah Management'
            ]
        },
        {
            id: 3,
            from: 'GitHub Developer Notifications',
            fromEmail: 'notifications@github.com',
            to: 'Rahul Singh <rahul.cs6765@gmail.com>',
            subject: 'mrsinghmzp/kranti-app gained new stars & community traction',
            date: 'Oct 21',
            unread: true,
            avatarBg: 'bg-purple-600',
            avatarText: 'GH',
            preview: 'Your Android open-source repository kranti-app received new stars from the Android dev community...',
            body: [
                'Hey Rahul,',
                'Your repository mrsinghmzp/kranti-app has received new stars from Android developers.',
                'Mobile engineers have highlighted your clean architectural patterns, offline-first Room database structure, and modern Android SDK implementations.',
                'Keep building and shipping great open-source software!',
                '— GitHub Community Team'
            ]
        },
        {
            id: 4,
            from: 'C-DAC ACTS Pune Alumni',
            fromEmail: 'alumni@acts.cdac.in',
            to: 'Rahul Singh <rahul.cs6765@gmail.com>',
            subject: 'Alumni Spotlight: Mobile Computing Innovations',
            date: 'Oct 19',
            unread: false,
            avatarBg: 'bg-blue-600',
            avatarText: 'CD',
            preview: 'Greetings Rahul! We are proud of your continuous development in modern mobile engineering and AI APIs...',
            body: [
                'Dear Rahul,',
                'Greetings from C-DAC ACTS Pune! We are proud to see your achievements following your Post Graduate Diploma in Mobile Computing (PGCP-MC).',
                'Your portfolio demonstrating hybrid platforms, Google Play Store app deployment, and Google Gemini API integration sets a high standard for aspiring mobile engineers.',
                'Wishing you great success in your software engineering career!',
                'Sincerely,\nC-DAC ACTS Faculty & Alumni Network'
            ]
        }
    ]

    const filteredEmails = emails.filter(e =>
        e.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.preview.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleSendEmail = (e) => {
        if (e) e.preventDefault()
        const subject = encodeURIComponent(composeForm.subject || 'Portfolio Inquiry / Collaboration')
        const body = encodeURIComponent(`From: ${composeForm.name || 'Visitor'} (${composeForm.email || 'No email provided'})\n\n${composeForm.message || 'Hi Rahul, I saw your portfolio and would like to connect!'}`)
        window.location.href = `mailto:rahul.cs6765@gmail.com?subject=${subject}&body=${body}`
        showToast('Opening default email client...')
        setTimeout(() => {
            setShowCompose(false)
            setComposeForm({ name: '', email: '', subject: '', message: '' })
        }, 1200)
    }

    const openDirectMail = () => {
        window.location.href = 'mailto:rahul.cs6765@gmail.com?subject=Hello%20Rahul%20-%20Opportunity%20Discussion'
        showToast('Opening email to rahul.cs6765@gmail.com...')
    }

    return (
        <div className={`w-full h-full flex flex-col justify-between select-none relative overflow-hidden transition-colors duration-300 ${!isDark ? 'bg-[#F2F2F7] text-black' : 'bg-black text-white'}`}>
            {/* TOAST NOTIFICATION */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-[#007AFF] text-white px-8 py-4 rounded-full shadow-2xl text-4xl font-semibold flex items-center gap-3"
                    >
                        <Check size={40} />
                        <span>{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN CONTENT AREA */}
            {selectedEmail ? (
                /* --- EMAIL READING PANE --- */
                <div className="flex-1 flex flex-col justify-between overflow-hidden p-8">
                    <div className="flex-1 overflow-y-auto space-y-8 pr-2">
                        {/* Top Back Navigation & Action Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-6">
                            <button
                                onClick={() => setSelectedEmail(null)}
                                className="flex items-center gap-2 text-[#007AFF] text-4xl font-bold active:scale-95 transition-transform"
                            >
                                <ChevronLeft size={48} />
                                <span>Inbox</span>
                            </button>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => {
                                        setComposeForm({
                                            name: '',
                                            email: '',
                                            subject: `Re: ${selectedEmail.subject}`,
                                            message: `\n\n--- Original Message from ${selectedEmail.from} ---\n${selectedEmail.body[0]}`
                                        })
                                        setShowCompose(true)
                                    }}
                                    className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white"
                                    title="Reply"
                                >
                                    <Reply size={44} />
                                </button>
                                <button
                                    onClick={openDirectMail}
                                    className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white"
                                    title="Open Mail Client"
                                >
                                    <ExternalLink size={44} />
                                </button>
                            </div>
                        </div>

                        {/* Subject Title */}
                        <h2 className="text-6xl font-bold leading-tight tracking-tight">{selectedEmail.subject}</h2>

                        {/* Sender Card */}
                        <div className={`p-6 rounded-3xl border flex items-center justify-between ${!isDark ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#1C1C1E] border-white/10'}`}>
                            <div className="flex items-center gap-6">
                                <div className={`w-20 h-20 rounded-2xl ${selectedEmail.avatarBg} flex items-center justify-center text-white text-3xl font-black shadow-md`}>
                                    {selectedEmail.avatarText}
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold">{selectedEmail.from}</h3>
                                    <p className="text-3xl text-gray-400 mt-1">{selectedEmail.fromEmail}</p>
                                    <p className="text-2xl text-gray-500 mt-1">To: {selectedEmail.to}</p>
                                </div>
                            </div>
                            <span className="text-3xl text-gray-400 font-mono">{selectedEmail.date}</span>
                        </div>

                        {/* Email Body Content */}
                        <div className={`p-8 rounded-3xl border space-y-6 ${!isDark ? 'bg-white border-gray-200 shadow-md text-gray-800' : 'bg-[#1C1C1E] border-white/10 text-gray-200'}`}>
                            {selectedEmail.body.map((para, i) => (
                                <p key={i} className="text-4xl leading-relaxed whitespace-pre-line font-light">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-6">
                        <button
                            onClick={() => {
                                setComposeForm({
                                    name: '',
                                    email: '',
                                    subject: `Re: ${selectedEmail.subject}`,
                                    message: `Hi Rahul,\n\nI saw this message in your portfolio and wanted to connect!`
                                })
                                setShowCompose(true)
                            }}
                            className="flex-1 py-6 rounded-2xl bg-[#007AFF] hover:bg-[#0062cc] active:scale-95 text-white text-4xl font-bold flex items-center justify-center gap-3 shadow-lg"
                        >
                            <Reply size={40} />
                            <span>Reply</span>
                        </button>
                        <button
                            onClick={openDirectMail}
                            className={`flex-1 py-6 rounded-2xl border text-4xl font-bold flex items-center justify-center gap-3 active:scale-95 ${
                                !isDark ? 'bg-white border-gray-300 text-gray-900' : 'bg-white/10 border-white/15 text-white'
                            }`}
                        >
                            <Mail size={40} />
                            <span>Direct Email</span>
                        </button>
                    </div>
                </div>
            ) : (
                /* --- INBOX LIST VIEW --- */
                <div className="flex-1 flex flex-col justify-between overflow-hidden p-8">
                    <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                        {/* Inbox Header */}
                        <div className="flex items-center justify-between pt-2">
                            <div>
                                <h1 className="text-8xl font-black tracking-tight">Inbox</h1>
                                <p className="text-4xl text-gray-400 mt-2 font-mono">rahul.cs6765@gmail.com</p>
                            </div>
                            <button
                                onClick={() => setShowCompose(true)}
                                className="px-8 py-4 rounded-full bg-[#007AFF] hover:bg-[#0062cc] active:scale-95 text-white flex items-center gap-3 text-3xl font-bold shadow-lg transition-transform"
                            >
                                <Send size={36} />
                                <span>Compose</span>
                            </button>
                        </div>

                        {/* Recruiter / Direct Contact Callout Banner */}
                        <div className="p-8 rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl relative overflow-hidden flex items-center justify-between">
                            <div className="max-w-[70%]">
                                <span className="text-2xl uppercase tracking-widest font-bold bg-white/20 px-4 py-1 rounded-full inline-block mb-3">Direct Contact</span>
                                <h3 className="text-5xl font-bold leading-tight mb-2">Have a Mobile Role or Project?</h3>
                                <p className="text-3xl text-blue-100">Drop an email directly to Rahul's primary inbox.</p>
                            </div>
                            <button
                                onClick={openDirectMail}
                                className="px-8 py-5 rounded-2xl bg-white text-blue-600 hover:bg-gray-100 active:scale-95 font-bold text-3xl shadow-lg flex items-center gap-3 flex-shrink-0"
                            >
                                <Mail size={36} />
                                <span>Send Email</span>
                            </button>
                        </div>

                        {/* Search Input Bar */}
                        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${!isDark ? 'bg-white border-gray-300' : 'bg-[#1C1C1E] border-white/10'}`}>
                            <Search size={44} className="text-gray-400 flex-shrink-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search messages, senders, topics..."
                                className="bg-transparent text-4xl w-full outline-none placeholder:text-gray-500"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="text-gray-400 p-2">
                                    <X size={36} />
                                </button>
                            )}
                        </div>

                        {/* Email Item Rows */}
                        <div className={`rounded-3xl overflow-hidden border divide-y ${!isDark ? 'bg-white border-gray-200 divide-gray-100 shadow-md' : 'bg-[#1C1C1E] border-white/10 divide-white/10'}`}>
                            {filteredEmails.map((email) => (
                                <motion.div
                                    key={email.id}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedEmail(email)}
                                    className={`p-7 flex items-start gap-6 cursor-pointer transition-colors ${!isDark ? 'hover:bg-gray-50' : 'hover:bg-white/5'}`}
                                >
                                    {/* Unread indicator / Avatar */}
                                    <div className="relative flex-shrink-0 mt-1">
                                        <div className={`w-20 h-20 rounded-2xl ${email.avatarBg} flex items-center justify-center text-white text-3xl font-black shadow-md`}>
                                            {email.avatarText}
                                        </div>
                                        {email.unread && (
                                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#007AFF] border-2 border-white ring-2 ring-blue-500/30" />
                                        )}
                                    </div>

                                    {/* Email preview details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className={`text-5xl font-bold truncate ${email.unread ? (!isDark ? 'text-black' : 'text-white') : 'text-gray-400'}`}>
                                                {email.from}
                                            </h4>
                                            <span className="text-3xl text-gray-400 font-mono flex-shrink-0 ml-4">{email.date}</span>
                                        </div>
                                        <p className="text-4xl font-semibold text-[#007AFF] truncate mb-2">{email.subject}</p>
                                        <p className="text-3xl text-gray-400 line-clamp-2 leading-relaxed">{email.preview}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Status Info */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-3xl text-gray-400 font-medium">
                        <span>Updated Just Now</span>
                        <span>{filteredEmails.length} Messages • rahul.cs6765@gmail.com</span>
                    </div>
                </div>
            )}

            {/* --- COMPOSE EMAIL MODAL --- */}
            <AnimatePresence>
                {showCompose && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/85 backdrop-blur-2xl z-50 flex items-center justify-center p-8"
                        onClick={() => setShowCompose(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 280 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`w-full max-w-[1100px] p-12 rounded-[4rem] border shadow-[0_32px_80px_rgba(0,0,0,0.85)] flex flex-col gap-6 ${
                                !isDark ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#1C1C1E] border-white/20 text-white'
                            }`}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                <button
                                    onClick={() => setShowCompose(false)}
                                    className="text-4xl font-medium text-gray-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <h3 className="text-5xl font-bold">New Message</h3>
                                <button
                                    onClick={handleSendEmail}
                                    className="px-6 py-3 rounded-full bg-[#007AFF] hover:bg-[#0062cc] text-white text-3xl font-bold flex items-center gap-2 shadow-md active:scale-95"
                                >
                                    <Send size={32} />
                                    <span>Send</span>
                                </button>
                            </div>

                            {/* To Field */}
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <span className="text-3xl text-gray-400 font-medium w-24">To:</span>
                                <div className="px-5 py-2 rounded-full bg-blue-500/20 text-blue-400 text-3xl font-mono font-semibold">
                                    Rahul Singh &lt;rahul.cs6765@gmail.com&gt;
                                </div>
                            </div>

                            {/* From / Your Name Field */}
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <span className="text-3xl text-gray-400 font-medium w-24">From:</span>
                                <input
                                    type="text"
                                    value={composeForm.name}
                                    onChange={(e) => setComposeForm({ ...composeForm, name: e.target.value })}
                                    placeholder="Your Name & Email (e.g. Recruiter / Client)"
                                    className="bg-transparent text-3xl outline-none flex-1 placeholder:text-gray-500"
                                />
                            </div>

                            {/* Subject Field */}
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <span className="text-3xl text-gray-400 font-medium w-24">Subject:</span>
                                <input
                                    type="text"
                                    value={composeForm.subject}
                                    onChange={(e) => setComposeForm({ ...composeForm, subject: e.target.value })}
                                    placeholder="Opportunity / Collaboration / Project Inquiry"
                                    className="bg-transparent text-3xl outline-none flex-1 font-semibold placeholder:text-gray-500"
                                />
                            </div>

                            {/* Message Body Field */}
                            <textarea
                                rows={6}
                                value={composeForm.message}
                                onChange={(e) => setComposeForm({ ...composeForm, message: e.target.value })}
                                placeholder="Type your message here..."
                                className="bg-transparent text-3xl leading-relaxed outline-none w-full resize-none placeholder:text-gray-500 p-2"
                            />

                            {/* Send Action */}
                            <div className="pt-4 border-t border-white/10 flex justify-end gap-4">
                                <button
                                    onClick={handleSendEmail}
                                    className="w-full py-6 rounded-2xl bg-[#007AFF] hover:bg-[#0062cc] active:scale-95 text-white text-4xl font-bold flex items-center justify-center gap-4 shadow-xl"
                                >
                                    <Send size={40} />
                                    <span>Send Message via Email Client</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// --- AUTHENTIC MUSIC APP COMPONENT (APPLE MUSIC ONLY) ---
const MusicApp = ({ isDark }) => {
    const applePlaylistUrl = 'https://music.apple.com/in/playlist/addicted/pl.u-mJy81vRuNVopbYx'
    const appleEmbedUrl = 'https://embed.music.apple.com/in/playlist/addicted/pl.u-mJy81vRuNVopbYx'

    return (
        <div className="flex-1 w-full h-full flex flex-col items-center justify-between p-8 pb-12 overflow-y-auto">
            <div className="w-full max-w-[94%] flex flex-col items-center my-auto py-4">
                {/* Apple Music Pill Badge */}
                <div className="px-8 py-3 rounded-full bg-[#FA233B]/15 border border-[#FA233B]/30 text-[#FA233B] text-3xl font-bold flex items-center gap-3 mb-6 shadow-md">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.03-.49 2.64-1.24z"/>
                    </svg>
                    <span>Apple Music</span>
                </div>

                {/* Header Title */}
                <h3 className={`text-9xl font-black mb-3 text-center tracking-tight ${!isDark ? 'text-gray-900' : 'text-white'}`}>
                    Addicted
                </h3>
                <p className={`text-5xl text-center mb-8 font-medium ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Curated by Rahul Singh • On Apple Music
                </p>

                {/* Embed Container Scaled for 1500px Canvas */}
                <div className="w-full overflow-hidden shadow-2xl rounded-[3rem] relative bg-black/60 border border-white/10" style={{ height: '1600px' }}>
                    <div className="absolute top-0 left-0 origin-top-left w-[31.25%] h-[500px]" style={{ transform: 'scale(3.2)' }}>
                        <iframe
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write *"
                            frameBorder="0"
                            height="500"
                            style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '14px', background: 'transparent' }}
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            src={appleEmbedUrl}
                            title="Addicted by Rahul Singh on Apple Music"
                        />
                    </div>
                </div>

                {/* External Direct Link Action Button */}
                <div className="mt-8 flex items-center gap-6">
                    <a
                        href={applePlaylistUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-10 py-5 rounded-full bg-[#FA233B] hover:bg-[#d91b31] active:scale-95 text-white text-4xl font-bold flex items-center gap-4 shadow-xl transition-all"
                    >
                        <ExternalLink size={44} />
                        <span>Open "Addicted" in Apple Music</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

const HomeOS = ({ activeAppId, setActiveAppId, osType = 'ios' }) => {
    // const [activeAppId, setActiveAppId] = useState(null) // Controlled by parent
    const isAndroid = osType === 'android'
    const [isDark, setIsDark] = useState(true)
    const [lang, setLang] = useState('en')
    const [customWallpaper, setCustomWallpaper] = useState(null)
    const wallpaper = customWallpaper || (osType === 'android' ? wallpaperAndroid : wallpaperIphone)
    const isPlaying = false
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isWallpaperOpen, setIsWallpaperOpen] = useState(false)
    const [previewWallpaper, setPreviewWallpaper] = useState(null)
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const t = translations[lang]

    const wallpapers = [
        { src: wallpaperAndroid, name: 'Google Pixel Material' },
        { src: wallpaperAndroidBlack, name: 'Android Minimal Black' },
        { src: wallpaperAndroidRed, name: 'Android Petals' },
        { src: wallpaperIphone, name: 'iPhone Titanium' }
    ]

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'it', name: 'Italiano' },
        { code: 'pt', name: 'Português' },
        { code: 'ru', name: 'Русский' },
        { code: 'ja', name: '日本語' },
        { code: 'zh', name: '中文' },
        { code: 'ko', name: '한국어' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'bn', name: 'বাংলা' },
        { code: 'ar', name: 'العربية' },
        { code: 'id', name: 'Bahasa Indonesia' },
    ]

    const projects = [
        {
            title: "Kranti App",
            subtitle: "Smart Agricultural & Business Assistant",
            tech: ["React Native", "Node.js", "MongoDB", "Cloudinary"],
            color: "bg-emerald-600",
            image: projectKranti,
            link: "https://play.google.com/store/apps/details?id=com.kranti.app&hl=en_IN&pli=1"
        },
        {
            title: "Vindhya Almirah",
            subtitle: "Industrial Furniture & Commercial Showcase Platform",
            tech: ["React", "Tailwind CSS", "Vite", "SEO Optimization"],
            color: "bg-purple-600",
            image: projectVindhya,
            link: "https://www.vindhyaalmirah.com/"
        },
        {
            title: "CityConnect",
            subtitle: "Smart City Civic Management Platform",
            tech: ["React", "React Native", "Node.js", "MySQL", "JWT"],
            color: "bg-blue-600",
            image: projectCityConnect,
            link: "https://github.com/mrsinghmzp"
        },
        {
            title: "AI Resume Analyzer",
            subtitle: "Automated ATS Evaluation & Career Insights",
            tech: ["Python", "Streamlit", "Google Gemini API", "NLP"],
            color: "bg-indigo-600",
            image: projectResumeAnalyzer,
            link: "https://github.com/mrsinghmzp"
        },
        {
            title: "LMS Platform",
            subtitle: "Learning Management & Education System",
            tech: ["React Native", "Android SDK", "REST APIs", "SQLite"],
            color: "bg-amber-600",
            image: projectLms,
            link: "https://github.com/mrsinghmzp"
        }
    ]

    // Custom Photos Data
    const myPhotos = [
        { id: 1, src: photo1, caption: 'Kranti App Thesis Degree' },
        { id: 2, src: photo2, caption: 'Rahul Singh • Mobile Developer' },
        { id: 3, src: photo3, caption: 'Creative Mindset' },
    ]

    // Apps configuration
    const apps = [
        {
            id: 'about',
            name: t.about,
            icon: User,
            color: 'bg-indigo-500',
            content: (
                <div className="p-8 pb-32">
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 bg-gray-200">
                            {/* Placeholder Profile Pic - Replace with actual photo */}
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className={`text-8xl font-bold mb-4 text-center ${!isDark ? 'text-gray-900' : 'text-white'}`}>{t.aboutMe}</h2>
                    </div>

                    <div className="space-y-8 px-4">
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            I’m Rahul Singh, an Android & Hybrid Mobile Application Developer based in Pune, Maharashtra. I build intuitive, scalable, and responsive mobile experiences that solve real-world problems.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            With hands-on experience in Java, Android SDK, React Native, and RESTful API integration, I've designed and shipped mobile applications directly to the Google Play Store. My core technical strengths include Activities, Fragments, RecyclerView, Room Database, SQLite, State Management, and backend API integration.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            Through my Post Graduate Diploma in Mobile Computing (PGCP-MC) at C-DAC ACTS Pune, I deepened my foundation in mobile systems architecture, hybrid platforms, and on-device AI integration using Google Gemini API.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            Outside the editor, I enjoy keeping up with modern mobile architecture trends, contributing to open-source projects, playing cricket, and cooking up good food with friends.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            I’m actively looking for full-time opportunities and exciting mobile projects. Let’s connect and build something impactful together!
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'contact',
            name: t.phone || t.contact || 'Phone',
            icon: Phone,
            color: 'bg-green-500',
            content: (
                <CallApp
                    isDark={isDark}
                    osType={osType}
                    profilePic={profilePic}
                />
            )
        },
        {
            id: 'projects',
            name: t.projects,
            icon: Briefcase,
            color: 'bg-blue-500',
            content: (
                <div className="p-8 pb-48 space-y-16">
                    <h2 className={`text-9xl font-bold sticky top-0 backdrop-blur-md py-10 z-10 ${!isDark ? 'bg-white/80 text-gray-900' : 'bg-black/80 text-white'}`}>{t.featuredWork}</h2>

                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-[3rem] overflow-hidden border-2 shadow-2xl ${!isDark ? 'bg-white border-gray-200' : 'bg-gray-900 border-white/10'}`}
                        >
                            {/* Media Placeholder - ideally a GIF */}
                            <div className="h-[32rem] bg-gray-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className={`font-bold text-7xl leading-tight mb-4 ${!isDark ? 'text-gray-900' : 'text-white'}`}>{p.title}</h3>
                                        <p className={`text-5xl ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>{p.subtitle}</p>
                                    </div>
                                    <a href={p.link} target="_blank" rel="noreferrer" className={`p-5 rounded-full transition-colors ${!isDark ? 'bg-black/5 hover:bg-black/10 text-gray-900' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                        <ExternalLink size={48} />
                                    </a>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    {p.tech.map((t) => (
                                        <span key={t} className={`px-6 py-2 rounded-2xl text-3xl border ${!isDark ? 'bg-black/5 text-gray-600 border-black/5' : 'bg-white/5 text-gray-300 border-white/5'}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="text-center text-4xl text-gray-500 py-10">
                        {t.tapToView}
                    </div>
                </div>
            )
        },
        {
            id: 'music',
            name: t.music,
            icon: Music,
            color: 'bg-red-500',
            content: (
                <MusicApp isDark={isDark} osType={osType} />
            )
        },
        {
            id: 'photos',
            name: t.photos,
            icon: ImageIcon,
            color: 'bg-yellow-500',
            content: (
                <div className="relative h-full flex flex-col">
                    <div className="p-4 grid grid-cols-2 gap-4 pb-32 overflow-y-auto">
                        <div className="col-span-2 py-4">
                            <h2 className={`text-5xl font-bold px-4 ${!isDark ? 'text-gray-900' : 'text-white'}`}>{t.recents}</h2>
                        </div>
                        {myPhotos.map((photo) => (
                            <motion.button
                                key={photo.id}
                                layoutId={`photo-${photo.id}`}
                                onClick={() => setSelectedPhoto(photo)}
                                className="aspect-square bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer border-0 p-0"
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </motion.button>
                        ))}
                        <div className="col-span-2 py-8 text-center text-gray-500 text-3xl">
                            {myPhotos.length} Photos
                        </div>
                    </div>

                </div>
            )
        },
        {
            id: 'settings',
            name: t.settings,
            icon: Settings,
            color: 'bg-gray-600',
            content: (
                <div className={`p-0 min-h-full pt-12 transition-colors duration-300 ${!isDark ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}>
                    {/* Header removed to avoid duplication with generic app header */}

                    <div className={`mx-6 rounded-3xl overflow-hidden mb-8 transition-colors duration-300 ${!isDark ? 'bg-white shadow-lg' : 'bg-gray-900'}`}>
                        <div className={`p-8 flex items-center justify-between border-b ${!isDark ? 'border-gray-100' : 'border-gray-800'}`}>
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-blue-500 rounded-2xl"><Moon size={40} className="text-white" /></div>
                                <span className="text-6xl font-medium">{t.darkMode}</span>
                            </div>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsDark(!isDark)
                                }}
                                className={`w-24 h-14 rounded-full p-1 transition-colors duration-300 ${isDark ? 'bg-green-500' : 'bg-gray-600'}`}
                            >
                                <div className={`w-12 h-12 bg-white rounded-full shadow-md transition-transform duration-300 ${isDark ? 'translate-x-10' : 'translate-x-0'}`} />
                            </div>
                        </div>

                        <div className={`p-8 flex items-center justify-between relative z-20 border-b ${!isDark ? 'border-gray-100' : 'border-gray-800'}`}>
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500 rounded-2xl"><Globe size={40} className="text-white" /></div>
                                <span className="text-6xl font-medium">{t.language}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setIsLangOpen(true)
                                    }}
                                    className={`text-5xl font-medium flex items-center gap-2 ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}
                                >
                                    {languages.find(l => l.code === lang)?.name}
                                    <ChevronLeft size={32} className="rotate-180" />
                                </button>
                            </div>
                        </div>

                        <div className="p-8 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-pink-500 rounded-2xl"><Upload size={40} className="text-white" /></div>
                                <span className="text-6xl font-medium">{t.wallpaper}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setPreviewWallpaper(wallpaper) // Initialize preview
                                        setIsWallpaperOpen(true)
                                    }}
                                    className={`text-5xl font-medium flex items-center gap-2 ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}
                                >
                                    {t.select}
                                    <ChevronLeft size={32} className="rotate-180" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Language Modal/Dropdown Portal-like behavior */}
                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: '-100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '-100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={`fixed inset-0 z-50 flex flex-col ${!isDark ? 'bg-gray-100' : 'bg-black'}`}
                            >
                                <div className={`p-8 pt-12 flex items-center justify-between border-b ${!isDark ? 'border-gray-200 bg-white' : 'border-gray-800 bg-gray-900'}`}>
                                    <span className="text-6xl font-bold px-4">{t.language}</span>
                                    <button onClick={() => setIsLangOpen(false)} className="p-4 rounded-full bg-gray-500/10">
                                        <X size={48} />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setLang(l.code)
                                                setIsLangOpen(false)
                                            }}
                                            className={`w-full p-8 rounded-3xl flex items-center justify-between text-5xl font-medium transition-colors ${lang === l.code
                                                ? (!isDark ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white')
                                                : (!isDark ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-gray-200 hover:bg-gray-800')
                                                }`}
                                        >
                                            <span>{l.name}</span>
                                            {lang === l.code && <Check size={40} />}
                                        </button>
                                    ))}
                                    <div className="h-32"></div>
                                </div>
                            </motion.div>
                        )}

                        {isWallpaperOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={`fixed inset-0 z-50 flex flex-col ${!isDark ? 'bg-gray-100' : 'bg-black'}`}
                                onLayoutAnimationComplete={() => {
                                    // Initialize preview with current wallpaper when opening
                                    if (!previewWallpaper && wallpaper) setPreviewWallpaper(wallpaper)
                                }}
                            >
                                <div className={`p-8 pt-12 flex items-center justify-between border-b ${!isDark ? 'border-gray-200 bg-white' : 'border-gray-800 bg-gray-900'}`}>
                                    <span className="text-6xl font-bold px-4">{t.wallpaper}</span>
                                    <button onClick={() => setIsWallpaperOpen(false)} className="p-4 rounded-full bg-gray-500/10">
                                        <X size={48} />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 relative">
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {wallpapers.map((wp, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setPreviewWallpaper(wp.src)}
                                                className={`relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 transition-all duration-300 ${previewWallpaper === wp.src ? 'border-blue-500 scale-95 shadow-xl' : 'border-transparent hover:scale-95 shadow-md'}`}
                                            >
                                                <img src={wp.src} alt={wp.name} className="w-full h-full object-cover" />
                                                {previewWallpaper === wp.src && (
                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[1px]">
                                                        <div className="bg-blue-500 p-3 rounded-full shadow-lg">
                                                            <Check size={32} className="text-white" />
                                                        </div>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="p-2 pb-48">
                                        <label className={`w-full py-8 rounded-[2rem] flex items-center justify-center gap-4 text-4xl font-medium cursor-pointer transition-all active:scale-95 ${!isDark ? 'bg-white shadow-sm text-gray-700' : 'bg-gray-900 text-gray-300'} ${previewWallpaper && !wallpapers.find(w => w.src === previewWallpaper) ? 'ring-4 ring-blue-500' : ''}`}>
                                            <Upload size={40} />
                                            <span>{uploadSuccess ? 'Uploaded!' : 'Upload Custom'}</span>
                                            {previewWallpaper && !wallpapers.find(w => w.src === previewWallpaper) && <Check size={40} className="text-blue-500" />}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files[0]
                                                    if (file) {
                                                        const url = URL.createObjectURL(file)
                                                        setPreviewWallpaper(url)
                                                        setUploadSuccess(true)
                                                        setTimeout(() => setUploadSuccess(false), 2000)
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>

                                    {/* Confirmation Button */}
                                    <div className="absolute bottom-12 left-0 w-full px-8">
                                        <button
                                            onClick={() => {
                                                if (previewWallpaper) {
                                                    setCustomWallpaper(previewWallpaper)
                                                    setIsWallpaperOpen(false)
                                                }
                                            }}
                                            disabled={!previewWallpaper || previewWallpaper === wallpaper}
                                            className={`w-full py-6 rounded-[2rem] text-4xl font-bold shadow-xl transition-all ${previewWallpaper && previewWallpaper !== wallpaper
                                                ? 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
                                                : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            Set Wallpaper
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )
        },
        { id: 'github', name: 'GitHub', icon: Github, color: 'bg-gray-800', content: null, external: 'https://github.com/mrsinghmzp' },
        { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', content: null, external: 'https://linkedin.com/in/singhmzp' },
        { id: 'portfolio', name: t.portfolio || 'Portfolio', icon: Globe, color: 'bg-blue-600', content: null, external: 'https://rahul-singh-profile-nine.vercel.app/' },
        {
            id: 'mail',
            name: t.mail || 'Mail',
            icon: Mail,
            color: 'bg-blue-500',
            content: (
                <MailApp
                    isDark={isDark}
                    osType={osType}
                />
            )
        },
    ]
    const activeApp = apps.find(a => a.id === activeAppId)

    const gridAppIds = ['about', 'projects', 'portfolio', 'mail', 'github', 'linkedin']
    const dockAppIds = ['photos', 'music', 'contact', 'settings']
    const gridApps = gridAppIds.map(id => apps.find(a => a.id === id)).filter(Boolean)
    const dockApps = dockAppIds.map(id => apps.find(a => a.id === id)).filter(Boolean)

    return (
        <div
            className={`w-full h-full select-none flex flex-col font-sans transition-colors duration-300 relative ${isDark ? 'bg-transparent text-white' : 'bg-gray-100 text-black'}`}
            style={{
                borderRadius: isAndroid ? '68px' : '190px',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility',
                ...(wallpaper ? {
                    backgroundImage: `url(${wallpaper})`,
                    backgroundSize: wallpaper === wallpaperAndroidRed ? 'auto 110%' : 'cover',
                    backgroundPosition: wallpaper === wallpaperAndroidRed ? '15% top' : 'center center',
                    backgroundRepeat: 'no-repeat'
                } : {})
            }}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
        >
            {/* Top Status Bar: Android Hole-Punch or iOS Dynamic Island */}
            {isAndroid ? (
                <AndroidStatusBar lang={lang} />
            ) : (
                <IOSStatusBar lang={lang} isPlaying={isPlaying} />
            )}

            {/* Content Area */}
            <AnimatePresence mode="wait">
                {!activeAppId ? (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={`flex-1 px-10 flex flex-col justify-between relative z-10 ${isAndroid ? 'pt-24 pb-7' : 'pt-36 pb-4'}`}
                    >
                        {/* Upper Section: Android At A Glance vs iOS Smart Widget */}
                        <div className="w-full">
                            {isAndroid ? (
                                <AndroidAtAGlanceWidget lang={lang} />
                            ) : (
                                <div className="grid grid-cols-2 gap-6 w-full">
                                    <IOSCalendarWidget lang={lang} />
                                    <IOSProfileWidget onOpenAbout={() => setActiveAppId('about')} />
                                </div>
                            )}

                            {/* Main Apps Grid - 4 apps in a row */}
                            <div className={`grid grid-cols-4 gap-x-6 justify-items-center ${isAndroid ? 'gap-y-8 mt-6' : 'gap-y-10 mt-10'}`}>
                                {gridApps.map((app, i) => (
                                    <motion.div
                                        key={app.id}
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            if (app.external) {
                                                window.open(app.external, '_blank')
                                            } else {
                                                setActiveAppId(app.id)
                                            }
                                        }}
                                        className="flex flex-col items-center gap-3 cursor-pointer group"
                                    >
                                        <div
                                            className={`w-[196px] h-[196px] relative overflow-hidden flex items-center justify-center transition-all duration-300 ${
                                                isAndroid
                                                    ? 'rounded-full shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]'
                                                    : 'shadow-[0_20px_40px_-6px_rgba(0,0,0,0.7),0_6px_16px_-2px_rgba(0,0,0,0.5)] group-hover:shadow-[0_28px_56px_-6px_rgba(0,0,0,0.85)]'
                                            }`}
                                            style={{ borderRadius: isAndroid ? '50%' : '22.5%' }}
                                        >
                                            <motion.div
                                                className="w-full h-full"
                                                initial={{ scale: 1 }}
                                                animate={{ scale: [1, 1.08, 1] }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1.0 + (i * 0.1),
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {renderAppIcon(app.id, osType)}
                                            </motion.div>

                                            {/* Apple Specular Sheen (iOS only) */}
                                            {!isAndroid && (
                                                <div
                                                    className="absolute inset-0 pointer-events-none border border-white/25"
                                                    style={{
                                                        borderRadius: '22.5%',
                                                        background: 'linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 65%, rgba(0,0,0,0.06) 100%)'
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <span className="text-3xl font-semibold text-white tracking-tight text-center px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                                            {app.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Lower Section: Android Search + Quick Access Dock (Photos, Music, Contact, Settings) */}
                        <div className="w-full mt-auto">
                            {/* Android Google Search Bar */}
                            {isAndroid && <AndroidSearchBar />}

                            {/* Dock Area */}
                            <div className={`w-full flex items-center justify-around ${
                                isAndroid
                                    ? 'bg-transparent py-2 px-2'
                                    : 'rounded-[60px] bg-black/50 backdrop-blur-3xl border border-white/20 p-7 shadow-[0_24px_50px_rgba(0,0,0,0.65)]'
                            }`}>
                                {dockApps.map((app) => (
                                    <motion.div
                                        key={app.id}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            if (app.external) {
                                                window.open(app.external, '_blank')
                                            } else {
                                                setActiveAppId(app.id)
                                            }
                                        }}
                                        className="flex flex-col items-center cursor-pointer group"
                                        title={app.name}
                                    >
                                        <div
                                            className={`w-[196px] h-[196px] relative overflow-hidden flex items-center justify-center transition-all duration-300 ${
                                                isAndroid
                                                    ? 'rounded-full shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]'
                                                    : 'shadow-[0_20px_40px_-6px_rgba(0,0,0,0.7),0_6px_16px_-2px_rgba(0,0,0,0.5)] group-hover:shadow-[0_28px_56px_-6px_rgba(0,0,0,0.85)]'
                                            }`}
                                            style={{ borderRadius: isAndroid ? '50%' : '22.5%' }}
                                        >
                                            <div className="w-full h-full">
                                                {renderAppIcon(app.id, osType)}
                                            </div>

                                            {/* Apple Specular Sheen (iOS only) */}
                                            {!isAndroid && (
                                                <div
                                                    className="absolute inset-0 pointer-events-none border border-white/25"
                                                    style={{
                                                        borderRadius: '22.5%',
                                                        background: 'linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 65%, rgba(0,0,0,0.06) 100%)'
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Navigation Gesture Bar: Android Pill vs iOS Home Bar */}
                            <div className={`${isAndroid ? 'w-36 h-2.5 bg-white/70' : 'w-56 h-3 bg-white/85'} rounded-full mx-auto mt-4 shadow-md pointer-events-none`} />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="app-view"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`flex-1 w-full h-full relative pt-32 pb-4 flex flex-col ${activeApp.id === 'contact' || activeApp.id === 'mail' ? 'overflow-hidden' : 'overflow-y-auto'} transition-colors duration-300 ${!isDark ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}
                    >
                        {/* App Header */}
                        <div className="w-full px-8 py-2 mb-2 flex items-center gap-6 z-20 flex-shrink-0">
                            <button
                                onClick={() => setActiveAppId(null)}
                                className={`p-3 rounded-full transition-colors ${!isDark ? 'hover:bg-black/10' : 'hover:bg-white/10'}`}
                            >
                                <ChevronLeft size={64} />
                            </button>
                            <div className="w-28 h-28 relative overflow-hidden shadow-lg flex-shrink-0" style={{ borderRadius: isAndroid ? '50%' : '22.5%' }}>
                                {renderAppIcon(activeApp.id, osType)}
                            </div>
                            <span className="font-semibold text-6xl">{activeApp.name}</span>
                        </div>

                        {/* App Content Container */}
                        <div className={`w-full ${activeApp.id === 'contact' || activeApp.id === 'mail' ? 'flex-1 flex flex-col min-h-0 overflow-hidden' : 'flex-1'}`}>
                            {activeApp.content}
                        </div>

                        {/* Bottom Navigation Indicator in App View */}
                        <div className="w-56 h-3 bg-white/75 rounded-full mx-auto my-2 pointer-events-none shadow-lg z-50 flex-shrink-0" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Lightbox Overlay */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-8 pointer-events-auto"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            key={selectedPhoto.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_e, { offset }) => {
                                const swipe = offset.x;

                                if (swipe < -50) {
                                    // Swipe Left - Next Photo
                                    const currentIndex = myPhotos.findIndex(p => p.id === selectedPhoto.id)
                                    const nextIndex = (currentIndex + 1) % myPhotos.length
                                    setSelectedPhoto(myPhotos[nextIndex])
                                } else if (swipe > 50) {
                                    // Swipe Right - Previous Photo
                                    const currentIndex = myPhotos.findIndex(p => p.id === selectedPhoto.id)
                                    const prevIndex = (currentIndex - 1 + myPhotos.length) % myPhotos.length
                                    setSelectedPhoto(myPhotos[prevIndex])
                                }
                            }}
                            className="w-full aspect-square bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-12 relative touch-none cursor-grab active:cursor-grabbing"
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                            onPointerUp={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="text-center w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="text-white text-5xl font-medium mb-12">{selectedPhoto.caption}</p>
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-white/50 text-3xl animate-pulse">Swipe to navigate</p>
                                <button
                                    onClick={() => setSelectedPhoto(null)}
                                    className="px-12 py-5 bg-white/10 rounded-full text-white text-4xl backdrop-blur-md border border-white/20 active:scale-95 transition-transform mt-4"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HomeOS
