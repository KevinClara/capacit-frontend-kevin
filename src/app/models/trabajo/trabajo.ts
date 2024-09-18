export class Trabajo {
    id:number; 
    titulo:string; 
    departamento:Departamento; 
    minimo:number; 
    maximo:number; 
}

export interface Departamento {
    id: number;
    departamento: string;
    managerid: number;
}
