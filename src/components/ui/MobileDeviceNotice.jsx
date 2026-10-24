import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, X, Sparkles, Smartphone } from 'lucide-react'

const MobileDeviceNotice = ({ isMobile }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        if (!isMobile || isDismissed) return

        // Small subtle delay for polished entrance after page loads
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 600)
        return () => clearTimeout(timer)
    }, [isMobile, isDismissed])

    const handleDismiss = () => {
        setIsVisible(false)
        setIsDismissed(true)
    }

    if (!isMobile || isDismissed) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 pointer-events-none">
                    {/* Dark Glass Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleDismiss}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto cursor-pointer"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                        className="relative w-full max-w-md bg-zinc-950/95 border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-2xl pointer-events-auto overflow-hidden z-10"
                    >
                        {/* Ambient top glowing gradient line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={handleDismiss}
                            aria-label="Close notification"
                            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-start gap-4 pr-6">
                            {/* Icon with Glowing Gradient Badge */}
                            <div className="relative shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/10">
                                <Monitor size={24} className="stroke-[1.8]" />
                                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-zinc-300">
                                    <Smartphone size={11} />
                                </span>
                            </div>

                            <div className="flex-1 min-w-0">
                                {/* Tag Badge */}
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 uppercase mb-2">
                                    <Sparkles size={11} />
                                    <span>Desktop Recommended</span>
                                </div>

                                {/* Main Text requested by user */}
                                <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                                    Explore all features with a larger screen. Open our website on your desktop for the complete mobile device experience.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleDismiss}
                                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 active:scale-95 transition-all shadow-lg cursor-pointer"
                            >
                                Continue on Mobile
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MobileDeviceNotice
