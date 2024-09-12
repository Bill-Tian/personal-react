interface testProps {
    title: string
}

function identify<T, U>(test1: U, test2: T): T {

    return test2
}

identify<number, string>('abc', 3)