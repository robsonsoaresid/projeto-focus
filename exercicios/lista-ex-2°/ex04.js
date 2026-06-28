// 1) Alternando entre tarefas ativas

// Desenvolva um recurso para um aplicativo de gerenciamento de projetos chamado "ProjetoFoco" com as seguintes regras:

//Desenvolva um recurso para um aplicativo de gerenciamento de projetos chamado "ProjetoFoco" com as seguintes regras:

// Ao clicar em uma tarefa, ela é destacada como ativa e sua descrição é mostrada em um local específico da interface;
// Se a mesma tarefa for clicada novamente, a seleção deve ser removida;
// Apenas uma tarefa pode ser destacada como ativa por vez.

let tarefaSelecionada = null;

document.querySelectorAll('.listaAtiva__tarefa').forEach(tarefa => {
    tarefa.addEventListener('click', function() {
        const descricaoAtiva = document.querySelector('.listaAtiva__descricao-ativa');
        document.querySelectorAll('.listaAtiva__tarefa').forEach(t => t.classList.remove('listaAtiva__tarefa-ativa'));
        if (tarefaSelecionada !== tarefa) {
            tarefa.classList.add('listaAtiva__tarefa-ativa');
            descricaoAtiva.textContent = tarefa.textContent;
            tarefaSelecionada = tarefa;
        } else {
            descricaoAtiva.textContent = '';
            tarefaSelecionada = null;
        }
    });
});

// 2) Escutando e reagindo ao evento de foco finalizado

// No seu projeto "GerenciadorFoco", que possui um sistema de cronômetro para gerenciamento de tarefas, adicione a lógica para escutar o evento customizado FocoFinalizado, disparado quando o tempo de foco em uma tarefa chega ao fim. Utilize esse evento para atualizar a interface do usuário ou realizar outras ações que indiquem a conclusão da tarefa de foco.

document.addEventListener('FocoFinalizado', function() {
    // Lógica para tratar a finalização do foco
    // Por exemplo, atualizar a interface do usuário para indicar que a tarefa foi concluída
    console.log('Tarefa de foco finalizada!');
    // Adicione aqui o código para atualizar a UI ou outras ações necessárias
});

//3) Marcação automática de tarefa concluída

// Suponha que você tenha um sistema de gestão de tarefas e deseja automatizar o processo de marcação de tarefas como concluídas quando um evento específico ocorre. Nesse cenário, implemente a lógica para identificar quando o evento FocoFinalizado é disparado e, em seguida, marcar a tarefa selecionada como concluída. Siga os passos abaixo para realizar essa implementação:

document.addEventListener('FocoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active')
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete')
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled')
    }
})