let m="";
const pratos = [
		{ 
			icone:"🍕",	
			tipo: "pizza",
			sabor: "Pizza de Calabresa",
			descrição:"Uma deliciosa receita que traz o sabor da calabresa junto com cebola, salsa e azeitona sobre uma generosa camada de molho.",
			valor: 27.00
		},	
		{ 
			icone:"🍕",	
			tipo: "pizza",
			sabor: "Pizza Portuguesa",
			descrição:"Uma deliciosa receita que traz o sabor da calabresa junto com cebola, salsa, presunto, mussarela e azeitona sobre uma generosa camada de molho e azeite.",
			valor: 27.00
		},	
		{ 
			icone:"🍰",	
			tipo: "torta",
			sabor: "Torta de morangos",
			descrição:"Um clássico da culinária, trazendo felicidade a cada colherada.",
			valor: 27.00
		},	
		{ 
			icone:"🍷",	
			tipo: "bebida",
			sabor: "Chope de vinho",
			descrição:"Refrescante e inovador .",
			valor: 2.60
		},	
		{ 
			icone:"☕",	
			tipo: "bebida",
			sabor: "Caputino",
			descrição:"Ótimo para tempo frio.",
			valor: 2.60
		},	
		{ 
			icone:"🥗",	
			tipo: "salada",
			sabor: "Salada Tropical",
			descrição:"Uma boa para quem quer uma vida mais saudável.",
			valor: 2.60
		},	
		
		
	];




pratos.forEach(function(item, i){
		document.getElementById("cardapio_corpo").innerHTML+= `
			<div class="menu ${item.tipo}">
				<h2 class="icone">${item.icone}</h2>
				<div>	
					<p class="sabor">${item.sabor} <span class="valor" > R$ ${item.valor.toFixed(2).toString().replace(".", ",")}</span> </p>
					<button class="desc" id="${i}" >Detalhes</button>
				</div>
			</div>
		`
	});