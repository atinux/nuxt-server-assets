<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Server Assets',
  description:
    'A demo on how to use Nuxt Server Assets to generate dynamic PDF or images.'
})
const colorMode = useColorMode()
function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UContainer class="min-h-screen flex flex-col justify-center max-w-xs">
    <UCard>
      <h2>Generate a PDF</h2>
      <form method="GET" action="/pdf" class="mt-4">
        <UInput
          type="text"
          name="text"
          placeholder="Enter the text"
          class="mb-4"
        />
        <UButton type="submit" color="black" icon="i-ph-file-pdf" block>
          Generate PDF
        </UButton>
      </form>
    </UCard>
    <UCard class="mt-6">
      <h2>Random Server Image</h2>
      <UButton to="/random.jpg" color="black" icon="i-ph-image" class="mt-4" block>
        Open random.jpg
      </UButton>
    </UCard>
    <div class="mt-2 text-center">
      <UButton to="https://github.com/atinux/nuxt-server-assets" icon="i-simple-icons-github" color="gray" variant="ghost" />
      <UButton
        square
        variant="ghost"
        color="black"
        :icon="$colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
        @click="toggleColorMode"
      />
    </div>
  </UContainer>
</template>
