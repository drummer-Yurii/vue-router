import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({ 
        movies: [],
        isLoading: false
     }),
    getters: {
        
    },
    actions: {
        async getMovies() {
            const result = await fetch('http://localhost:8000/movies')
            const response = await result.json();
            this.movies = response;
        },
    },
})