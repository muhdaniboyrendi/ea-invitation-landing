<script setup>
// Features data
const features = [
  {
    title: "Premium Design System",
    description:
      "Experience unmatched aesthetic appeal with our meticulously crafted design language that sets new standards in luxury.",
    icon: "",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    benefits: [
      "Hand-crafted visual elements",
      "Consistent design language",
      "Responsive across all devices",
      "Accessibility-first approach",
    ],
  },
  {
    title: "Advanced Security",
    description:
      "Your data and privacy are protected with enterprise-grade security measures and end-to-end encryption.",
    icon: "",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    benefits: [
      "End-to-end encryption",
      "Multi-factor authentication",
      "Regular security audits",
      "GDPR compliant",
    ],
  },
  {
    title: "Smart Automation",
    description:
      "Leverage intelligent automation to streamline workflows and enhance productivity with minimal effort.",
    icon: "",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    benefits: [
      "AI-powered workflows",
      "Custom automation rules",
      "Real-time processing",
      "Integration capabilities",
    ],
  },
  {
    title: "Analytics & Insights",
    description:
      "Gain deep insights into your data with comprehensive analytics and real-time reporting capabilities.",
    icon: "",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    benefits: [
      "Real-time dashboards",
      "Custom report generation",
      "Predictive analytics",
      "Data visualization tools",
    ],
  },
  {
    title: "Global Scalability",
    description:
      "Built to scale globally with robust infrastructure that grows with your business needs seamlessly.",
    icon: "",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    benefits: [
      "Global CDN network",
      "Auto-scaling infrastructure",
      "99.9% uptime guarantee",
      "Multi-region deployment",
    ],
  },
  {
    title: "Customer Success",
    description:
      "Dedicated support and success management to ensure you achieve maximum value from our platform.",
    icon: "",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    benefits: [
      "24/7 premium support",
      "Dedicated success manager",
      "Comprehensive onboarding",
      "Regular check-ins",
    ],
  },
];
</script>

<template>
  <section
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Background Orbs -->
      <div
        class="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/6 w-80 h-80 bg-gradient-to-r from-indigo-300/15 to-purple-300/15 rounded-full blur-3xl animate-float-reverse"
      ></div>

      <!-- Subtle Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_20%,transparent_100%)]"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-24">
        <div
          class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-sm font-medium text-purple-600 dark:text-purple-400 shadow-lg mb-6"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Premium Features</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
          <span
            class="block bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent"
          >
            Crafted for
          </span>
          <span
            class="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Excellence
          </span>
        </h2>

        <p
          class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Berbagai macam fitur lengkap dan modern yang akan membuat undangan
          pernikahan digital Anda tampil memukau dan berkesan
        </p>
      </div>

      <!-- Features Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        <FeaturesCard
          v-for="(feature, index) in features"
          :key="index"
          :feature="feature"
        />
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 lg:mt-24">
        <div class="inline-flex flex-col sm:flex-row gap-4 lg:gap-6">
          <button
            class="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <span class="flex items-center justify-center space-x-2">
              <span>Explore All Features</span>
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>

          <button
            class="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Enhanced Glassmorphism Effects */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Card Hover Effects */
.group:hover {
  animation: card-hover 0.5s ease-out forwards;
}

/* Custom Gradient Animations */
.bg-gradient-to-r {
  background-size: 200% 200%;
}

.bg-gradient-to-br {
  background-size: 200% 200%;
}

/* Smooth transitions for all interactive elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

/* Responsive Design Enhancements */
@media (max-width: 768px) {
  .grid-cols-1 {
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .hover\:scale-105:hover {
    transform: scale(1.05) translateY(-5px);
  }
}

/* Focus states for accessibility */
button:focus-visible,
.group:focus-visible {
  outline: 2px solid #9333ea;
  outline-offset: 2px;
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-reverse,
  .transition-all,
  .transition-colors,
  .transition-transform,
  .transition-opacity {
    animation: none;
    transition: none;
  }
}
</style>
