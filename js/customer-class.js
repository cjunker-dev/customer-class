class Customer {
    id;
    constructor(id, name, stateCode, sales) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.sales = sales;


    }

    addSales(sales){
        this.sales += sales;
    }
}