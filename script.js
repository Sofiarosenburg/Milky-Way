const planetas = document.querySelectorAll('.planeta');
const modoZoom  = document.getElementById('modoZoom');
const imagemDoPlaneta = document.getElementById('imagemDoPlaneta');
const nomePlaneta = document.getElementById ('nomePlaneta') ;
const  textoCuriosidade = document.getElementById('textoCuriosidade');
const botaoVoltar  = document.getElementById('botaoVoltar') ;

// quando clica ta meio estranhoo
planetas.forEach(planeta => {
  planeta.addEventListener('click', () => {
    const img = planeta.querySelector('img')
    const nome = planeta.dataset.nome;
  const fato = planeta.dataset.fato ;

  imagemDoPlaneta.src = img.src;

  imagemDoPlaneta.alt = nome;

    nomePlaneta.textContent = nome;
    textoCuriosidade.textContent = fato;

    modoZoom.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

//aq arruma botao

botaoVoltar.addEventListener('click', () => {

  modoZoom.classList.remove('active');
  document.body.style.overflow = '';
});

