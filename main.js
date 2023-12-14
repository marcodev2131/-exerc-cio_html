$(document).ready(function () {
    $('button#adicionar-tarefa').click(function () {
      $('form#form-tarefa').slideDown();
    });
  
    $('button#cancelar').click(function () {
      $('form#form-tarefa').slideUp();
    });
  
    $('form#form-tarefa').on('submit', function (e) {
      e.preventDefault();
  
      const nomeDaTarefa = $('#nome-tarefa').val();
      const novaTarefa = $(`<li>${nomeDaTarefa}</li>`);
  
      $(novaTarefa).appendTo('ul#lista-tarefas').hide().fadeIn(1000);
      
      // Adiciona o evento de clique para riscar a tarefa
      $(novaTarefa).click(function () {
        $(this).toggleClass("tarefa-completa");
      });
  
      $('#nome-tarefa').val('');
    });
  });