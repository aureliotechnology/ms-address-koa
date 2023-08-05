import path from 'path';
import fs from 'fs';


export async function listClass(dir:string, prefix: string) {
    const rootDir = process.cwd();
    const dirList = path.resolve(`${rootDir}/src/${dir}`);
    
    const diretorios = fs.readdirSync(dirList, { withFileTypes: true });
    const classList = [];

    for (const diretorioItem of diretorios) {
        const caminhoCompleto = path.join(dirList, diretorioItem.name);
        if (diretorioItem.isFile()) {
            const Classe = await import(caminhoCompleto);
            classList.push(Classe.default);
        }
    }
    
    return classList;
        
}
