//?--------- problem-1-------------

const formatValue = (value: string | number | boolean) : string | number | boolean =>{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "number"){
        return value*10;
    }

    else if(typeof value === "boolean"){
        return !value;
    }

    return value;
}

// console.log(formatValue('rocky'));
// console.log(formatValue(1));
// console.log(formatValue(false));



//?-----------problem-2--------------

const getLength = (value: string | number[]):number =>{
    if(typeof value === "string"){
        return value.length;
    }

    else if(Array.isArray(value)){
        return value.length;
    }

    return value;
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));