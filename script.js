// Função para rolar até o formulário de contato
function scrollToForm() {
    const formSection = document.getElementById('contact');
    window.scrollTo({
      top: formSection.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Validação e envio do formulário de e-mail
  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    if (email) {
      alert('Obrigado por se inscrever! Entraremos em contato em breve.');
      document.getElementById('email').value = ''; // Limpar o campo
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  });

  // Animação de Fade-in ao rolar a página
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
  
      if (elementTop <= windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  
  // Inicialização para adicionar a classe fade-in aos elementos desejados
  window.addEventListener('load', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
      element.classList.add('fade-in');
    });
  });

  // Função para iniciar a contagem regressiva
function startCountdown() {
    const endTime = new Date().getTime() + 3600 * 1000; // Contagem de 1 hora
    const countdownElement = document.getElementById('countdown');
  
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = endTime - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "A promoção acabou!";
      } else {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
  
  // Iniciar a contagem regressiva quando a página carregar
  window.addEventListener('load', startCountdown);

  let currentTestimonial = 0;

function showTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = (index === currentTestimonial) ? 'block' : 'none';
  });

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

window.addEventListener('load', function() {
  showTestimonials();
  setInterval(showTestimonials, 3000); // Troca a cada 3 segundos
});

// Mostrar o botão de rolar para o topo quando o usuário rolar a página
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
    // Verifica a posição de rolagem
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block"; // Exibe o botão
    } else {
      scrollToTopBtn.style.display = "none"; // Esconde o botão
    }
  };
  
  // Função para rolar suavemente até o topo
  document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  