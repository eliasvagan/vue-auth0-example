import { defineStore } from 'pinia';

export type VideoState = 'no-file' | 'loading' | 'ready';

export type VideoStoreState = {
  videoUrl?: string;
  loading: boolean;
  errorMsg?: string;
};

export const useVideoStore = defineStore('video', {
  state: (): VideoStoreState => ({
    videoUrl: '',
    errorMsg: '',
    loading: false,
  }),
  getters: {
    videoState: (state): VideoState => {
      if (state.loading) return 'loading';
      return state.videoUrl 
        ? 'ready' 
        : 'no-file';
    },
  },
  actions: {
    loadFile(file: File) {
      // Prevent abuse
      if (this.loading) return;

      // Prevent bad file types
      if (!file.type.includes('video/')) {
        this.errorMsg = 'Bad video filetype selected.';
        return;
      }

      // Load file to readable URl
      this.loading = true;
      const reader = new FileReader();
      reader.onload = () => {
        this.videoUrl = reader.result as string;
        this.errorMsg = undefined;
        this.loading = false;
      };
      reader.readAsDataURL(file);
    },
    unload() {
      this.videoUrl = '';
      this.loading = false;
    },
  },
});