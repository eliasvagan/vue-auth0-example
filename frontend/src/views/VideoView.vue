<template>
  <div>
    <div class="file-input" v-if="videoState === 'no-file'">
      <label for="inp-video">Choose a video file</label>
      <input 
        id="inp-video"
        type="file" 
        accept="video/*" 
        @change="handleFileInput"
      />
    </div>
    
    <div v-if="videoState == 'loading'">
      <p>Loading video ...</p>
    </div>

    <div v-if="videoState === 'ready'">
      <div class="video-wrapper">
        <video :src="videoUrl" controls autoplay></video>
        <button v-on:click="newFile()">Choose new file</button>
      </div>
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
  @import '../assets/base.scss';
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

  div.video-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    row-gap: 1rem;
  }

  .file-input {
    position: relative;
    width: 14rem;
    height: 4rem;
    border: 1px solid $color-border;
    background-color: $color-backgroud-btn;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    label {
      font-size: 1rem;
      color: $color-text-btn;
    }
    
    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
</style>
