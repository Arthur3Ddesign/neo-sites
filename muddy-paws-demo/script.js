document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('enquiryForm');
  
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const breed = document.getElementById('breed').value;
      
      alert(`Thank you, ${name}. Your enquiry for your ${breed} has been submitted. (Demonstration site - no actual booking was sent).`);
      
      enquiryForm.reset();
    });
  }
});
