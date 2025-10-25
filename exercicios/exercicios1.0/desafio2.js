/*const clientes = [
    { nome: "Maria", idade: 28, compras: [120, 50, 30], ativo: true },
    { nome: "João", idade: 17, compras: [20, 15], ativo: false },
    { nome: "Ana", idade: 35, compras: [300, 100, 250], ativo: true },
    { nome: "Pedro", idade: 40, compras: [50], ativo: true },
    { nome: "Carla", idade: 22, compras: [], ativo: false }
];

const totalGasto = clientes
    .map(cliente => {
        const total = cliente.compras.reduce((soma, valor) => soma + valor, 0);
        return { nome: cliente.nome, totalGasto: total };
    });
console.log(totalGasto);

const ativos = clientes.filter(cliente => cliente.ativo === true);
console.log(ativos);

const clientesAtivos = clientes.filter(cliente => cliente.ativo);
const todosAdultos = clientesAtivos.every(cliente => cliente.idade > 18);
console.log(todosAdultos);

const semCompra = clientes.some(cliente => cliente.compras.length === 0);
console.log(semCompra);

const compraAcima = clientes.find(cliente => {
    const total = cliente.compras.reduce((soma, valor) => soma + valor, 0);
    return total > 500;
});
console.log(compraAcima);

const clientesOrdenados = clientesAtivos.sort((a, b) => {
    const totalA = a.compras.reduce((soma, valor) => soma + valor, 0);
    const totalB = b.compras.reduce((soma, valor) => soma + valor, 0);
    return totalB - totalA;
});
console.log(clientesOrdenados);*/

const clientes = [
  { nome: "Maria", idade: 28, compras: [120, 50, 30], ativo: true },
  { nome: "João", idade: 17, compras: [20, 15], ativo: false },
  { nome: "Ana", idade: 35, compras: [300, 100, 250], ativo: true },
  { nome: "Pedro", idade: 40, compras: [50], ativo: true },
  { nome: "Carla", idade: 22, compras: [], ativo: false }
];

// 1️⃣ Total gasto por cliente
const totalGasto = clientes.map(cliente => {
  const total = cliente.compras.reduce((soma, valor) => soma + valor, 0);
  return { nome: cliente.nome, totalGasto: total };
});
console.log("🧾 1️⃣ Total gasto por cliente:");
console.table(totalGasto);

// 2️⃣ Filtrar clientes ativos
const ativos = clientes.filter(cliente => cliente.ativo);
console.log("✅ 2️⃣ Clientes ativos:");
console.table(ativos);

// 3️⃣ Verificar se todos os ativos são maiores de idade
const todosAdultos = ativos.every(cliente => cliente.idade > 18);
console.log("👨‍💼 3️⃣ Todos os clientes ativos são maiores de idade?", todosAdultos ? "✅ Sim" : "❌ Não");

// 4️⃣ Verificar se existe algum cliente sem compras
const semCompra = clientes.some(cliente => cliente.compras.length === 0);
console.log("🛒 4️⃣ Existe algum cliente sem compras?", semCompra ? "⚠️ Sim" : "✅ Não");

// 5️⃣ Encontrar o primeiro cliente com total gasto acima de 500
const compraAcima = clientes.find(cliente => {
  const total = cliente.compras.reduce((soma, valor) => soma + valor, 0);
  return total > 500;
});
console.log("💰 5️⃣ Primeiro cliente com gasto acima de 500:");
console.table([compraAcima]);

// 6️⃣ (Bônus) Ordenar clientes ativos pelo total gasto (maior → menor)
const clientesOrdenados = ativos.sort((a, b) => {
  const totalA = a.compras.reduce((soma, valor) => soma + valor, 0);
  const totalB = b.compras.reduce((soma, valor) => soma + valor, 0);
  return totalB - totalA;
});
console.log("🏆 6️⃣ Clientes ativos ordenados por total gasto:");
console.table(clientesOrdenados);

