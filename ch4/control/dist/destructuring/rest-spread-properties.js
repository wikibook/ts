let get = (...rest) => {
    console.log(rest + " => " + Array.isArray(rest));
};
get(...[1, 2, 3]);
let get2 = (one, ...rest) => {
    console.log(one + "=>" + rest);
};
get2(1, ...[2, 3]);
