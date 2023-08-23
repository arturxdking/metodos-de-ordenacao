// Função gerador de vetores

function gerar_vetores(vetor100_C, vetor1000_C, vetor10000_C, vetor100000_C, vetor100_D, vetor1000_D, vetor10000_D, vetor100000_D,
    vetor100_A, vetor1000_A, vetor10000_A, vetor100000_A){

// Gerar vetores Crescentes e Aleatórios

    while(i<100){
        vetor100_C[i]=i
        vetor100_A[i]=parseInt(Math.random() * i)
        i++                   
    }
    while(j<1000){
        vetor1000_C[j]=j
        vetor1000_A[j]=parseInt(Math.random() * j)
        j++                   
    }
    while(k<10000){
        vetor10000_C[k]=k
        vetor10000_A[k]=parseInt(Math.random() * k)
        k++                   
    }
    while(l<100000){
        vetor100000_C[l]=l
        vetor100000_A[l]=parseInt(Math.random() * l)
        l++                   
    }

// Gerar vetores Decrescente

    while(i>0){
        vetor100_D[i_dec]=i
        i--
        i_dec++
    }
    while(j>0){
        vetor1000_D[j_dec]=j
        j--
        j_dec++
    }
    while(k>0){
        vetor10000_D[k_dec]=k
        k--
        k_dec++
    }
    while(l>0){
        vetor100000_D[l_dec]=l
        l--
        l_dec++
    }
}

// Métodos de ordenação

function bubbleSort(vetor){
    
    for(i = 0; i < vetor.length-1; i++){
        var aux

        for(j = 0; j < vetor.length-i-1; j++){
            if(vetor[j] > vetor[j + 1]){
                aux = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = aux
            }
        }
    }

}

