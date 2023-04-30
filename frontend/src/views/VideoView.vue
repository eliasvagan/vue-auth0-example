<template>
  <div>
    <input v-if="videoState === 'no-file'" 
      type="file" 
      accept="video/*" 
      @change="handleFileInput"
    />
    
    <div v-if="videoState == 'loading'">
      <p>Loading video ...</p>
    </div>

    <div v-if="videoState === 'ready'">
      <video :src="videoUrl" controls autoplay></video>
      <button v-on:click="newFile()">Choose new file</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useVideoStore } from '../stores/video';

export default {
  name: 'VideoView',
  setup() {
    const videoStore = useVideoStore();

    const handleFileInput = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      if (!files || files.length === 0) return;

      const file = files[0];
      videoStore.loadFile(file);
    };

    return {
      handleFileInput,
      videoUrl: computed(() => videoStore.videoUrl),
      newFile: () => videoStore.unload(),
      videoState: computed(() => videoStore.videoState), 
    };
  },
  // Forget video on unrender
  beforeUnmount() {
    this.newFile();
  },
};

</script>

  <style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    input[type='file'] {
      margin-bottom: 1rem;
    }

    video {
      max-width: 100%;
      max-height: 90vh;
    }
  }
</style>
