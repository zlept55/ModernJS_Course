let age = 30;

if(true){
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block:',age,name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block:',age);
    }
}


console.log('outside code block:',age,name);        