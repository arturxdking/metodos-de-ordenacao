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
let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
insercaoDireta(nums)
console.log(nums)