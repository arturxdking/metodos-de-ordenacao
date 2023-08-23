/*
    Bubblesort 

    Percorre o conjunto de dados, comparando o elemento atual com o seu 
    sucessor e promovendo a troca entre eles caso o primeiro seja maior que o segundo.
    Faz isso em varias passadas, até que na ultima delas, nenhuma delas tenha sido registrada.
*/
function  bubbleSort(vetor){
    
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

var nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
/*
    Usar uma função para calcular o tempo de execução no vetor desordenado e no ordenado
*/

console.time('Bubblesort1...')
bubbleSort(nums)
console.timeEnd('Bubblesort1...')

console.log(nums)

console.time('Bubblesort...')
bubbleSort(nums)
console.timeEnd('Bubblesort...')