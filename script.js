
document.addEventListener("DOMContentLoaded", function() {
  // Disable right-click on the entire document
  document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
  });

  // Alternatively, disable right-click on a specific element with an ID
  // var specificElement = document.getElementById("elementId");
  // specificElement.addEventListener("contextmenu", function(event) {
  //     event.preventDefault();
  // });
});  


  /*const btn1 = document.querySelector('.btn');
  btn1.addEventListener('click', () => {
      alert('Under construction');
    });*/

    /*const btn4 = document.querySelector('.btn3');
  btn4.addEventListener('click', () => {
      alert('Under construction');
    });*/


    const skillSection = document.getElementById('skill');
const skills = document.querySelectorAll('.bar');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Percentage of section visibility required to trigger the animation
};

var getStartedBtn = document.getElementById('getStartedBtn');

        // Add a click event listener to the button
        getStartedBtn.addEventListener('click', function() {
          // Redirect to the login page
          window.open('login.html', '_blank');
        });


        var getHire = document.getElementById('getHire');

        // Add a click event listener to the button
        getHire.addEventListener('click', function() {
          // Redirect to the login page
          window.open('hireme.html', '_blank');
        });


       
        function downloadCV() {
          // Replace the URL below with the actual path to your PDF file
         /* window.location.href = 'x.pdf';  open in same browser as*/
         window.open('RESUME pdf.pdf', '_blank');
        }
      

          function scrollToTop() {
          // Scroll to the top of the page
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }


      document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
      
        // Set the success message in local storage
        localStorage.setItem("successMessage", "Message sent successfully!");
        
        // Display success message on the page
        document.getElementById("successMessage").innerText = localStorage.getItem("successMessage");
        document.getElementById("successMessage").style.display = "block";
        
        // Reset the form after a delay
        setTimeout(function() {
          document.getElementById("myForm").reset();
          document.getElementById("successMessage").style.display = "none";
        }, 3000); // Set the delay in milliseconds (e.g., 3000 = 3 seconds)
      });

    
  


    window.addEventListener('load', function() {
           window.scrollTo(0, 0);
    });