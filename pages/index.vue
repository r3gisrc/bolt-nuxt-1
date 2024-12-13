<template>
  <main>
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-800">
              {{ $t('nav.logo') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            {{ $t('hero.title') }}
          </h1>
          <p class="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
            {{ $t('hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>