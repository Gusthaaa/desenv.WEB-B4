export function adicionarFilme(novoFilme) {
    localStorage.setItem(`movies${novoFilme.nome}`, JSON.stringify(novoFilme)); 
    alert('Filme cadastrado com sucesso.');
}


export function deletarFilme(filme) {
   localStorage.removeItem(`movies${filme.nome}`);
   alert('Filme deletado com sucesso');
   const keys = Object.keys(localStorage).filter(key => key.startsWith('movies'));
   const todos = keys.map(key => JSON.parse(localStorage.getItem(key)));
}

export function mostrarFilmes() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('movies'));
    const todos = keys.map(key => JSON.parse(localStorage.getItem(key)));
    return todos;
}
