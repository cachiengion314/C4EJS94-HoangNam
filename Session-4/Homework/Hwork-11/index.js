const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
penup();
rt(90);
fd(circle.x);
rt(-90);
fd(circle.y);

rt(-90);
fd(circle.radius);
rt(90);

pendown();
for (let i = 0; i < 200; i++) {
    fd(3.14 * circle.radius * 2 / 200);
    rt(180 - (180 * (200 - 2) / 200));
}