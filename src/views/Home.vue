<template>
    <!-- hero section -->
<section class="relative py-32 lg:py-36 bg-white">
    <div
        class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span
                class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span
            class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900">
                Lorem ipsum 
            </h1>
            <p class="mt-8 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
                quis voluptatum porro incidunt,
                libero sequi quos eos velit
            </p>
            <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div class="flex sm:flex-row flex-col gap-5 w-full">
                    
                </div>
            </div>
        </div>
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img src="../assets/1154.jpg" alt="Hero image"
                class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none">
        </div>
    </div>
    <div class="flex flex-col items-center mt-10">
        <button
        @click="cadastrar()"
        class=" w-28 middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
        >
        Cadastrar um filme
        </button>
    </div>
</section>
</template>

<script setup>

function cadastrar(){
    return window.location.href = '/cadastro';
}
</script>