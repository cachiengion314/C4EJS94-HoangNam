const colors = [`red`, `gray`, `blue`, `purple`, `cyan`];

for (let i = 0; i < 4; i++) {
    color(colors[i]);
    for (let ii = 0; ii < 4; ii++) {
        fd(50 * (i + 1));
        rt(90);
    }
}