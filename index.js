const aluno = Object.freeze({
    nome: String,
    idade: Number,
    matricula: Number,
    curso: String
})
const turma = Object.freeze([])
const criarAluno = (nome, idade, matricula, curso) => { return { nome: nome, idade: idade, matricula: matricula, curso:curso } }
const adicionarAluno = (turma, aluno) => [...turma, criarAluno(aluno.nome, aluno.idade, aluno.matricula, aluno.curso)]
const listarAlunos = (turma) => typeof(turma) === "object" ? turma.map((aluno) => console.log(aluno)) : console.log(turma)
const buscarPorCurso = (turma, curso) => turma.filter((aluno) => aluno.curso.toLowerCase() === curso.toLowerCase())
const removerAluno = (turma, nomeAluno) => turma.filter((aluno) => aluno.nome.toLowerCase() !== nomeAluno.toLowerCase())
const ordenarMatricula = (turma) => turma.sort((alunoA, alunoB) => { return alunoA.matricula - alunoB.matricula })
const contarPorCurso = (turma) => ["EC", "CC", "SI"].map((curso) => { return `${curso}: ${turma.filter((aluno) => aluno.curso.toLowerCase() === curso.toLowerCase()).length}` })
const editarAluno = (turma, nomeAluno, updateData) => {
    const aluno = turma.filter((aluno) => aluno.nome.toLowerCase() === nomeAluno.toLowerCase())
    const alunoIndex = turma.indexOf(aluno[0])

    const keys = Object.keys(aluno[0])

    const alunoEditado = keys.map((key) => updateData[key] ? updateData[key] : aluno[0][key] )

    turma[alunoIndex] = {nome: alunoEditado[0], idade: alunoEditado[1], matricula: alunoEditado[2], curso: alunoEditado[3]}

    return turma
}

const turma1 = adicionarAluno(turma, {nome: "Felipe", idade: 18, matricula: 202403, curso: "CC"})
const turma2 = adicionarAluno(turma1, {nome: "Pedro", idade: 19, matricula: 202302, curso: "EC"})
const turma3 = adicionarAluno(turma2, {nome: "João", idade: 20, matricula: 202109, curso: "SI"})
const turma4 = adicionarAluno(turma3, {nome: "Kalil", idade: 21, matricula: 202404, curso: "CC"})
const turma5 = adicionarAluno(turma4, {nome: "Luis", idade: 22, matricula: 202412, curso: "EC"})
const turma6 = adicionarAluno(turma5, {nome: "Felipe", idade: 18, matricula: 202202, curso: "CC"})
const turma7 = removerAluno(turma6, "Felipe")
const turma8 = editarAluno(turma6, "Pedro", {curso: "CC", idade: 45})

listarAlunos(turma8)