<template>
  <footer
    class="relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950/50 to-gray-900 dark:from-black dark:via-purple-950/30 dark:to-black"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Background Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-float-reverse"
      ></div>

      <!-- Subtle Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_100%)]"
      ></div>
    </div>

    <div class="relative z-10">
      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <!-- Top Section -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <!-- Brand Section -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">LuxuryBrand</h3>
                <p class="text-sm text-gray-400">Premium Experience</p>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-300 leading-relaxed">
              Crafting exceptional digital experiences with luxury design and
              cutting-edge technology. Your journey to excellence starts here.
            </p>

            <!-- Newsletter Signup -->
            <div class="space-y-3">
              <h4 class="text-white font-semibold">Stay Updated</h4>
              <div class="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  class="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-r-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-6">
            <h4 class="text-lg font-semibold text-white">Quick Links</h4>
            <nav class="space-y-3">
              <a
                v-for="link in quickLinks"
                :key="link.name"
                :href="link.href"
                class="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform"
              >
                {{ link.name }}
              </a>
            </nav>
          </div>

          <!-- Services -->
          <div class="space-y-6">
            <h4 class="text-lg font-semibold text-white">Services</h4>
            <nav class="space-y-3">
              <a
                v-for="service in services"
                :key="service.name"
                :href="service.href"
                class="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform"
              >
                {{ service.name }}
              </a>
            </nav>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <h4 class="text-lg font-semibold text-white">Contact</h4>
            <div class="space-y-4">
              <div
                v-for="contact in contactInfo"
                :key="contact.type"
                class="flex items-start space-x-3"
              >
                <div
                  class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <component
                    :is="contact.icon"
                    class="w-5 h-5 text-purple-400"
                  />
                </div>
                <div>
                  <p class="text-sm text-gray-400">{{ contact.type }}</p>
                  <p class="text-gray-200">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Methods Section -->
        <div class="py-8 border-t border-white/10">
          <div class="text-center mb-8">
            <h4 class="text-lg font-semibold text-white mb-2">
              Secure Payment Methods
            </h4>
            <p class="text-gray-400 text-sm">
              Your transactions are protected with enterprise-grade security
            </p>
          </div>

          <div class="flex flex-wrap justify-center items-center gap-6">
            <div
              v-for="payment in paymentMethods"
              :key="payment.name"
              class="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div class="flex items-center justify-center">
                <component
                  :is="payment.icon"
                  class="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div
                class="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
              ></div>
            </div>
          </div>

          <!-- Payment Security Note -->
          <div class="text-center mt-6">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>SSL Encrypted • 100% Secure</span>
            </div>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="py-8 border-t border-white/10">
          <div class="text-center mb-8">
            <h4 class="text-lg font-semibold text-white mb-2">
              Connect With Us
            </h4>
            <p class="text-gray-400 text-sm">
              Follow us for updates and exclusive content
            </p>
          </div>

          <div class="flex justify-center space-x-6">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.href"
              class="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              :class="social.hoverClass"
            >
              <component
                :is="social.icon"
                class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
              />

              <!-- Social Media Specific Hover Effects -->
              <div
                class="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                :class="social.glowClass"
              ></div>

              <!-- Tooltip -->
              <div
                class="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
              >
                {{ social.name }}
                <div
                  class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div
            class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
          >
            <!-- Copyright -->
            <div class="text-center lg:text-left">
              <p class="text-gray-400 text-sm">
                © 2025 LuxuryBrand. All rights reserved. Made with
                <span class="text-red-400 mx-1">♥</span>
                for exceptional experiences.
              </p>
            </div>

            <!-- Footer Links -->
            <div
              class="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm"
            >
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >Privacy Policy</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >Terms of Service</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >Cookie Policy</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >Sitemap</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

// Quick Links
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Services
const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Brand Identity", href: "/services/branding" },
  { name: "Digital Marketing", href: "/services/marketing" },
  { name: "Consulting", href: "/services/consulting" },
  { name: "Support", href: "/support" },
];

