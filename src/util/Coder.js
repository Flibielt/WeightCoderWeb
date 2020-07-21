const weights = ["==", ":==:", "::==::", "[==]", ":[==]:", "|==|", ":|==|:",
    "::|==|::", "[|==|]",":[|==|]:", "||==||", ":||==||:", "::||==||::",
    "[||==||]", ":[||==||]:", "|||==|||"];

export function codeText(original, encode2Bytes) {
    let b;
    let a;
    let i;
    let codedText = "";
    if(encode2Bytes === true){
        for (i = 0; i < original.length; i++){
            const c = (original.charCodeAt(i) & 61440) / 4096;
            const d = (original.charCodeAt(i) & 3840) / 256;
            a = (original.charCodeAt(i) & 240)/16;
            b = original.charCodeAt(i) & 15;
            codedText = codedText.concat(weights[c], " ", weights[d], " ", weights[a], " ", weights[b], " ");
        }
    }
    else{
        for (i = 0; i < original.length; i++){
            a = (original.charCodeAt(i) & 240) / 16;
            b = original.charCodeAt(i) & 15;
            codedText = codedText.concat(weights[a], " ", weights[b], " ");
        }
    }
    return codedText;
}

function decodeWeightText(weight) {
    for (let i = 0; i < 16; i++){
        if(weight === weights[i]){
            return i;
        }
    }
}

export function decodeText(codedText, encode2Bytes){
    let second4bit;
    let first4bit;
    let i;
    codedText = codedText.value.trim()
    let decoded = "";
    codedText = codedText.split(" ");
    if(encode2Bytes === true){
        for(i = 0; i < codedText.length-1; i=i+4){
            first4bit = decodeWeightText(codedText[i]);
            second4bit = decodeWeightText(codedText[i+1]);
            const third4bit = decodeWeightText(codedText[i + 2]);
            const fourth4bit = decodeWeightText(codedText[i + 3]);
            decoded += String.fromCharCode(first4bit * 4096 + second4bit * 256 + third4bit * 16 + fourth4bit);
        }
    }
    else{
        for(i = 0; i < codedText.length-1; i=i+2){
            first4bit = decodeWeightText(codedText[i]);
            second4bit = decodeWeightText(codedText[i + 1]);
            decoded += String.fromCharCode(first4bit * 16 + second4bit);
        }
    }
    return decoded;
}