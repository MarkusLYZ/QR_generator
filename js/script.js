const form = document.getElementById("generate_form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    e.preventDefault();
    console.log('1');
    const url = document.getElementById('url');
    const size = document.getElementById('size');

    if (url == ''){
        alert('Please enter URL');
    }else{

    }
    console.log(url,size);
    
};
if (form){
    form.addEventListener('submit', onGenerateSubmit);
}else{
    console.log('form doesnt exist')
}

