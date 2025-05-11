// Дан целочисленный массив arr, вернуть, true если в массиве есть три последовательных нечетных числа. В противном случае вернуть  false.
 

// Пример 1:

// Ввод: arr = [2,6,4,1]
//  Вывод: false
//  Пояснение: Не существует трех последовательных коэффициентов.
// Пример 2:

// Ввод: arr = [1,2,34,3,4,5,7,23,12]
//  Вывод: true
//  Пояснение: [5,7,23] — три последовательных коэффициента.
 

// Ограничения:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

function threeConsecutiveOdds(arr: number[]): boolean {
    
    let odd = arr.reduce<number[]>((acc, el, index) => {
        if (el % 2 !== 0) {
            
            acc = [ ...acc, index]
        }
        return acc
    }, []
    )

    if (odd.length >= 3) {
        for (let i = 1; i < odd.length - 1; i ++) {
        if (odd[i] - odd[i-1] === 1 && odd[i + 1] - odd[i] === 1) {
            return true
        }
    } 
    }
    return false
    
};