// Contact Information
const contactInfo = [
  {
    type: "Address",
    value: "Karanganyar, Central Java, Indonesia",
    icon: '',
  },
  {
    type: "Phone",
    value: "+62 812-3456-7890",
    icon: '',
  },
  {
    type: "Email",
    value: "hello@luxurybrand.com",
    icon: '',
  },
  {
    type: "Hours",
    value: "Mon - Fri: 9AM - 6PM",
    icon: '',
  },
];

// Payment Methods (Using custom SVG icons for better compatibility)
const paymentMethods = [
  {
    name: "Visa",
    icon: {
      template: `
        <svg viewBox="0 0 48 48" class="w-full h-full">
          <rect width="48" height="48" rx="6" fill="#1A1F71"/>
          <path d="M18.5 12h3.2l-2 24h-3.2L18.5 12zm11.3 0c-1.1 0-2 .6-2.4 1.5L22 36h3.3l.6-1.7h4.1l.4 1.7H34l-3.2-24h-1zm-5.8 8.5L21.7 30h2.4l2.3-9.5h-2.4zm7.5 0c-.8 2.2-1.5 4.4-2.2 6.7h2.4c.7-2.2 1.4-4.5 2.2-6.7h-2.4z" fill="white"/>
        </svg>
      `,
    },
  },
  {
    name: "Mastercard",
    icon: {
      template: `
        <svg viewBox="0 0 48 48" class="w-full h-full">
          <rect width="48" height="48" rx="6" fill="#EB001B"/>
          <circle cx="18" cy="24" r="10" fill="#FF5F00"/>
          <circle cx="30" cy="24" r="10" fill="#F79E1B"/>
        </svg>
      `,
    },
  },
  {
    name: "PayPal",
    icon: {
      template: `
        <svg viewBox="0 0 48 48" class="w-full h-full">
          <rect width="48" height="48" rx="6" fill="#003087"/>
          <path d="M20 12c3.3 0 6 2.7 6 6s-2.7 6-6 6h-4l-2 8h-3l4-20h5zm8 0c3.3 0 6 2.7 6 6s-2.7 6-6 6h-4l-2 8h-3l4-20h5z" fill="#009CDE"/>
        </svg>
      `,
    },
  },
  {
    name: "Stripe",
    icon: {
      template: `
        <svg viewBox="0 0 48 48" class="w-full h-full">
          <rect width="48" height="48" rx="6" fill="#635BFF"/>
          <path d="M24 16c-2 0-3.5.8-4.5 2.2l2.5 1.3c.5-.8 1.2-1.2 2-1.2 1.2 0 2 .8 2 2v.5c-3.5.2-6 1.5-6 4.2 0 2.5 2 4 4.5 4 1.8 0 3.2-.8 4-2v1.5h3V20c0-2.8-2.2-4-4.5-4z" fill="white"/>
        </svg>
      `,
    },
  },
  {
    name: "Apple Pay",
    icon: {
      template: `
        <svg viewBox="0 0 48 48" class="w-full h-full">
          <rect width="48" height="48" rx="6" fill="#000"/>
          <path d="M24 12c3.5 0 6.5 2.8 6.5 6.2 0 4.2-3 6.8-6.5 6.8s-6.5-2.6-6.5-6.8C17.5 14.8 20.5 12 24 12zm0 16c2.5 0 4.5 1.8 4.5 4s-2 4-4.5 4-4.5-1.8-4.5-4 2-4 4.5-4z" fill="white"/>
        </svg>
      `,
    },
  },
  {
    name: "Google Pay",
    icon: {
      template: `
        <svg viewBox="0 0 48 48" class="w-full h-full">
          <rect width="48" height="48" rx="6" fill="#4285F4"/>
          <path d="M24 16l8 8-8 8-8-8 8-8z" fill="white"/>
          <path d="M16 20h16v8H16z" fill="#34A853" opacity="0.8"/>
        </svg>
      `,
    },
  },
];

