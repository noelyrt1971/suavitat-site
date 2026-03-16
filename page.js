
export default function SuavitatSite() {
  const produtos = [
    { nome: "Sabonete Líquido", desc: "Perfume delicado e elegante para lavabos.", preco: "Sob consulta", categoria: "Aroma" },
    { nome: "Difusor de Ambiente", desc: "Aromatização sofisticada para casa.", preco: "Sob consulta", categoria: "Aroma" },
    { nome: "Água de Lençol", desc: "Perfume suave para roupas e tecidos.", preco: "Sob consulta", categoria: "Aroma" },
    { nome: "Body Splash", desc: "Fragrância leve para o dia a dia.", preco: "Sob consulta", categoria: "Aroma" },
    { nome: "Caneca Personalizada", desc: "Com foto, nome ou mensagem.", preco: "Sob consulta", categoria: "Personal" },
    { nome: "Camiseta Personalizada", desc: "Estampas de família, datas e eventos.", preco: "Sob consulta", categoria: "Personal" },
    { nome: "Chaveiro em MDF", desc: "Modelos personalizados inclusive times.", preco: "Sob consulta", categoria: "Personal" },
    { nome: "Lembrancinhas de Festa", desc: "Itens delicados para aniversários e eventos.", preco: "Sob consulta", categoria: "Festa" },
    { nome: "Mini Mochilas Temáticas", desc: "Perfeitas para festas infantis.", preco: "Sob consulta", categoria: "Festa" }
  ];

  return (
    <div style={{fontFamily:'Arial', padding:'40px', background:'#faf6f1'}}>
      <h1 style={{color:'#8c725c'}}>SUAVITAT</h1>
      <p><i>Perfume, cuidado e afeto • by No Torres</i></p>

      <h2>Produtos</h2>

      {produtos.map((p) => (
        <div key={p.nome} style={{border:'1px solid #e5d7c8', padding:'20px', marginBottom:'20px', borderRadius:'12px', background:'#ffffff'}}>
          <h3>{p.nome}</h3>
          <p>{p.desc}</p>
          <strong>{p.preco}</strong>
          <br/>
          <a href="https://wa.me/5511981935006" target="_blank">Pedir pelo WhatsApp</a>
        </div>
      ))}

      <h2>Contato</h2>
      <p>WhatsApp: (11) 98193-5006</p>
      <p>Instagram: @noelyrt</p>
    </div>
  );
}
