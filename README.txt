Leitura e escrita em arquivos

File System "fs"
-> É uma biblioteca nativa do Nodejs que permite interagir com arquivos do sistema, como por exemplo, ler, criar, escrever e etc.
-> É possível trabalhar com assincronicidade usando o fs que utiliza o conceito de callbacks.
-> Para trabalhar com assincronicidade usando promises, a biblioteca fs implementou um módulo específico.
fs/promises 

Buffer
-> É um espaço de memória que armazena dados binários que são representados por uma sequência de números inteiros.

Leitura de arquivos .json
const fs = require('fs/promises');

//Criar uma função anonima
(async fuction () {
    //atribui o arquivo a uma variavel
    const arquivoJson = fs.readFile('teste.json'); 

    //imprime conteúdo do arquivo convertido em string
    console.log(arquivoJson.toString());

    //transforma uma string em json
    const pessoas = JSON.parse(arquivoJson);

    //adicionar novo objeto dentro do array de objetos
    pessoas.push({
        nome: "Guido",
        idade: 31
    });

    //converter objeto para o formato json
    const arrayJson = JSON.stringfy(pessoas);
})();

Escrever em arquivos

//Escrever em um arquivo .txt
await fs.writeFile('caminhoDoArquivo', 'Olá');
//Se chamar a função uma segunda vez, o conteúdo anteriormente adicionado será sobrescrito.
//Se não existir o arquivo indicado, será criado um.

//Escrever em um arquivo .json
app.post('/', async (req, res) => {
    //recebe conteúdo enviado pelo body
    const {nome, idade} = req.body;

    //lê o arquivo .json
    const teste = await fs.readFile('./src/usuarios.json');

    //arquivo é atribuido a uma variavel e o conteúdo convertido em um objeto
    const pessoas = JSON.parse(teste);

    //o objeto é converto em uma string
    const pessoasStringfy = JSON.stringfy(pessoas);

    //o conteúdo enviado por meio do body é adicionado a array de objtos contida no arquivo .json
    await fs.writeFile('./src/usuarios.json', pessoasStringfy);

    //mensagem de retorno após a inclusão do conteúdo
    return res.json('Pessoa cadastrada com sucess!');
});

try - catch - finally
-> O try marca um bloco de declarações onde todo código inserido neste bloco será executado/testado.

-> Caso algum erro aconteça em alguma declaração no bloco try, a execução do código é interrompida imediatamente e o erro é capturado pelo catch.

-> O finally é executado sempre depois da execução de todo bloco try ou catch.

//Exemplo try - catch
try {
    const arquivo = await fs.readFile('arquivo.txt');
    console.lo(arquivo);
} catch (erro) {
    console.log(erro.message);
};

//Exemplo try - catch - finally
try {
    const arquivo = await fs.readFile('arquivo.txt');
    console.lo(arquivo);
} catch (erro) {
    console.log(erro.message);
} finally {
    console.log('Essa mensagem sempre será exibida');
};


app.post('/', async (req, res) => {
    //recebe conteúdo enviado pelo body
    const {nome, idade} = req.body;

    //Inicio método try, sempre a partir da primeira função assíncrona
    try {
        //lê o arquivo .json
        const teste = await fs.readFile('./src/usuarios.json');

        //arquivo é atribuido a uma variavel e o conteúdo convertido em um objeto
        const pessoas = JSON.parse(teste);

        //o objeto é converto em uma string
        const pessoasStringfy = JSON.stringfy(pessoas);

        //o conteúdo enviado por meio do body é adicionado a array de objtos contida no arquivo .json
        await fs.writeFile('./src/usuarios.json', pessoasStringfy);

        //mensagem de retorno após a inclusão do conteúdo
        return res.json('Pessoa cadastrada com sucess!');

      //Catch retorna uma resposta de erro  
    } catch (erro) {
        return res.json(`Deu erro: ${erro.message}`);

        //finally sempre será executado  
    } finally {
        console.log('isso sempre será executado');
    }
});