// Social Media
const socialMedia = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: {
      template: `
        <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.871.013 6.644.066 5.42.119 4.576.24 3.823.445c-.775.226-1.472.593-2.13 1.251C1.033 2.354.666 3.051.44 3.826.235 4.579.114 5.423.061 6.647.008 7.874 0 8.4 0 12.017c0 3.616.013 4.142.066 5.368.053 1.224.174 2.068.379 2.821.226.775.593 1.472 1.251 2.13.658.658 1.355 1.025 2.13 1.251.753.205 1.597.326 2.821.379 1.227.053 1.752.066 5.368.066 3.617 0 4.142-.013 5.368-.066 1.224-.053 2.068-.174 2.821-.379.775-.226 1.472-.593 2.13-1.251.658-.658 1.025-1.355 1.251-2.13.205-.753.326-1.597.379-2.821.053-1.226.066-1.751.066-5.368 0-3.616-.013-4.142-.066-5.368-.053-1.224-.174-2.068-.379-2.821-.226-.775-.593-1.472-1.251-2.13C19.513.666 18.816.299 18.041.073 17.288-.132 16.444-.253 15.22-.306 13.993-.359 13.468-.372 9.851-.372h2.166zm-.056 5.424c3.383 0 6.017 2.634 6.017 6.017s-2.634 6.017-6.017 6.017-6.017-2.634-6.017-6.017 2.634-6.017 6.017-6.017zm0 1.441c-2.524 0-4.576 2.052-4.576 4.576s2.052 4.576 4.576 4.576 4.576-2.052 4.576-4.576-2.052-4.576-4.576-4.576zM18.307 4.034c.791 0 1.433.642 1.433 1.433s-.642 1.433-1.433 1.433-1.433-.642-1.433-1.433.642-1.433 1.433-1.433z"/>
        </svg>
      `,
    },
    hoverClass: "hover:bg-pink-500/20",
    glowClass: "bg-gradient-to-r from-purple-600/20 to-pink-600/20",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: {
      template: `
        <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      `,
    },
    hoverClass: "hover:bg-black/20",
    glowClass: "bg-gradient-to-r from-black/20 to-gray-800/20",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281234567890",
    icon: {
      template: `
        <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      `,
    },
    hoverClass: "hover:bg-green-500/20",
    glowClass: "bg-gradient-to-r from-green-600/20 to-green-400/20",
  },
  {
    name: "Email",
    href: "mailto:hello@luxurybrand.com",
    icon: {
      template: `
        <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      `,
    },
    hoverClass: "hover:bg-blue-500/20",
    glowClass: "bg-gradient-to-r from-blue-600/20 to-blue-400/20",
  },
];
</script>

<style scoped>
/* Custom Animations */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) translateX(10px) rotate(1deg);
  }
  66% {
    transform: translateY(8px) translateX(-8px) rotate(-0.5deg);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateY(12px) translateX(-10px) rotate(-1deg);
  }
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(139, 92, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 7s ease-in-out infinite reverse;
}

/* Enhanced Glassmorphism */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Custom Gradient Animations */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Hover Effects */
.group:hover {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Link Hover Animations */
a:hover {
  transform: translateX(4px);
  transition: all 0.3s ease;
}

/* Input Focus States */
input:focus {
  transform: scale(1.02);
}

/* Social Media Specific Hover Colors */
.hover\:bg-pink-500\/20:hover {
  background-color: rgba(236, 72, 153, 0.2);
}

.hover\:bg-black\/20:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.hover\:bg-green-500\/20:hover {
  background-color: rgba(34, 197, 94, 0.2);
}

.hover\:bg-blue-500\/20:hover {
  background-color: rgba(59, 130, 246, 0.2);
}

/* Payment Method Cards */
.group:hover .w-12 {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
