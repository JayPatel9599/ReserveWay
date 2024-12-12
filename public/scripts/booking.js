document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.booking-cell:not(.booked)');
  const modal = document.getElementById('bookingModal');
  const closeModalButton = document.getElementById('closeModal');
  const courtInput = document.getElementById('court');
  const timeInput = document.getElementById('time');

  // Event listener for available cells
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const court = cell.dataset.court;
      const time = cell.dataset.time;

      // Set modal inputs
      courtInput.value = court;
      timeInput.value = time;

      // Show modal
      modal.classList.add('active');
    });
  });

  // Event listener to close the modal
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});
