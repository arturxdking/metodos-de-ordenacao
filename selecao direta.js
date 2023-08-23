/*
Achar o menor número do vetor e fixar na primeira posição,
percorrer o vetor novamente para achar o proximo menor,
até o vetor ficar ordenado
*/

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

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
selecaoDireta(nums)
console.log(nums)