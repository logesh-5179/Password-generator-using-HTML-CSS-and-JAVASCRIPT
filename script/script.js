function password(){
    let inp='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    for(let i=0; i<=8;i++){
        let res=Math.floor(Math.random()*str.length+1);
        inp+=str.charAt(res);
    }
    document.getElementById('pass').value = inp;
}














