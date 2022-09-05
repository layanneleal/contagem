function contar() {

  let inicio = document.querySelector('input#ini')
  let fim = document.querySelector('input#ifim')
  let passo = document.querySelector('input#ipasso')
  let res = document.querySelector('div#res')
  

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO] faltam dados!')
  }else {

    res.innerHTML = 'Contando: '

    let ini = Number(inicio.value)
    let ifim = Number(fim.value)
    let ipasso = Number(passo.value)
    
    if (ini < ifim) {
      for(let c = ini; c <= ifim; c += ipasso ){
        res.innerHTML += `${c}\u{1F449}`
      }

    }else {
      for(let c = ini; c >= ifim; c -= ipasso ){
        res.innerHTML += ` ${c} \u{1F449}`
      }

    }
   res.innerHTML += `\u{1F3C1}`
  }

}
