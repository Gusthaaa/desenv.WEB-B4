<template>
    <!-- component -->
    <div class="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-28">
        <h2 class="text-2xl font-semibold mb-6">Registre um filme</h2>
        <form @submit.prevent="registrarFilme"> <!-- Adicione o @submit.prevent aqui -->
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nome do filme:</label>
                <input type="text" id="name" name="name" placeholder="Nome do Filme" required
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    v-model="novoFilme.nome"> <!-- Vinculação bidirecional -->
            </div>
            <div class="mb-4">
                <label for="diretor" class="block text-gray-700 text-sm font-bold mb-2">Diretor:</label>
                <input type="text" id="diretor" name="diretor" placeholder="Nome do Diretor" required
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    v-model="novoFilme.diretor"> <!-- Vinculação bidirecional -->
            </div>
            <div class="mb-6">
                <label for="genero" class="block text-gray-700 text-sm font-bold mb-2">Gênero:</label>
                <textarea id="genero" name="genero" rows="4" placeholder="Digite o gênero do filme"
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    v-model="novoFilme.genero"></textarea> <!-- Vinculação bidirecional -->
            </div>
            <button type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                Enviar
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { adicionarFilme } from '../js/movies';

const novoFilme = reactive({
    nome: "",
    diretor: "",
    genero: "",
});

function registrarFilme() {
    adicionarFilme({ ...novoFilme });
    novoFilme.nome = "";
    novoFilme.diretor = "";
    novoFilme.genero = "";
}
</script>
