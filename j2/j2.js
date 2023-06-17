const func = (a,b) => {
    document.write(a+b);
}

for(let i=0;i<=2;i++)
{
    let a = setTimeout(func,5000,1,5);
    
        // clearTimeout(a);
    
}

