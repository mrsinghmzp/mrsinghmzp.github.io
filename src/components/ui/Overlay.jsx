import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Smartphone, Globe, X, ExternalLink, Bookmark, GraduationCap, Rocket, Cpu, Award, CheckCircle2, Target } from 'lucide-react'

// Image Imports for Thoughts
import photo1 from '../../assets/photos/photo1.avif'
import photo2 from '../../assets/photos/photo2.avif'
import photo3 from '../../assets/photos/photo3.avif'
import aiMobileImg from '../../assets/thoughts/ai-mobile.avif'
import onDeviceAiImg from '../../assets/thoughts/on-device-ai.avif'
import reactNativeEngineeringImg from '../../assets/thoughts/react-native-engineering.avif'
import aiSoftwareEngineeringImg from '../../assets/thoughts/ai-software-engineering.avif'
import profile2Img from '../../assets/profile2.avif'

const Section = ({ children, className = '', ...props }) => (
    <section className={`w-full flex flex-col ${className.includes('justify-') ? '' : 'justify-center'} py-20 md:py-32 px-5 md:px-8 ${className}`} {...props}>
        {children}
    </section>
)

const journeyMilestones = [
    {
        id: 'college',
        step: '01',
        title: 'College',
        role: 'B.Tech in Computer Science & Engineering',
        company: 'KMCLU, Lucknow',
        period: 'May 2021 – June 2025',
        periodShort: '2021 – 2025',
        location: 'Lucknow, UP',
        grade: 'First Division (73.4%)',
        category: 'FOUNDATION',
        icon: GraduationCap,
        color: 'from-amber-500 to-orange-500',
        shortDescription: 'Core foundation in Computer Science, Object-Oriented Programming, Data Structures, and Software Engineering.',
        fullDescription: 'Completed a 4-year undergraduate B.Tech program in Computer Science & Engineering with First Division honors. Mastered fundamental computer science theory, algorithms, object-oriented software design in Java, database management systems, and Linux environments, forming the architectural foundation for subsequent mobile application development.',
        highlights: [
            'Graduated with First Division distinction (73.43%) in Computer Science & Engineering',
            'Strong foundation in Java, OOP, Data Structures, DBMS, and Operating Systems',
            'Engineered academic software projects and foundational full-stack applications'
        ],
        tech: ['Java', 'C++', 'Data Structures', 'OOP', 'SQL', 'DBMS', 'Linux'],
        linkText: 'University Portal',
        website: 'https://kmclu.ac.in/'
    },
    {
        id: 'kranti',
        step: '02',
        title: 'Kranti App',
        role: 'Android & Hybrid Mobile Developer',
        company: 'Kranti App (Live on Play Store)',
        period: '2024 – Present',
        periodShort: '2024 – Present',
        location: 'Production / Remote',
        grade: 'Google Play Store Live',
        category: 'PRODUCTION APP',
        icon: Rocket,
        color: 'from-emerald-500 to-teal-600',
        shortDescription: 'Published cross-platform agricultural & business assistant on Google Play Store with real-time analytics.',
        fullDescription: 'Developed and published a cross-platform React Native mobile application on Google Play Store, implementing modular features with Context API, React Navigation, reusable components, and RESTful APIs. Built Node.js/Express.js and MongoDB backend APIs for financial tracking, production records, ROI calculations, and integrated external weather services for real-time data. Optimized mobile performance using FlatList and Cloudinary image caching for efficient data and media handling.',
        highlights: [
            'Architected and published production React Native app on Google Play Store with active users',
            'Built scalable Node.js/Express backend APIs for financial forecasting & ROI management',
            'Engineered high-performance mobile UI using FlatList virtualization & Cloudinary caching'
        ],
        tech: ['React Native', 'Android', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Cloudinary'],
        linkText: 'View on Google Play',
        website: 'https://play.google.com/store/apps/details?id=com.kranti.app&hl=en_IN&pli=1'
    },
    {
        id: 'techsaksham',
        step: '03',
        title: 'Microsoft & SAP',
        role: 'AI Transformative Learning Scholar',
        company: 'Microsoft & SAP (TechSaksham)',
        period: '2024 – 2025',
        periodShort: '2024 – 2025',
        location: 'Virtual / Corporate',
        grade: 'Certified Scholar',
        category: 'AI & ENTERPRISE',
        icon: Cpu,
        color: 'from-purple-500 to-pink-600',
        shortDescription: 'Hands-on training in AI engineering, generative AI models, cloud integration, and enterprise systems.',
        fullDescription: 'Selected for the prestigious AI Transformative Learning Program jointly delivered by Microsoft and SAP. Mastered principles of Generative AI, machine learning pipelines, and cloud APIs. Applied these concepts to build AI-driven applications including the AI Resume Analyzer with Google Gemini API, parsing candidate profiles against job benchmarks with sub-second execution.',
        highlights: [
            'Selected for prestigious joint AI transformative scholarship by Microsoft & SAP India',
            'Engineered AI Resume Analyzer powered by Google Gemini API, NLP, and Streamlit',
            'Deep exploration of GenAI workflows, prompt engineering, and cloud deployment'
        ],
        tech: ['Google Gemini API', 'Generative AI', 'Python', 'NLP', 'Cloud APIs', 'Streamlit'],
        linkText: 'TechSaksham Initiative',
        website: 'https://techsaksham.in/'
    },
    {
        id: 'cdac',
        step: '04',
        title: 'C-DAC Mobile Computing',
        role: 'Mobile Computing Specialist (PGCP-MC)',
        company: 'C-DAC ACTS, Pune',
        period: 'Feb 2026 – Aug 2026',
        periodShort: '2026',
        location: 'Pune, Maharashtra',
        grade: '74.6% Distinction',
        category: 'SPECIALIZATION',
        icon: Award,
        color: 'from-blue-500 to-indigo-600',
        shortDescription: 'Rigorous postgraduate training in Android SDK, Hybrid Mobile Apps, AI on Mobile, and Systems Architecture.',
        fullDescription: 'Completed intensive Postgraduate program in Mobile Computing with 74.6% distinction (209/280). Specialized in native Android SDK, Activities, Fragments, Room Database, SQLite, Retrofit networking, hybrid mobile app development, Google Gemini AI integration, Data Structures, and Linux system concepts. Architected production-grade mobile solutions following modern software engineering principles.',
        highlights: [
            'Graduated with 74.6% Distinction (209 / 280) from C-DAC Advanced Computing School',
            'Specialized in native Android SDK: Activities, Fragments, RecyclerView, Room Database',
            'Hands-on architecture in mobile systems, offline-first persistence & Gemini AI on mobile'
        ],
        tech: ['Android SDK', 'Java', 'Room DB', 'SQLite', 'Retrofit', 'Gemini AI', 'Data Structures', 'Linux'],
        linkText: 'C-DAC ACTS Portal',
        website: 'https://www.cdac.in/'
    }
]

const blogs = [
    {
        id: 'ai-mobile',
        number: '01',
        title: 'The Future of Mobile Apps Is AI-Powered',
        category: 'MOBILE DEVELOPMENT × AI',
        date: '2026',
        image: aiMobileImg,
        imageFocus: 'object-[20%_25%]',
        preview: 'I believe the next generation of mobile applications will go beyond displaying information. They will understand user intent, automate repetitive tasks, and deliver personalized experiences. As developers, our challenge is to integrate AI without sacrificing performance, privacy, or usability.',
        content: `I believe the next generation of mobile applications will go beyond displaying information. They will understand user intent, automate repetitive tasks, and deliver personalized experiences. As developers, our challenge is to integrate AI without sacrificing performance, privacy, or usability.

There’s a lot of noisy debate around artificial intelligence replacing software engineers. Having spent time working with both core Android development and integrating large language models like Google Gemini, my perspective is overwhelmingly positive: AI is not a replacement for human creativity; it is our greatest amplifier.

For mobile developers, the shift from static interfaces to context-aware, intelligent applications is revolutionary. Tasks that used to require complex specialized machine learning pipelines or heavy cloud infrastructure can now be solved directly on device or via lean, performant API calls. Whether it's empowering farmers with instant visual diagnostics, automating ATS resume parsing in seconds, or generating personalized civic insights, AI enables solo developers to build products that previously required whole engineering departments.

What excites me most is that AI handles the tedious, repetitive boilerplate, freeing us up to focus on what truly matters: empathetic user experience, rock-solid architecture, fluid 60fps animations, and genuine human problem solving.

The barrier to turning an ambitious idea into a published mobile product has never been lower. For builders who stay curious, embrace continuous learning, and use AI with purpose, the future isn't intimidating — it is full of boundless possibility.`,
        color: 'from-cyan-500 to-blue-600',
        images: [aiMobileImg, onDeviceAiImg, photo3]
    },
    {
        id: 'on-device-ai',
        number: '02',
        title: 'AI Should Work Where the User Needs It',
        category: 'ON-DEVICE AI × PRIVACY',
        date: '2026',
        image: onDeviceAiImg,
        imageFocus: 'object-center',
        preview: 'On-device AI is an exciting direction for mobile development. Running models locally can reduce network dependency, improve responsiveness, and keep certain data on the device. I see hybrid AI architectures—combining on-device intelligence with cloud models—as a promising way to balance privacy, capability, and cost.',
        content: `On-device AI is an exciting direction for mobile development. Running models locally can reduce network dependency, improve responsiveness, and keep certain data on the device. I see hybrid AI architectures—combining on-device intelligence with cloud models—as a promising way to balance privacy, capability, and cost.

Mobile devices are uniquely personal. Users rely on their smartphones for banking, private health records, location telemetry, and sensitive communications. Pushing every token and query over the wire to distant server farms creates latency, offline bottlenecks, and privacy vulnerabilities.

By deploying quantized on-device models (such as Gemini Nano and lightweight edge networks) alongside cloud services, we achieve the best of both worlds:

• Instant Edge Execution: Zero round-trip latency for local semantic search, voice transcription, and sensor classification even when completely offline.

• Privacy by Design: User biometric, financial, and personal context remains encrypted on device without leaving the hardware enclave.

• Hybrid Orchestration: Dispatching complex generative queries to cloud LLMs only when necessary, minimizing server infrastructure costs while maximizing app battery life.

The future of mobile computing is not just cloud-first or local-only—it is intelligently hybrid.`,
        color: 'from-blue-600 via-indigo-600 to-cyan-400',
        images: [onDeviceAiImg, aiMobileImg, aiSoftwareEngineeringImg]
    },
    {
        id: 'react-native-engineering',
        number: '03',
        title: 'Great Mobile Development Is More Than Writing Code',
        category: 'REACT NATIVE × ENGINEERING',
        date: '2025',
        image: reactNativeEngineeringImg,
        imageFocus: 'object-[center_60%]',
        preview: 'Building an app is only the beginning. Real engineering means optimizing rendering, minimizing unnecessary API requests, managing application state, handling network failures, and designing maintainable architecture. My focus is to build mobile applications that remain fast, reliable, and scalable as they grow.',
        content: `Building an app is only the beginning. Real engineering means optimizing rendering, minimizing unnecessary API requests, managing application state, handling network failures, and designing maintainable architecture. My focus is to build mobile applications that remain fast, reliable, and scalable as they grow.

When moving from a proof-of-concept prototype to a production-grade application, the true depth of mobile engineering reveals itself. In cross-platform frameworks like React Native, bridging the JavaScript thread with the native UI thread requires deliberate, disciplined craftsmanship:

• Rendering & Frame Budget: Profiling re-renders with React DevTools and memoizing heavy components to stay within the 16.6ms frame budget (60fps). Virtualizing long lists with FlatList and FlashList prevents memory spikes.

• State Architecture: Avoiding bloated global stores. Keeping state localized where appropriate and leveraging clean Context API or lightweight stores to eliminate cascading renders.

• Offline Resilience & Network Caching: Real-world mobile networks drop packets. Intelligent local caching with SQLite/Room DB or persistent stores paired with exponential backoff makes apps feel instant and reliable regardless of signal strength.

• Clean Separation of Concerns: Isolating UI components from networking, analytics, and business logic guarantees that features can scale and be maintained across multi-year lifecycles.

Great mobile applications aren’t just written; they are engineered with empathy for the user's battery, data plan, device memory, and time.`,
        color: 'from-sky-500 to-blue-600',
        images: [reactNativeEngineeringImg, photo1, photo2]
    },
    {
        id: 'ai-software-engineering',
        number: '04',
        title: 'AI Will Change How We Build Software',
        category: 'AI AGENTS × SOFTWARE ENGINEERING',
        date: '2026',
        image: aiSoftwareEngineeringImg,
        imageFocus: 'object-[center_35%]',
        preview: 'AI coding tools are changing how developers plan, implement, and test software. But generating code is not the same as engineering a solution. I believe the most valuable developers will combine AI-assisted productivity with strong fundamentals, critical thinking, testing, security, and architectural judgment.',
        content: `AI coding tools are changing how developers plan, implement, and test software. But generating code is not the same as engineering a solution. I believe the most valuable developers will combine AI-assisted productivity with strong fundamentals, critical thinking, testing, security, and architectural judgment.

We are witnessing a fundamental paradigm shift from writing every syntax character manually to orchestrating intelligent agents, reviewing AI-generated code diffs, and steering complex multi-model systems.

However, the superpower of AI comes with the vital responsibility of engineering rigor:

• Architectural Vision: AI models generate localized code snippets effectively, but human engineers design the system contracts, decouple dependencies, and anticipate downstream failures.

• Code Review & Security: Verifying that auto-generated implementations don’t introduce subtle memory leaks, insecure API endpoints, or hallucinated third-party dependencies.

• Rigorous Verification: Automated tests, edge-case evaluations, and integration benchmarks are more critical now than ever before to validate AI outputs against business logic.

• Continuous Evolution: Embracing autonomous coding assistants and IDE workflows not as shortcuts, but as high-leverage multipliers that allow engineers to solve higher-order human problems faster.

The engineers who thrive in this new era won't be those who resist AI or blindly accept its suggestions, but those who wield it with deep domain mastery.`,
        color: 'from-violet-500 to-indigo-600',
        images: [aiSoftwareEngineeringImg, photo2, photo1]
    },
    {
        id: 'kranti-real-world-impact',
        number: '05',
        title: 'Technology Creates Impact When It Solves Real Problems',
        category: 'KRANTI APP × MOBILE DEVELOPMENT × REAL-WORLD IMPACT',
        date: '2025',
        image: photo1,
        imageFocus: 'object-center',
        preview: "Building Kranti App taught me that software development is not just about writing code; it is about understanding real-world challenges and creating practical solutions. By connecting farmers, contractors, and business managers through a mobile application, I explored how technology can simplify workforce coordination, production tracking, and ROI management. This project strengthened my belief that the best applications are built around real user needs, with simplicity, accessibility, and usefulness at their core.",
        content: `Building Kranti App taught me that software development is not just about writing code; it is about understanding real-world challenges and creating practical solutions. By connecting farmers, contractors, and business managers through a mobile application, I explored how technology can simplify workforce coordination, production tracking, and ROI management. This project strengthened my belief that the best applications are built around real user needs, with simplicity, accessibility, and usefulness at their core.

My takeaway: Build technology that makes a meaningful difference in people's everyday lives.

Developing for users in real-world agricultural and contractor ecosystems demands designing with deep operational empathy:

• Extreme Usability: Interfaces must be clear on diverse device screen sizes under direct sunlight, requiring clean contrast, intuitive navigation, and zero visual clutter.

• Offline Resilience: Spotty rural network coverage necessitated designing robust local SQLite/Room caching and background synchronization so daily logs and production reports never get lost.

• Real-World Outcomes: Success in software isn't measured by lines of code or complex abstractions, but by the tangible time saved, financial clarity gained, and friction removed for everyday users.`,
        color: 'from-emerald-500 via-teal-500 to-green-600',
        images: [photo1, photo2, photo3]
    }
]

import Header from './Header'
import ScrollDownIndicator from './ScrollDownIndicator'

const Overlay = ({ setPhoneModel, currentModel, setActiveAppId }) => {
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [bookmarkedIds, setBookmarkedIds] = useState([])

    const toggleBookmark = (id, e) => {
        if (e) e.stopPropagation()
        setBookmarkedIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const isAndroid = currentModel === 'android' || currentModel === 'pixel'
    const isIos = currentModel === 'iphone' || currentModel === 'ios' || currentModel === 'default'

    return (
        <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
            <Header />
            <ScrollDownIndicator />

            {/* Hero Section */}
            <Section className="min-h-screen justify-start md:justify-center items-start pt-16 sm:pt-20 md:pt-0 pb-2 md:pb-32 px-5 sm:px-8 relative" id="hero">
                <div className="max-w-xl w-full text-left">
                    <motion.div
                        className="pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 md:mb-4 leading-[1.08] text-left">
                            MOBILE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                DEVELOPER
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 md:mb-8 max-w-sm sm:max-w-md md:max-w-lg leading-relaxed text-left">
                            Building scalable, high-performance native Android & hybrid mobile applications that solve real-world problems.
                        </p>
                        <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4">
                            <button
                                onClick={() => setActiveAppId('projects')}
                                className="px-5 py-2.5 md:px-8 md:py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-xs md:text-base shadow-lg cursor-pointer"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => setActiveAppId('contact')}
                                className="px-5 py-2.5 md:px-8 md:py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-xs md:text-base cursor-pointer"
                            >
                                Contact Me
                            </button>
                        </div>

                        {/* On mobile: Left-aligned clean inline device switcher with 3D rotate hint */}
                        <div className="flex md:hidden items-center justify-start gap-2 mt-3.5 pt-2.5 border-t border-white/10 w-fit">
                            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Device:</span>
                            <button
                                onClick={() => setPhoneModel('iphone')}
                                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${isIos ? 'bg-white text-black shadow-md' : 'text-gray-400 bg-white/5 border border-white/10'}`}
                            >
                                iPhone
                            </button>
                            <button
                                onClick={() => setPhoneModel('android')}
                                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${isAndroid ? 'bg-white text-black shadow-md' : 'text-gray-400 bg-white/5 border border-white/10'}`}
                            >
                                Pixel
                            </button>
                            <span className="text-[11px] text-gray-400 ml-1">⟳ Drag 3D</span>
                        </div>
                    </motion.div>
                </div>

                {/* Phone Switcher - Desktop only floating on right side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-end gap-4 pointer-events-auto"
                >
                    <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider text-right">Select<br />Device</span>
                    <div className="flex flex-col bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10 gap-2">
                        {/* Android / Pixel Device */}
                        <button
                            onClick={() => setPhoneModel('android')}
                            className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all ${isAndroid ? 'bg-white text-black shadow-lg scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="Google Pixel"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1581-.2737.0645-.6234-.2092-.7815-.2737-.1582-.6235-.0645-.7816.2091l-2.0238 3.5054C15.2285 8.163 13.666 7.8 12 7.8s-3.2285.363-4.8629.9972L5.1133 5.2918c-.1581-.2736-.5079-.3673-.7816-.2091-.2737.1581-.3673.5078-.2092.7815l1.996 3.4572C2.6883 11.2335.3435 14.8872.0625 19.2h23.875c-.281-4.3128-2.6258-7.9665-6.055-9.8786" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-tight leading-none">Pixel</span>
                        </button>

                        {/* iOS / iPhone Device */}
                        <button
                            onClick={() => setPhoneModel('iphone')}
                            className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all ${isIos ? 'bg-white text-black shadow-lg scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="iPhone Pro"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.04-.49 2.66-1.24z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-tight leading-none">iPhone</span>
                        </button>
                    </div>
                </motion.div>
            </Section>

            {/* Tech Stack / About Section */}
            <Section className="pt-6 md:pt-32" id="about">
                <div className="max-w-6xl w-full mx-auto pointer-events-auto space-y-10 md:space-y-14">
                    {/* Top Row: About Me Text + Terminal Profile Image */}
                    <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                        {/* Bio Column */}
                        <div className="md:col-span-7">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                                About Me
                            </h2>
                            <p className="text-gray-300 mb-5 text-base md:text-lg leading-relaxed">
                                I'm an Android & Hybrid Mobile Application Developer with hands-on experience in Java, Android SDK, React Native, and RESTful API integration. I've built and published mobile applications on the Google Play Store, with deep expertise in Activities, Fragments, RecyclerView, Room Database, and backend integration.
                            </p>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Experienced in integrating Google Gemini API to build AI-powered application features. Strong foundation in Object-Oriented Programming, Data Structures, DBMS, and mobile application architecture through C-DAC PGCP-MC training.
                            </p>
                        </div>

                        {/* Profile Image (In front of About text) */}
                        <div className="md:col-span-5 flex justify-center md:justify-end">
                            <div className="relative group max-w-[340px] md:max-w-[380px] w-full">
                                {/* Subtle ambient backdrop glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-primary/20 to-teal-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500 pointer-events-none" />

                                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-gray-950 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.01]">
                                    <img
                                        src={profile2Img}
                                        alt="Rahul Singh - Terminal Profile"
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Engineering Stack Aligned Below */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Engineering Stack.</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-5 bg-slate-900/60 border border-white/10 rounded-2xl hover:border-white/25 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-md">
                                <Smartphone className="mb-3 text-primary w-6 h-6" />
                                <h4 className="font-bold text-white text-base mb-1">Mobile Engineering</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                    Android SDK, Java, React Native <br />
                                    Room DB, SQLite, Retrofit, Gradle
                                </p>
                            </div>

                            <div className="p-5 bg-slate-900/60 border border-white/10 rounded-2xl hover:border-white/25 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-md">
                                <Code className="mb-3 text-secondary w-6 h-6" />
                                <h4 className="font-bold text-white text-base mb-1">Frontend & Hybrid</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                    React.js, Context API, React Navigation, FlatList, UI Optimization
                                </p>
                            </div>

                            <div className="p-5 bg-slate-900/60 border border-white/10 rounded-2xl hover:border-white/25 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-md">
                                <Globe className="mb-3 text-emerald-400 w-6 h-6" />
                                <h4 className="font-bold text-white text-base mb-1">Backend & Cloud</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                    Node.js, Express.js, REST APIs, JWT Auth, Firebase, Cloudinary
                                </p>
                            </div>

                            <div className="p-5 bg-slate-900/60 border border-white/10 rounded-2xl hover:border-white/25 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-md">
                                <Cpu className="mb-3 text-purple-400 w-6 h-6" />
                                <h4 className="font-bold text-white text-base mb-1">AI, DB & Tools</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                    Google Gemini API, MySQL, MongoDB, Postman, Git & GitHub
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Experience / The Road I Traveled Section */}
            <Section className="items-start" id="work">
                <div className="max-w-6xl w-full mx-auto pointer-events-auto">
                    {/* Minimal Section Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                            The Road I Traveled
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-xl">
                            From core computer science foundations to live production applications and advanced mobile systems.
                        </p>
                    </div>

                    {/* The Road Track */}
                    <div className="relative bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
                        {/* Highway center dashed line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-8 right-8 border-t-2 border-dashed border-amber-400/25 pointer-events-none z-0" />

                        {/* 4 Clean Stations - Title Only */}
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                            {journeyMilestones.map((milestone) => {
                                const IconComponent = milestone.icon
                                return (
                                    <div
                                        key={milestone.id}
                                        onClick={() => setSelectedExperience(milestone)}
                                        className="group relative flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border bg-slate-900/70 border-white/10 hover:border-white/30 hover:bg-slate-800/80 hover:-translate-y-1.5 shadow-xl backdrop-blur-md"
                                    >
                                        {/* Top accent line on hover */}
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        />

                                        {/* Milestone Icon */}
                                        <div className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center mb-3.5 transition-all duration-300 bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:scale-105 border border-white/5 group-hover:border-white/20">
                                            <IconComponent className="w-6 h-6" />
                                        </div>

                                        {/* Step label */}
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400/90 mb-1.5">
                                            Station {milestone.step}
                                        </span>

                                        {/* ONLY THE TITLE */}
                                        <h3 className="font-bold text-white text-base md:text-lg group-hover:text-primary transition-colors leading-snug mb-1">
                                            {milestone.title}
                                        </h3>

                                        {/* Timeline */}
                                        <span className="text-xs text-gray-400 font-mono">
                                            {milestone.periodShort}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Experience Detail Modal */}
            <AnimatePresence>
                {selectedExperience && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedExperience(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 pointer-events-auto"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                            <motion.div
                                layoutId={`card-${selectedExperience.id}`}
                                className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${selectedExperience.color}`} />
                                <div className="p-8 max-h-[80vh] overflow-y-auto">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-3xl font-bold mb-1">{selectedExperience.company}</h3>
                                                {selectedExperience.website && (
                                                    <a
                                                        href={selectedExperience.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                                        title="Visit Website"
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-gray-400 font-mono">{selectedExperience.period}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedExperience(null)}
                                            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold text-primary mb-2">{selectedExperience.role}</h4>
                                        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-4">
                                            <span>{selectedExperience.category}</span>
                                            <span>•</span>
                                            <span>{selectedExperience.grade}</span>
                                            <span>•</span>
                                            <span>{selectedExperience.location}</span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-6">
                                            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Overview</h5>
                                            <p className="text-sm text-gray-300 leading-relaxed italic">
                                                {selectedExperience.shortDescription || selectedExperience.aboutCompany}
                                            </p>
                                        </div>
                                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Contributions & Highlights</h5>
                                        <p className="text-gray-300 leading-relaxed text-base mb-6">
                                            {selectedExperience.fullDescription}
                                        </p>
                                        {selectedExperience.highlights && (
                                            <div className="space-y-2 mb-6">
                                                {selectedExperience.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                        <span>{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {selectedExperience.tech && (
                                            <div>
                                                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedExperience.tech.map((t) => (
                                                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-lg">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setSelectedExperience(null)}
                                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Blog Section */}
            <Section className="items-start" id="blog">
                <div className="max-w-5xl w-full mx-auto pointer-events-auto">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight">Latest Thoughts</h2>
                            <p className="text-gray-400 text-sm mt-1">Insights on mobile engineering, AI interfaces, and system architecture.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {blogs.map((blog) => {
                            const isBookmarked = bookmarkedIds.includes(blog.id)
                            return (
                                <motion.div
                                    key={blog.id}
                                    layoutId={`blog-${blog.id}`}
                                    onClick={() => setSelectedBlog(blog)}
                                    className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 p-4 sm:p-5 md:p-6 bg-zinc-950/70 hover:bg-zinc-900/80 border border-white/10 hover:border-white/20 rounded-3xl transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md overflow-hidden"
                                >
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${blog.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    {/* Left: Thumbnail with Bookmark */}
                                    <div className="relative w-full md:w-56 lg:w-64 shrink-0 aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-black border border-white/10 group-hover:border-white/25 transition-colors shadow-inner">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className={`w-full h-full object-cover ${blog.imageFocus || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                                        />
                                        {/* Floating Bookmark Button */}
                                        <button
                                            type="button"
                                            onClick={(e) => toggleBookmark(blog.id, e)}
                                            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark thought"}
                                            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all transform active:scale-95 shadow-lg z-10"
                                        >
                                            <Bookmark
                                                size={18}
                                                className={isBookmarked ? "fill-white text-white" : "text-white/90"}
                                            />
                                        </button>
                                    </div>

                                    {/* Right: Text content */}
                                    <div className="flex-1 flex flex-col justify-center min-w-0 pr-2">
                                        <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-bold text-white tracking-tight group-hover:text-primary transition-colors leading-snug mb-1.5">
                                            {blog.number ? `${blog.number}. ` : ''}{blog.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-3">
                                            {blog.category}
                                        </p>
                                        <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                                            {blog.preview}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </Section>

            {/* Blog Detail Modal */}
            <AnimatePresence>
                {selectedBlog && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBlog(null)}
                            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 pointer-events-auto"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                            <motion.div
                                layoutId={`blog-${selectedBlog.id}`}
                                className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[88vh]"
                            >
                                <div className={`h-1.5 w-full bg-gradient-to-r ${selectedBlog.color} shrink-0`} />

                                {selectedBlog.image && (
                                    <div className="relative w-full h-56 md:h-64 overflow-hidden bg-black shrink-0">
                                        <img
                                            src={selectedBlog.image}
                                            alt={selectedBlog.title}
                                            className={`w-full h-full object-cover ${selectedBlog.imageFocus || 'object-center'}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                        <button
                                            onClick={() => setSelectedBlog(null)}
                                            className="absolute top-4 right-4 p-2.5 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full text-white border border-white/20 transition-all shadow-lg"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}

                                <div className="p-6 md:p-8 overflow-y-auto">
                                    {!selectedBlog.image && (
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                                                {selectedBlog.category}
                                            </span>
                                            <button
                                                onClick={() => setSelectedBlog(null)}
                                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}

                                    {selectedBlog.image && (
                                        <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase block mb-2">
                                            {selectedBlog.category}
                                        </span>
                                    )}

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                        {selectedBlog.number ? `${selectedBlog.number}. ` : ''}{selectedBlog.title}
                                    </h3>
                                    <p className="text-xs text-zinc-500 font-mono mb-6">{selectedBlog.date}</p>

                                    <div className="prose prose-invert prose-sm max-w-none mb-8">
                                        {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-zinc-300 leading-relaxed text-base md:text-lg mb-5">
                                                {paragraph}
                                            </p>
                                        ))}

                                        {selectedBlog.images && selectedBlog.images.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                                {selectedBlog.images.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 border border-white/10 cursor-zoom-in"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setSelectedImage(image)
                                                        }}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`${selectedBlog.title} - Image ${index + 1}`}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setSelectedBlog(null)}
                                        className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg"
                                    >
                                        Close Article
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto cursor-zoom-out"
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            layoutId={`image-${selectedImage}`}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Resume / Contact Section */}
            <Section className="items-center text-center" id="resume">
                <div className="pointer-events-auto max-w-2xl">
                    <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        I'm currently available for full-time opportunities and impactful mobile engineering roles.
                        <br />
                        <span className="text-white font-bold mt-4 block">rahul.cs6765@gmail.com • +91 7880526006</span>
                        <span className="text-gray-400 text-sm mt-1 block">Pune, Maharashtra, India</span>
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            type="button"
                            style={{ pointerEvents: 'auto', zIndex: 9999, position: 'relative' }}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const resumeUrl = 'documents/Rahul_Singh_Mobiledev.pdf';
                                console.log(`Attempting to download resume from: ${resumeUrl}`);

                                fetch(resumeUrl)
                                    .then(response => {
                                        if (!response.ok) {
                                            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                                        }
                                        return response.blob();
                                    })
                                    .then(blob => {
                                        const url = window.URL.createObjectURL(blob);
                                        const a = document.createElement('a');
                                        a.style.display = 'none';
                                        a.href = url;
                                        a.download = 'Rahul_Singh_Mobiledev.pdf';
                                        document.body.appendChild(a);
                                        a.click();
                                        window.URL.revokeObjectURL(url);
                                        document.body.removeChild(a);
                                    })
                                    .catch(error => {
                                        console.error('Download failed:', error);
                                    });
                            }}
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors cursor-pointer inline-flex items-center gap-2"
                        >
                            Download Resume
                        </button>
                    </div>
                    <p className="mt-16 text-gray-600 text-sm">© 2026 Rahul Singh. All rights reserved.</p>
                </div>
            </Section>



        </div>
    )
}

export default Overlay
