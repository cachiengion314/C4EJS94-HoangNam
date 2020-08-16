let number = parseInt(prompt(`Please enter number of polygons`)); 
let n = number -2;
while (n > 2) { 
    for (let i = 0; i < n; i++) { 
        fd((1 + Math.pow(n, 2) - 50 * n) / n); 
        rt(180 - (180 * (n - 2) / n)); 
    } 
    n--; 
}