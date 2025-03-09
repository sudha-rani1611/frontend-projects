let b1 = document.getElementById('om');
let c = document.getElementById('close');

b1.addEventListener('click',openModal);
c.addEventListener('click',closeModal);

function openModal()
{
  let d=document.getElementById('d2');
  d.classList.remove('hidden')[0];
}

function closeModal()
{
  let d=document.getElementById('d2');
  d.classList.add('hidden')[0];
}