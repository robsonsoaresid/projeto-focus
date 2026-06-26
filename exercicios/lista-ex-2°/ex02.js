// 1) Estilizando elementos dinâmicos

// Você está trabalhando em um projeto web e percebe que os novos elementos adicionados à lista de tarefas — especificamente os parágrafos e botões — não estão recebendo os estilos definidos, pois as classes CSS correspondentes não estão sendo aplicadas a eles. Seu desafio é: modifique o script JavaScript para adicionar as classes app__section-task-list-item-description aos parágrafos e app_button-edit aos botões quando novos itens da lista de tarefas são criados. Essas classes devem ser aplicadas de forma que os elementos recém-criados tenham a aparência conforme o design no Figma.

// Após criar o parágrafo
const paragrafo = document.createElement('p');
paragrafo.textContent = 'Descrição da tarefa'; // Substitua pela descrição real da tarefa
paragrafo.classList.add('app__section-task-list-item-description');

// Após criar o botão
const botao = document.createElement('button');
botao.textContent = 'Editar'; // Ou outro texto conforme o design
botao.classList.add('app_button-edit');

// 2) Ajustando a visualização de tarefas

// Você percebeu que, embora a funcionalidade de adicionar tarefas esteja funcionando perfeitamente, a visualização das tarefas salvas ao recarregar a página não está como deveria. As tarefas salvas no localStorage precisam ser exibidas na lista de tarefas assim que a página é carregada. Implemente o código necessário para ler as tarefas do localStorage, criar os elementos de tarefa correspondentes e adicioná-los à lista de tarefas na inicialização da página.

// Carregando e exibindo tarefas do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasSalvas.forEach(tarefa => {
        const elementoTarefa = criarElementoTarefa(tarefa);
        ulTarefas.append(elementoTarefa);
    });
});