export class Product {
    public name:string;
    public desc:string;
    public price:number;

    constructor(data:any) {
        this.name = data.name || 'no name';
        this.desc = data.desc;
        this.price = data.price;
    }
}
