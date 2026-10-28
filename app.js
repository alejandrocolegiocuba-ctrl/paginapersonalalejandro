const talks = [
  {date:'NOV 2026',title:'Congreso Nacional de Digitalización Educativa',place:'Albacete',category:'congresos',upcoming:true},
  {date:'MAY 2026',title:'Metodologías activas con IA',place:'CEFIRE',category:'metodologias'},
  {date:'MAY 2026',title:'Tècniques bàsiques de la IA i les seues aplicacions',place:'CEE Raquel Payà · Dénia',category:'ia'},
  {date:'ABR 2026',title:'Ensenyament de l’ús d’eines d’intel·ligència artificial',place:'IES Les Alfàbegues · Bétera',category:'ia'},
  {date:'FEB 2026',title:'IA para el cambio',place:'Colegio Escoles Noves · Crevillent',category:'ia'},
  {date:'FEB 2026',title:'IA y educación',place:'Grupo Editorial Santillana · Alicante',category:'ia'},
  {date:'ENE 2026',title:'Metodologías activas e inclusión',place:'Colegio Andrés Manjón · Orihuela',category:'metodologias'},
  {date:'DESDE SEP 2025',title:'Inteligencia artificial, TIC y metodologías activas',place:'Grupo San Valero · Zaragoza',category:'ia'},
  {date:'JUN 2025',title:'Congreso EduInnova',place:'Universidad de Alicante',category:'congresos'},
  {date:'ENE — ABR 2025',title:'Recursos TIC en el proceso de enseñanza-aprendizaje',place:'Dirección de seminario · CRA La Ribera Alta, Valencia',category:'metodologias'},
  {date:'2024 Y 2025',title:'Congresos de la Red DIM-EDU',place:'Universidad de Alicante',category:'congresos'}
];
const labels={ia:'Inteligencia artificial',metodologias:'Metodologías e inclusión',congresos:'Congresos'};
const list=document.querySelector('#talks');
for(const talk of talks){const article=document.createElement('article');article.className='talk';article.dataset.category=talk.category;article.innerHTML=`<div class="talk-date">${talk.upcoming?'<span class="upcoming">PRÓXIMAMENTE</span>':''}${talk.date}</div><div><h3>${talk.title}</h3><p>${talk.place}</p></div><span class="talk-tag">${labels[talk.category]}</span><span class="talk-arrow" aria-hidden="true">✧</span>`;list.append(article);}
for(const button of document.querySelectorAll('[data-filter]')){button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));let count=0;document.querySelectorAll('.talk').forEach(item=>{item.hidden=button.dataset.filter!=='all'&&item.dataset.category!==button.dataset.filter;if(!item.hidden)count++;});document.querySelector('#filter-status').textContent=`${count} formaciones mostradas`;});}
const menu=document.querySelector('.menu');const navigation=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('open',!open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
