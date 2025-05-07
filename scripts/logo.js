
const canvas = document.getElementById("canvasLogo"); // Insere o canvas na viarável
const ctx = canvas.getContext("2d"); //Cria o desenho 2d

const img = new Image(); //cria uma nova imagem

//Atribui a variável img o componente svg
img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-7 -7 100 100">
        <ellipse cx="42" cy="60" rx="30" ry="18" fill="#391010"/>
        <ellipse cx="15" cy="30" rx="12" ry="16" transform="rotate(-40,18,43)" fill="#391010"/>
        <ellipse cx="35" cy="22" rx="12" ry="16" transform="rotate(-10,38,45)" fill="#391010"/>
        <ellipse cx="55" cy="22" rx="12" ry="16" transform="rotate(10,52,35)" fill="#391010"/>
        <ellipse cx="80" cy="30" rx="12" ry="16" transform="rotate(32,70,32)" fill="#391010"/>
    </svg>
`);

//Exibe o desenho na tela
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};