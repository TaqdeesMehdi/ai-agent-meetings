"use client";

import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  return (
    <div className="relative min-h-[calc(100vh-50px)] bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-y-hidden">
      {/* Robot Image Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <img
          src="/ai.png"
          alt="AI Robot"
          className="w-full h-full max-w-sm max-h-96 md:max-w-full md:max-h-full object-contain opacity-80 md:scale-75 lg:scale-90 xl:scale-100"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content container - positioned on the left side */}
      <div className="relative z-10 flex min-h-screen items-center px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Main heading - Hidden on mobile */}
          <h1 className="hidden md:block text-4xl md:text-6xl lg:text-7xl font-bold text-purple-400 mb-6 leading-tight">
            Are you ready to meet
            <span className="block text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text mt-2">
              your AI agents?
            </span>
          </h1>

          {/* Subtitle - Hidden on mobile */}
          <p className="hidden md:block text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-xl">
            Experience the future of intelligent automation with cutting-edge AI
            technology
          </p>

          {/* Action buttons - Hidden on mobile */}
          <div className="hidden md:flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/agents")}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-specific layout adjustment */}
      <div className="md:hidden absolute inset-0 flex flex-col justify-between py-8 px-6 z-20">
        {/* Top section with heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-400 mb-4 leading-tight">
            Are you ready to meet
            <span className="block text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text mt-1">
              your AI agents?
            </span>
          </h1>
          <p className="text-base text-gray-200 mb-6 font-light">
            Experience the future of intelligent automation
          </p>
        </div>

        {/* Bottom section with buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/agents")}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
          >
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Hide desktop content on mobile */}
      <div className="hidden md:block">
        {/* Floating elements for extra visual appeal */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
