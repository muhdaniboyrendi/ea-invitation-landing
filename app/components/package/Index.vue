<template>
  <section class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-purple-950/30 dark:to-gray-900">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Background Orbs -->
      <div class="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div class="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-r from-pink-400/25 to-indigo-400/25 rounded-full blur-3xl animate-float"></div>
      
      <!-- Premium Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-24">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-sm font-medium text-purple-600 dark:text-purple-400 shadow-lg mb-6">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
          </svg>
          <span>Pricing Plans</span>
        </div>
        
        <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
          <span class="block bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
            Choose Your
          </span>
          <span class="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Luxury Experience
          </span>
        </h2>
        
        <p class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Select the perfect package that matches your needs. All plans include our premium features with varying levels of access and support.
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center space-x-4 mt-8">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly</span>
          <button
            @click="toggleBilling"
            class="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transition-transform"
              :class="isYearly ? 'translate-x-6' : 'translate-x-1'"
            ></span>
          </button>
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
            Yearly 
            <span class="text-xs text-purple-600 dark:text-purple-400 font-semibold">(Save 20%)</span>
          </span>
        </div>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div 
          v-for="(pkg, index) in packages" 
          :key="index"
          class="relative group"
        >
          
          <!-- Best Seller Badge -->
          <div 
            v-if="pkg.bestSeller"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div class="px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
              ⭐ BEST SELLER
            </div>
          </div>

          <!-- Package Card -->
          <div 
            class="relative h-full rounded-3xl transition-all duration-500 hover:scale-105"
            :class="[
              pkg.featured 
                ? 'p-1 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-indigo-500/20 shadow-2xl shadow-purple-500/20' 
                : ''
            ]"
          >
            <div 
              class="h-full p-8 lg:p-10 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-500"
              :class="[
                pkg.featured
                  ? 'bg-white/30 dark:bg-white/10 border-white/40 dark:border-white/20 hover:bg-white/40 dark:hover:bg-white/15'
                  : 'bg-white/20 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10'
              ]"
            >
              
              <!-- Package Header -->
              <div class="text-center mb-8">
                <div 
                  class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                  :class="pkg.iconBg"
                >
                  <component :is="pkg.icon" class="w-8 h-8 text-white" />
                </div>
                
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ pkg.name }}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                  {{ pkg.description }}
                </p>
              </div>

              <!-- Pricing -->
              <div class="text-center mb-8">
                <div class="flex items-baseline justify-center space-x-1">
                  <span class="text-lg text-gray-500 dark:text-gray-400">$</span>
                  <span class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {{ isYearly ? pkg.yearlyPrice : pkg.monthlyPrice }}
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    /{{ isYearly ? 'year' : 'month' }}
                  </span>
                </div>
                
                <div v-if="isYearly && pkg.savings" class="mt-2">
                  <span class="text-sm text-green-600 dark:text-green-400 font-medium">
                    Save ${{ pkg.savings }} annually
                  </span>
                </div>
              </div>

              <!-- Features List -->
              <div class="space-y-4 mb-8">
                <div 
                  v-for="feature in pkg.features" 
                  :key="feature"
                  class="flex items-start space-x-3"
                >
                  <div class="flex-shrink-0 w-5 h-5 mt-0.5">
                    <svg class="w-full h-full text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {{ feature }}
                  </span>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="mt-auto">
                <button 
                  class="w-full py-4 rounded-2xl font-semibold text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  :class="[
                    pkg.featured
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-purple-500/25 hover:shadow-purple-500/40'
                      : 'bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-gray-900 dark:text-white border border-white/30 dark:border-white/20'
                  ]"
                >
                  {{ pkg.ctaText }}
                </button>
              </div>

              <!-- Additional Benefits -->
              <div v-if="pkg.additionalBenefits" class="mt-6 pt-6 border-t border-white/20 dark:border-white/10">
                <div class="text-center">
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Additional Benefits:</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <span 
                      v-for="benefit in pkg.additionalBenefits" 
                      :key="benefit"
                      class="px-2 py-1 bg-white/20 dark:bg-white/10 rounded-full text-xs text-gray-600 dark:text-gray-300"
                    >
                      {{ benefit }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="text-center mt-16 lg:mt-24">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-8">
            Contact our team for enterprise solutions tailored to your specific requirements.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105">
              Contact Sales
            </button>
            <button class="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View Comparison
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

// Reactive state
const isYearly = ref(false)

// Methods
const toggleBilling = () => {
  isYearly.value = !isYearly.value
}

// Package data
const packages = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started",
    monthlyPrice: 29,
    yearlyPrice: 290,
    savings: 58,
    icon: '',
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    featured: false,
    bestSeller: false,
    ctaText: "Start Free Trial",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Mobile app access",
      "Standard templates"
    ],
    additionalBenefits: ["7-day trial", "Basic tutorials"]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 79,
    yearlyPrice: 790,
    savings: 158,
    icon: '',
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    featured: true,
    bestSeller: true,
    ctaText: "Choose Professional",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Mobile app access",
      "Premium templates",
      "Team collaboration",
      "API access",
      "Custom integrations"
    ],
    additionalBenefits: ["14-day trial", "Onboarding session", "Advanced tutorials"]
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    savings: 298,
    icon: '',
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    featured: false,
    bestSeller: false,
    ctaText: "Contact Sales",
    features: [
      "Unlimited everything",
      "1TB storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Mobile app access",
      "Custom templates",
      "Advanced team features",
      "Full API access",
      "Custom integrations",
      "SSO & security features",
      "Dedicated account manager"
    ],
    additionalBenefits: ["30-day trial", "White-glove onboarding", "Training sessions"]
  }
]
</script>

<style scoped>
/* Custom Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) translateX(10px) rotate(1deg);
  }
  66% {
    transform: translateY(10px) translateX(-8px) rotate(-1deg);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateY(18px) translateX(-15px) rotate(-2deg);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 7s ease-in-out infinite reverse;
}

/* Enhanced Glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Custom Gradient Animations */
.bg-gradient-to-r,
.bg-gradient-to-b,
.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Card Hover Effects */
.group:hover .w-16 {
  transform: scale(1.1) rotate(5deg);
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Toggle Switch Styling */
button:focus-visible {
  outline: 2px solid #9333ea;
  outline-offset: 2px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #9333ea, #ec4899);
  border-radius: 3px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .grid-cols-1 {
    gap: 2rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-float-slow,
  .animate-float-reverse,
  .animate-pulse,
  .transition-all {
    animation: none;
    transition: none;
  }
}

/* Featured card glow effect */
.group:hover .shadow-2xl {
  filter: drop-shadow(0 25px 50px rgba(139, 92, 246, 0.15));
}

/* Best seller badge animation */
@keyframes badge-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
  }
}

.animate-pulse {
  animation: badge-glow 2s ease-in-out infinite;
}
</style>