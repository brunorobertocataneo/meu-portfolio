//typing efect


const subtitle = document.querySelector('p') // Cria uma variavel 

function typeWrite(element) { // criando a funcao typewhrite piuchando a variavel
	const textArray = element.innerHTML.split(''); // mudara o que esta escrito na variavel, o splits faz separacao de textos, Bruno.split separa as letras
	element.innerHTML = ''; //comeco da frase, pega o elemento html, fazendo fucar vazio no comeco
	textArray.forEach((letter, i) => { //chamando a variavel e dando atributo a ela um valor infinito, o parenteses com a flecha vira uma funcao
		setTimeout (() => element.innerHTML += letter, i * 300); // settimeout da um tempo para o atributo ser executavel, o element tem a escrita mudada com um tempo, o += faz com que acresente as letras com o decorrer da frase, mantendo a letra anterior, o espacamento vazio tem um tempo de 300 milisegundos
	});

}

typeWrite(subtitle) // chamar a funcao 

// Carrossel
    document.addEventListener('DOMContentLoaded', () => {
      const galleryContainer = document.querySelector('.gallery-container');
      const galleryControlsContainer = document.querySelector('.gallery-controls');
      const galleryControls = ['Anterior', 'Próximo'];
      const galleryItems = document.querySelectorAll('.gallery-item');

      const galleryLinks = {
        1: 'https://brunorobertocataneo.github.io/olhar_cultural/',
        2: 'https://brunorobertocataneo.github.io/Calculadora/',
        3: 'https://brunorobertocataneo.github.io/programming_memory_game/',
        4: 'https://brunorobertocataneo.github.io/I.A-NA-EDUCACAO/'
      };

      class Carousel {
        constructor(container, items, controls) {
          this.carouselContainer = container;
          this.carouselControls = controls;
          this.carouselArray = [...items];
          this.updateGallery();
          this.setClickEvents();
        }

        updateGallery() {
          this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
          });

          this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
          });
        }

        setCurrentState(control) {
          if (control.className.includes('Anterior')) {
            this.carouselArray.unshift(this.carouselArray.pop());
          } else {
            this.carouselArray.push(this.carouselArray.shift());
          }
          this.updateGallery();
        }

        setControls() {
          this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            galleryControlsContainer.appendChild(button);
          });
        }

        useControls() {
          const triggers = [...galleryControlsContainer.children];
          triggers.forEach(control => {
            control.addEventListener('click', e => {
              e.preventDefault();
              this.setCurrentState(control);
            });
          });
        }

        setClickEvents() {
          this.carouselArray.forEach((item, index) => {
            item.replaceWith(item.cloneNode(true));
          });
          this.carouselArray = [...document.querySelectorAll('.gallery-item')];
          this.carouselArray.forEach((item, index) => {
            item.addEventListener('click', () => {
              const link = galleryLinks[index + 1];
              if (link) {
                window.open(link, '_blank');
              }
            });
          });
        }
      }

      const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
      exampleCarousel.setControls();
      exampleCarousel.useControls();
    });

	
// navbar

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
