export const winCombination = (win) => {
    console.log(win, 'win')
    const { value, count } = win
    if (value === 1) {
        if (count === 3) return 2
        if (count === 4) return 3
        if (count === 5) return 4
    }
    if (value === 2) {
        if (count === 3) return 1.9
        if (count === 4) return 2.9
        if (count === 5) return 3.9
    }
    if (value === 3) {
        if (count === 3) return 1.8
        if (count === 4) return 2.8
        if (count === 5) return 3.8
    }
    if (value === 4) {
        if (count === 3) return 1.7
        if (count === 4) return 2.7
        if (count === 5) return 3.7
    }
    if (value === 5) {
        if (count === 3) return 1.6
        if (count === 4) return 2.6
        if (count === 5) return 3.6
    }
    if (value === 6) {
        if (count === 3) return 1.5
        if (count === 4) return 2.5
        if (count === 5) return 3.5
    }
    if (value === 7) {
        if (count === 3) return 1.4
        if (count === 4) return 2.4
        if (count === 5) return 3.4
    }
    if (value === 8) {
        if (count === 3) return 1.3
        if (count === 4) return 2.3
        if (count === 5) return 3.3
    }
    if (value === 9) {
        if (count === 3) return 1.2
        if (count === 4) return 2.2
        if (count === 5) return 3.2
    }
    if (value === 10) {
        if (count === 3) return 1.1
        if (count === 4) return 2.1
        if (count === 5) return 3.1
    }
}