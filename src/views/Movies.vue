<script setup>
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';

const movieList = ref([]);

onMounted(() => {
    fetch('http://localhost:8000/movies')
    .then((response) => response.json())
    .then(apiMovies => {
        movieList.value = apiMovies
    })
});
</script>

<template>
    <h1>
        Movies
    </h1>
    <div class="grid grid-cols-3 gap-4">
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
</template>