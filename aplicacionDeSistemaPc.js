class DispositivoEntrada {
    constructor(entrada, marca) {
        this._entrada = entrada;
        this._marca = marca;
    }

    get entrada() {
        return this._entrada;
    }

    get marca() {
        return this._marca;
    }

    set entrada(entrada) {
        this._entrada = entrada;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(entrada, marca) {
        super(entrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: ==> idRaton: ${ this._idRaton }, tipoEntrada: ${this._entrada}, marca: ${this._marca}`;
    }

}



class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(entrada, marca) {
        super(entrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `Teclado ==> idTeclado: ${this._idTeclado}, tipoEntrada: ${this._entrada}, marca: ${this._marca}`;
    }
}


class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this.tamaño = tamaño;
    }
    toString() {
        return `Monitor ==> idMonitor: ${this.idMonitor} , Marca: ${this._marca},tamaño:${this._tamaño}`;
    }

}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this.idComputadora = ++Computadora.contadorComputadoras;
    }
    toString() { return `Computadora ==> idComputadora: ${this._idComputadora} \n nombre: ${this._nombre} \n monitor: ${this._monitor} \n teclado: ${this._teclado}, \n raton: ${this._raton} ` }

}


class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }
    mostrarOrden() {
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += ` \n ${computadora}`;
        }
        console.log(` Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('usb', 'hp');
let nuevoRaton = new Raton('hdmi', 'lenovo')


let teclado1 = new Teclado('hdmi', 'Dell');
let teclado2 = new Teclado('USB', 'HP');

let monitor1 = new Monitor('Lenovo', '17');
let monitor2 = new Monitor('Sony', '20');

let computadora1 = new Computadora('pc1', monitor1, teclado2, raton1);
let computadora2 = new Computadora('pc2', monitor2, teclado1, nuevoRaton);
console.log(raton1.toString());
console.log(nuevoRaton.toString());
console.log(teclado1.toString());
console.log(teclado2.toString());

console.log(monitor1.toString());
console.log(monitor2.toString());

console.log(computadora1.toString())
let orden1 = new Orden;
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

let orden2 = new Orden;
orden2.agregarComputadora(computadora2);
orden1.mostrarOrden();
orden2.mostrarOrden();