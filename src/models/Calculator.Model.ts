export class CalculatorModel {
    #value: string;
    #accumulator: number;
    #cleanScreen: boolean;
    #operation: string;
    #finalOperation: boolean;

    constructor(
        data:{ 
            value?: string, 
            accumulator?: number, 
            operation?: string, 
            cleanScreen?: boolean,
            finalOperation?: boolean
        } = {
            value: null,
            accumulator: null,
            operation: null,
            cleanScreen: false,
            finalOperation: false
        }
    ) {
        this.#value = data.value;
        this.#accumulator = data.accumulator;
        this.#operation = data.operation;
        this.#cleanScreen = data.cleanScreen;
        this.#finalOperation = data.finalOperation;
    }

    get value() { return this.#value?.replace('.', ',') || '0' }

    inputNumber(novovalue: string) {
        console.log()
        return new CalculatorModel({
            value: (this.#cleanScreen || !parseInt(this.#value) || this.#finalOperation)? novovalue: this.#value + novovalue,
            operation: this.#operation,
            accumulator: this.#accumulator,
            cleanScreen: false,
        })
    }

    inputDot() {
        return new CalculatorModel({
            value: this.#value?.includes('.') ? this.#value: this.#value + '.',
            operation: this.#operation,
            accumulator: this.#accumulator,
            cleanScreen: false,
        })
    }
    

    clean() {
        return new CalculatorModel()
    }

    inputOperation(nextOperation: string) {
        return this.calculate(nextOperation)
    }

    calculate(nextOperation: string = null) {
        const accumulator = !this.#operation
            ? parseFloat(this.#value)
            : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);

        const value = !this.#operation ? this.#value: `${accumulator}`

        const cal = new CalculatorModel({
            value,
            accumulator,
            operation: nextOperation,
            cleanScreen: nextOperation? true : false,
            finalOperation: true,
        })

        console.log(cal)

        return cal
    }
}