function fruits(): string {
  return 'apple';
}

function numbers(): number {
  return 123;
}


function complex(): string | number {

    let data = 10;
    let wel = "hello world";
    let age = 20;

    if(age === 20 ){
        return data
    }else{
        return wel
    }
}


function anything(): any {
    let data = 10;
    let wel = "hello world";
    let age = 20;

    if(age === 20 ){
        return data
    }else{
        return wel
    }
}