function selecaoDireta(vetor){
    for(var i = 0; i < vetor.length; i++){
        var menor = vetor[i]
        var pos = i
        for(var j = i+1; j < vetor.length; j++){
            if(vetor[j] < menor){
                menor = vetor [j]
                pos = j
            }
        }
        var aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
}

function insercaoDireta(vetor){ 
    for(var i = 1; i < vetor.length; i++){
        for(var j = 0; j < i; j++){
            if(vetor[i] < vetor[j]){
                var aux = vetor[i]
                for(var k = i; k > j; k--){
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = aux                   
            }
        }
    }
}

function quicksort(array, left, right){
    var i = left
    var j = right
    var aux
    var pivotidx = (left + right) / 2
    var pivot = parseInt(array[pivotidx.toFixed()])
    //Partição
    while(i <= j){
        while(parseInt(array[i]) < pivot)
            i ++
        while(parseInt(array[j]) > pivot)
            j -- 
        if(i <= j){
            aux = array[i]
            array[i] = array[j]
            array[j] = aux
            i ++
            j --
        }
    }
    // Recursão
    if(left < j)
        quicksort(array, left, j)
    if(i < right)
        quicksort(array, i, right)
    return array
}

// Declaração de variaveis de controle e vetores

let i=0, i_dec=0, j=0, j_dec=0, k=0, k_dec=0, l=0, l_dec=0

// Declaração de vetores

let vetor_crescente100=[]
let vetor_crescente1000=[]
let vetor_crescente10000=[]
let vetor_crescente100000=[]
let vetor_decrescente100=[]
let vetor_decrescente1000=[]
let vetor_decrescente10000=[]
let vetor_decrescente100000=[]
let vetor_aleatorio100=[]
let vetor_aleatorio1000=[]
let vetor_aleatorio10000=[]
let vetor_aleatorio100000=[]

// Chamada de funções

gerar_vetores(vetor_crescente100, vetor_crescente1000, vetor_crescente10000, vetor_crescente100000, vetor_decrescente100, 
    vetor_decrescente1000, vetor_decrescente10000, vetor_decrescente100000, vetor_aleatorio100, vetor_aleatorio1000, vetor_aleatorio10000, vetor_aleatorio100000)

// Mostrar resultado

console.log("Vetor crescente 100: ")
console.log(vetor_crescente100)
console.log(" ")
console.log("Vetor crescente 1.000: ")
console.log(vetor_crescente1000)
console.log(" ")
console.log("Vetor crescente 10.000: ")
console.log(vetor_crescente10000)
console.log(" ")
console.log("Vetor crescente 100.000: ")
console.log(vetor_crescente100000)
console.log(" ")
console.log("Vetor decrescente 100: ") 
console.log(vetor_decrescente100)
console.log(" ")
console.log("Vetor decrescente 1.000: ") 
console.log(vetor_decrescente1000)
console.log(" ")
console.log("Vetor decrescente 10.000: ") 
console.log(vetor_decrescente10000)
console.log(" ")
console.log("Vetor decrescente 100.000: ") 
console.log(vetor_decrescente100000)
console.log(" ")
console.log("Vetor aleatorio 100: ") 
console.log(vetor_aleatorio100)
console.log(" ")
console.log("Vetor aleatorio 1.000: ") 
console.log(vetor_aleatorio1000)
console.log(" ")
console.log("Vetor aleatorio 10.000: ") 
console.log(vetor_aleatorio10000)
console.log(" ")
console.log("Vetor aleatorio 100.000: ") 
console.log(vetor_aleatorio100000)

// Resultado Bubblesort

console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_crescente100)
console.log("Vetor crescente 100 ordenado pelo BubbleSort: " ) 
console.log(vetor_crescente100)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_crescente1000)
console.log("Vetor crescente 1.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_crescente1000)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_crescente10000)
console.log("Vetor crescente 10.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_crescente10000)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_crescente100000)
console.log("Vetor crescente 100.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_crescente100000)
console.timeEnd('Bubblesort...')

console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_decrescente100)
console.log("Vetor decrescente 100 ordenado pelo BubbleSort: " ) 
console.log(vetor_decrescente100)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_decrescente1000)
console.log("Vetor decrescente 1.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_decrescente1000)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_decrescente10000)
console.log("Vetor decrescente 10.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_decrescente10000)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_decrescente100000)
console.log("Vetor decrescente 100.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_decrescente100000)
console.timeEnd('Bubblesort...')

console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_aleatorio100)
console.log("Vetor aleatorio 100 ordenado pelo BubbleSort: " ) 
console.log(vetor_aleatorio100)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_aleatorio1000)
console.log("Vetor aleatorio 1.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_aleatorio1000)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_aleatorio10000)
console.log("Vetor aleatorio 10.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_aleatorio10000)
console.timeEnd('Bubblesort...')
console.log(" ")
console.time('Bubblesort...')
bubbleSort(vetor_aleatorio100000)
console.log("Vetor aleatorio 100.000 ordenado pelo BubbleSort: " ) 
console.log(vetor_aleatorio100000)
console.timeEnd('Bubblesort...')


// Resultado Seleção Direta

console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_crescente100)
console.log("Vetor crescente 100 ordenado pelo Seleção Direta: " ) 
console.log(vetor_crescente100)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_crescente1000)
console.log("Vetor crescente 1.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_crescente1000)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_crescente10000)
console.log("Vetor crescente 10.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_crescente10000)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_crescente100000)
console.log("Vetor crescente 100.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_crescente100000)
console.timeEnd('Seleção Direta...')

console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_decrescente100)
console.log("Vetor decrescente 100 ordenado pelo Seleção Direta: " ) 
console.log(vetor_decrescente100)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_decrescente1000)
console.log("Vetor decrescente 1.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_decrescente1000)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_decrescente10000)
console.log("Vetor decrescente 10.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_decrescente10000)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_decrescente100000)
console.log("Vetor decrescente 100.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_decrescente100000)
console.timeEnd('Seleção Direta...')

console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_aleatorio100)
console.log("Vetor aleatorio 100 ordenado pelo Seleção Direta: " ) 
console.log(vetor_aleatorio100)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_aleatorio1000)
console.log("Vetor aleatorio 1.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_aleatorio1000)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_aleatorio10000)
console.log("Vetor aleatorio 10.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_aleatorio10000)
console.timeEnd('Seleção Direta...')
console.log(" ")
console.time('Seleção Direta...')
selecaoDireta(vetor_aleatorio100000)
console.log("Vetor aleatorio 100.000 ordenado pelo Seleção Direta: " ) 
console.log(vetor_aleatorio100000)
console.timeEnd('Seleção Direta...')

// Resultado Inserção Direta

console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_crescente100)
console.log("Vetor crescente 100 ordenado pelo Inserção Direta: " ) 
console.log(vetor_crescente100)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_crescente1000)
console.log("Vetor crescente 1.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_crescente1000)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_crescente10000)
console.log("Vetor crescente 10.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_crescente10000)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_crescente100000)
console.log("Vetor crescente 100.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_crescente100000)
console.timeEnd('Inserção Direta...')

console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_decrescente100)
console.log("Vetor decrescente 100 ordenado pelo Inserção Direta: " ) 
console.log(vetor_decrescente100)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_decrescente1000)
console.log("Vetor decrescente 1.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_decrescente1000)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_decrescente10000)
console.log("Vetor decrescente 10.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_decrescente10000)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_decrescente100000)
console.log("Vetor decrescente 100.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_decrescente100000)
console.timeEnd('Inserção Direta...')

console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_aleatorio100)
console.log("Vetor aleatorio 100 ordenado pelo Inserção Direta: " ) 
console.log(vetor_aleatorio100)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_aleatorio1000)
console.log("Vetor aleatorio 1.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_aleatorio1000)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_aleatorio10000)
console.log("Vetor aleatorio 10.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_aleatorio10000)
console.timeEnd('Inserção Direta...')
console.log(" ")
console.time('Inserção Direta...')
insercaoDireta(vetor_aleatorio100000)
console.log("Vetor aleatorio 100.000 ordenado pelo Inserção Direta: " ) 
console.log(vetor_aleatorio100000)
console.timeEnd('Inserção Direta...')

// Resultao Quicksort


console.log(" ")
console.time('Quicksort...')
quicksort(vetor_crescente100)
console.log("Vetor crescente 100 ordenado pelo Quicksort: " ) 
console.log(vetor_crescente100)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_crescente1000)
console.log("Vetor crescente 1.000 ordenado pelo Quicksort: " ) 
console.log(vetor_crescente1000)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_crescente10000)
console.log("Vetor crescente 10.000 ordenado pelo Quicksort: " ) 
console.log(vetor_crescente10000)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_crescente100000)
console.log("Vetor crescente 100.000 ordenado pelo Quicksort: " ) 
console.log(vetor_crescente100000)
console.timeEnd('Quicksort...')

console.log(" ")
console.time('Quicksort...')
quicksort(vetor_decrescente100)
console.log("Vetor decrescente 100 ordenado pelo Quicksort: " ) 
console.log(vetor_decrescente100)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_decrescente1000)
console.log("Vetor decrescente 1.000 ordenado pelo Quicksort: " ) 
console.log(vetor_decrescente1000)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_decrescente10000)
console.log("Vetor decrescente 10.000 ordenado pelo Quicksort: " ) 
console.log(vetor_decrescente10000)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_decrescente100000)
console.log("Vetor decrescente 100.000 ordenado pelo Quicksort: " ) 
console.log(vetor_decrescente100000)
console.timeEnd('Quicksort...')

console.log(" ")
console.time('Quicksort...')
quicksort(vetor_aleatorio100)
console.log("Vetor aleatorio 100 ordenado pelo Quicksort: " ) 
console.log(vetor_aleatorio100)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_aleatorio1000)
console.log("Vetor aleatorio 1.000 ordenado pelo Quicksort: " ) 
console.log(vetor_aleatorio1000)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_aleatorio10000)
console.log("Vetor aleatorio 10.000 ordenado pelo Quicksort: " ) 
console.log(vetor_aleatorio10000)
console.timeEnd('Quicksort...')
console.log(" ")
console.time('Quicksort...')
quicksort(vetor_aleatorio100000)
console.log("Vetor aleatorio 100.000 ordenado pelo Quicksort: " ) 
console.log(vetor_aleatorio100000)
console.timeEnd('Quicksort...')