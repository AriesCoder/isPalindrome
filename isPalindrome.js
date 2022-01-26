// Write your code below
let word = 'did'
//----------while loop---------
function isPalindromeW(word){
    let j = word.length - 1
    let i = 0
    while(i < j){
        if(word[i] !== word[j]){
            return false
        }
        i++
        j--
    }
    return true
}    
console.log(isPalindromeW(word))

//-------------For loop-------------

function isPalindromeF(word){
    let j = word.length-1
    for(let i = 0; i < j; i++){
       if(word[i] !== word [j]){
           return false
       }
       else{
           j--
       }
    }
    return true   
}
console.log(isPalindromeF(word))

//--------------combine------------

function isPalindrome(word){
    for(let i = 0, j = word.length - 1; i < j; i++, j--){
       if(word[i] !== word [j]){
           return false
       }
    }
    return true   
}
//----------Recursive---------------

function isPalindromeRecursive(word, firstIndex, lastIndex){
    if(word[firstIndex] !== word[lastIndex]){
        return false
    }else if(firstIndex >= lastIndex){
        return true
    }
    return isPalindromeRecursive(word, firstIndex+1, lastIndex-1)
}
console.log(isPalindromeRecursive(word,0,word.length-1))
