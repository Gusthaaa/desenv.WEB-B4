<template>
    <div class="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-28">
        <h2 class="text-2xl font-semibold mb-6">Filmes Registrados</h2>
        <ul>
            <li v-for="(filme, index) in filmes" :key="index" class="mb-4 p-4 border rounded-md">
                <p><strong>Nome:</strong> {{ filme.nome }}</p>
                <p><strong>Diretor:</strong> {{ filme.diretor }}</p>
                <p><strong>Gênero:</strong> {{ filme.genero }}</p>
                <button class="ml-32" @click="excluirFilme(index)">Deletar Filme</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { filmes } from '../js/movies.js';
import { deletarFilme } from '../js/movies.js';

function excluirFilme(index){
    deletarFilme(index);
}
</script>