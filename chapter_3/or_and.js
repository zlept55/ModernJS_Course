const password = 'p@ss12';

    if(password.length >= 12 && password.includes('@')){
        console.log("That password is mighty strong");
    }else if(password.length >= 8 || password.includes('@')){
        console.log("That password is strong enough");  
    }else{
        console.log("Password is not strong enough");
    }    