<script setup>
const form = reactive({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const isLoading = ref(false);

const handleRegister = async () => {
  // Validation
  if (form.password !== form.confirmPassword) {
    alert("Password dan konfirmasi password tidak cocok!");
    return;
  }

  if (!form.agreeToTerms) {
    alert("Anda harus menyetujui syarat dan ketentuan!");
    return;
  }

  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Register attempt:", form);

    // Redirect to login after successful registration
    await navigateTo("/login");
  } catch (error) {
    console.error("Registration error:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div
    id="register"
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark"
  >
    <!-- Background Grid Pattern -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Main Register Section -->
    <section
      class="relative w-full max-w-7xl mx-auto z-10 flex items-center justify-center min-h-screen px-6 md:px-10 py-20"
    >
      <div class="w-full max-w-md">
        <!-- Beta Badge -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center px-4 py-2 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg"
          >
            <span
              class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"
            ></span>
            <span class="text-sm font-medium text-white/90"
              >Secure Registration</span
            >
          </div>
        </div>

        <!-- Register Card -->
        <div class="group relative">
          <!-- Glow Effect -->
          <div
            class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl group-hover:blur-3xl transition-all duration-500"
          ></div>

          <!-- Main Register Form -->
          <div
            class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden"
          >
            <!-- Header -->
            <div class="text-center mb-8">
              <div
                class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl mb-6 flex items-center justify-center shadow-lg mx-auto"
              >
                <i class="bi bi-person-plus text-white text-3xl"></i>
              </div>

              <h1
                class="text-3xl lg:text-4xl font-bold mb-3 text-off-white dark:text-off-white/90"
              >
                Bergabung dengan
                <br />
                <span
                  class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
                  >EA Invitation</span
                >
              </h1>

              <p class="text-white/70">
                Buat akun baru dan mulai kelola undangan digital
              </p>
            </div>

            <!-- Register Form -->
            <form @submit.prevent="handleRegister" class="space-y-6">
              <!-- Full Name Input -->
              <div class="space-y-2">
                <label for="fullName" class="text-white/90 font-medium block">
                  Nama Lengkap
                </label>
                <div class="relative">
                  <input
                    id="fullName"
                    v-model="form.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                    placeholder="Masukkan nama lengkap"
                  />
                  <div
                    class="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <i class="bi bi-person text-white/40"></i>
                  </div>
                </div>
              </div>

              <!-- Email Input -->
              <div class="space-y-2">
                <label for="email" class="text-white/90 font-medium block">
                  Email
                </label>
                <div class="relative">
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                    placeholder="nama@email.com"
                  />
                  <div
                    class="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <i class="bi bi-envelope text-white/40"></i>
                  </div>
                </div>
              </div>

              <!-- Password Input -->
              <div class="space-y-2">
                <label for="password" class="text-white/90 font-medium block">
                  Password
                </label>
                <div class="relative">
                  <input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    minlength="8"
                    class="w-full px-4 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                    placeholder="Minimal 8 karakter"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    <i
                      :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                    ></i>
                  </button>
                </div>
              </div>

              <!-- Confirm Password Input -->
              <div class="space-y-2">
                <label
                  for="confirmPassword"
                  class="text-white/90 font-medium block"
                >
                  Konfirmasi Password
                </label>
                <div class="relative">
                  <input
                    id="confirmPassword"
                    v-model="form.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    required
                    class="w-full px-4 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                    placeholder="Ulangi password"
                  />
                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    <i
                      :class="
                        showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'
                      "
                    ></i>
                  </button>
                </div>
              </div>

              <!-- Terms & Conditions -->
              <div class="flex items-start space-x-3">
                <input
                  v-model="form.agreeToTerms"
                  type="checkbox"
                  required
                  class="w-4 h-4 mt-1 rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400/50 focus:ring-2"
                />
                <label class="text-white/70 text-sm leading-relaxed">
                  Saya menyetujui
                  <NuxtLink
                    to="/terms"
                    class="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Syarat & Ketentuan
                  </NuxtLink>
                  dan
                  <NuxtLink
                    to="/privacy"
                    class="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Kebijakan Privasi
                  </NuxtLink>
                </label>
              </div>

              <!-- Register Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 disabled:hover:scale-100 transition-all duration-300"
              >
                <span
                  v-if="!isLoading"
                  class="relative z-10 flex items-center justify-center"
                >
                  Daftar Sekarang
                  <i class="bi bi-arrow-right ml-2"></i>
                </span>
                <span
                  v-else
                  class="relative z-10 flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"
                  ></div>
                  Memproses...
                </span>
              </button>
            </form>

            <!-- Divider -->
            <div class="relative my-8">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-white/20"></div>
              </div>
              <div class="relative flex justify-center text-xs">
                <span
                  class="text-white bg-linear-to-r from-cyan-400 to-purple-400 rounded-full px-2 py-0.5 uppercase"
                  >or</span
                >
              </div>
            </div>

            <!-- Social Register -->
            <div class="space-y-3">
              <button
                type="button"
                class="w-full px-4 py-3 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white font-medium rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Daftar dengan Google</span>
              </button>
            </div>

            <!-- Login Link -->
            <div class="text-center mt-8">
              <p class="text-white/70">
                Sudah punya akun?
                <NuxtLink
                  to="/login"
                  class="text-cyan-400 hover:text-cyan-300 font-medium transition-colors ml-1"
                >
                  Masuk sekarang
                </NuxtLink>
              </p>
            </div>

            <!-- Animated Bottom Line -->
            <div
              class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-b-3xl"
            ></div>
          </div>
        </div>

        <!-- Additional Features -->
        <div class="mt-8 grid grid-cols-3 gap-4 text-center">
          <div class="group">
            <div class="flex items-center justify-center mb-2">
              <div class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
              <span class="text-white/60 text-sm">Secure</span>
            </div>
          </div>
          <div class="group">
            <div class="flex items-center justify-center mb-2">
              <div class="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              <span class="text-white/60 text-sm">Fast</span>
            </div>
          </div>
          <div class="group">
            <div class="flex items-center justify-center mb-2">
              <div class="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
              <span class="text-white/60 text-sm">Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
