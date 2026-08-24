function getPriceBuggy(size) {
    let price = 0;
    switch (size) {
        case "s": price = 30; break;
        case "m": price = 40; break;
        case "l": price = 50; break;
        default: price = 0; break;
    }
    return price;
}

function getPriceFixed(size) {
    switch (size) {
        case "s": return 30;
        case "m": return 40;
        case "l": return 50;
        default: return 0;
    }
}

for (const s of ["s", "m", "l", "xl"]) {
    console.log("ขนาด " + s + " -> มีบั๊ก: " + getPriceBuggy(s) + " | แก้แล้ว:" + getPriceFixed(s))
}