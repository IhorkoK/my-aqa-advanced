function rec(num) {
    if (num > 0) {
        console.log(num);
        rec(num - 1);
    }
}

rec(11);