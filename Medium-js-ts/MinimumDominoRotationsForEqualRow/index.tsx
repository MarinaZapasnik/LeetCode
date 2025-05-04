// Минимальные повороты домино для равного ряда
// Решено
// Середина
// Темы
// Компании
// В ряду костяшек домино tops[i]и bottoms[i]представляют верхнюю и нижнюю половины костяшки домино. (Косточка домино — это плитка с двумя числами от 1 до 6 — по одному на каждой половине плитки.)ith

// Мы можем повернуть костяшку домино и поменять значения.ithtops[i]bottoms[i]

// Возвращает минимальное количество поворотов, при котором все значения в topsбудут одинаковыми, или все значения в bottomsбудут одинаковыми.

// Если это невозможно сделать, верните -1.

// Пример 1:


// Вход: вершины = [2,1,2,4,2,2], основания = [5,2,6,2,3,2]
//  Выход: 2
//  Пояснение:  
// Первая цифра представляет домино, заданные вершинами и основаниями: до того, как мы сделаем какие-либо вращения. 
// Если мы повернем вторую и четвертую домино, мы можем сделать каждое значение в верхнем ряду равным 2, как указано во второй цифре.
// Пример 2:

// Вход: вершины = [3,5,1,2,3], основания = [3,6,3,3,4]
//  Выход: -1
//  Пояснение:  
// В этом случае невозможно повернуть домино так, чтобы сделать один ряд значений равным.

// Ограничения:

// 2 <= tops.length <= 2 * 104
// bottoms.length == tops.length
// 1 <= tops[i], bottoms[i] <= 6


function minDominoRotations(tops: number[], bottoms: number[]): number {
    for (let x = 1; x <= 6; x ++) {
        let countOfReverseTops = 0
        let countOfReverseBottoms = 0
        let isSameTop = true
        let isSameBottom = true
        for (let i = 0; i < tops.length; i ++) {
            if (tops[i] !== x) {
                if (bottoms[i] === x) {
                    countOfReverseBottoms ++
                } else {
                    isSameTop = false
                }
            }
            if (bottoms[i] !== x) {
                if (tops[i] === x) {
                    countOfReverseTops ++
                } else {
                    isSameBottom = false
                }
            }
        }
        if (isSameTop || isSameBottom) {
            return countOfReverseBottoms>=countOfReverseTops? countOfReverseTops : countOfReverseBottoms
        }
        

    }
    return -1
};