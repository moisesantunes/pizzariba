let pedidos=null;
let bot =document.getElementById("cardapio_corpo");
let tira_p = document.getElementById("lista_p");
let modal = document.getElementById("modalbox");
let span = document.getElementsByClassName("close")[0];
let pedir = document.getElementById("pedir");
let num_item = document.getElementById("slide");
let lista_pedidos=[];
let lista;
let concluir ="";
const plural={
	"Pizza": "Pizzas",
	"Torta": "Tortas",
	"Salada": "Saladas",
	"Caputino":"Caputinos",
	"Chope":"Chopes",
	};
function conc(){
	concluir = document.getElementById("bt_conc");	
	concluir.addEventListener("click",() =>{
	let virg=" ";
		pedidos= 'Oi, gostaria de pedir ';
		
		lista_pedidos.forEach((item,i,arr)=>{
			let str_n= item.nome.split(" ");
			if(item.qtd > 1) str_n[0] = plural[str_n[0]];
			if(i > 0){virg=", ";}
			if(i== arr.length -1 && arr.length > 1){virg=" e ";}	
			pedidos += virg+item.qtd+" "+str_n.join(" ");
		})
		concluir.href= "https://api.whatsapp.com/send?phone=5521989317111&text="+pedidos
	
	})
	
}

 
//evento que abre e carrega dinamicamente o conteúdo do modal
bot.addEventListener("click",(e) =>{
	if(e.target.tagName == "BUTTON"){
 		document.getElementById("modalbox").style.display='block';
 		document.getElementById("modal-p-h").innerHTML= pratos[e.target.id].sabor;
 		document.getElementById("modal-p-d").innerHTML= pratos[e.target.id].descrição;
 	}
 })

//fecha o modal no x
 span.onclick = function() { modal.style.display = "none"; }
 
 //fecha o modal quando clica fora
 window.onclick = function(event) {
 	if (event.target == modal) {
 		modal.style.display = "none";
 	}
 }

num_item.oninput = () =>{
	document.getElementById("num_item_valor").innerHTML = num_item.value;
}
//acrescenta pedidos a lista
pedir.onclick = (e) =>{ 
 	let i_pedido= document.getElementById("modal-p-h").textContent;
 	let obj={ nome: i_pedido, qtd:num_item.value }
	lista_pedidos.push(obj)
	lista='<h3>Lista dos pedidos</h3> <ul>';
	lista_pedidos.forEach((item,i,arr)=>{
		let n_i =i+1;
		let str_n= item.nome.split(" ");
		if(item.qtd > 1) str_n[0] = plural[str_n[0]];
		lista+="<li class='item_ped'>"+item.qtd +" "+str_n.join(" ")+ " <input type='button' class='tirap "+i+"' value='X' > </li>"
	})
	document.getElementById("lista_p").innerHTML=lista+"</ul> <a id='bt_conc'class='btn_zap'>Pedir</a>";
	modal.style.display = "none";
	document.getElementById("num_item_valor").innerHTML = 1;
	num_item.value=1;
	conc()
}

tira_p.addEventListener("click", (e) =>{
	if(e.target.tagName== "INPUT"){
		let nu_item = e.target.classList.item(1);
		nu_item = Number(nu_item);
		lista='<h3>Lista dos pedidos</h3> <ul>';
		lista_pedidos = lista_pedidos.filter((el,i,arr) =>{
			return arr[i] != lista_pedidos[nu_item] ;
		})	
		
		if(lista_pedidos.length > 0){
			lista_pedidos.forEach((item,i,arr)=>{
				let n_i =i+1;
				lista+="<li class='item_ped'>"+item.qtd +" "+item.nome+ " <input type='button' class='tirap "+i+"' value='X' > </li>"
			})
			document.getElementById("lista_p").innerHTML=lista+"</ul> <button id='bt_conc'class='btn'>Pedir</button>";	
		}else{
			document.getElementById("lista_p").innerHTML= "<p>já tirou tudo</p>"
		}
	}
	conc()
})
