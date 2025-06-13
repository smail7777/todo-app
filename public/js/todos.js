document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les boutons de bascule d'état
  const toggleButtons = document.querySelectorAll('.toggle-status');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const todoId = this.dataset.id;
      
      // Appeler l'API pour basculer l'état
      fetch(`/todos/api/${todoId}/toggle`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Mettre à jour l'interface utilisateur
            const todoItem = document.querySelector(`.todo-item[data-id="${todoId}"]`);
            
            if (data.todo.completed) {
              todoItem.classList.add('completed');
              this.textContent = 'Marquer comme non terminé';
            } else {
              todoItem.classList.remove('completed');
              this.textContent = 'Marquer comme terminé';
            }
            
            // Mettre à jour le statut affiché si on est sur la page de détail
            const statusElement = document.querySelector('.todo-status');
            if (statusElement) {
              statusElement.textContent = data.todo.completed ? 'Terminé' : 'En cours';
            }
          } else {
            alert('Erreur: ' + data.message);
          }
        })
        .catch(error => {
          console.error('Erreur:', error);
          alert('Une erreur est survenue lors de la mise à jour du todo');
        });
    });
  });
});