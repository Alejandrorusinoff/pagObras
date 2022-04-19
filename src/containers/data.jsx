let a = "Creando un lugar mejor"

for (let i = 0; i < a.length; i++) {
    console.log(a[i]) 
}



let resultado = setTimeout(() => {
    let contador = 0
    contador = contador + 2
    console.log(contador)

}, 2000);