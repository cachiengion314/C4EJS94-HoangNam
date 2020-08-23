const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
    {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },

    {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
    {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
]

for (let i = 0; i < cmds.length; i++) {
    home();

    penup();
    rt(90);
    fd(cmds[i].x);
    rt(-90);
    fd(cmds[i].y);
    pendown();
    if (cmds[i].shape != `circle`) {
        for (let ii = 0; ii < 4; ii++) {
            if (cmds[i].shape == `rect`) {
                if (ii % 2 == 0) {
                    fd(cmds[i].height);
                    rt(90);
                } else {
                    fd(cmds[i].width);
                    rt(90);
                }
            } else {
                fd(cmds[i].width);
                rt(90);
            }
        }
    }
    else {
        penup();
        rt(-90);
        fd(cmds[i].radius);
        rt(90);
        pendown();
        for (let iii = 0; iii < 200; iii++) {
            fd(3.14 * cmds[i].radius * 2 / 200);
            rt(180 - (180 * (200 - 2) / 200));
        }
    }
}
home();