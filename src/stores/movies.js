import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({ 
        movies: [],
        isLoading: false,
        query: '',
        singleMovie: {}
     }),
    getters: {
        
    },
    actions: {
        async getMovies() {
            this.isLoading = true;
            const result = await fetch('http://localhost:8000/movies?q=' + this.query)
            const response = await result.json();
            this.movies = response;
            this.isLoading = false;
        },
        async getSingleMovie(id) {
            this.isLoading = true;
            const result = await fetch(`http://localhost:8000/movies/${parseInt(id)}`);
            if (result.status === 404) {
                this.router.push({ name: 'NotFound' })
            }
            const response = await result.json();
            this.singleMovie = response;
            this.isLoading = false;
        }
    },
})