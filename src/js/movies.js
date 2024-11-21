export const filmes = [];

export function adicionarFilme(novoFilme){
    filmes.push(novoFilme);
    alert('Filme cadastrado com sucesso!');
}

export function deletarFilme(index){
    filmes.splice(index, 1);
    alert('Filme deletado', filmes[index]);
    return filmes;
}
    