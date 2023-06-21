<script lang="ts">
    import {CalculatorModel} from '../models/Calculator.Model'

    import Key from "./Key.svelte";
    import Display from "./Display.svelte";
    import Row from "./Row.svelte";

    let calc = new CalculatorModel({value: "0"})

    const inputNumber = (num: string) => calc = calc.inputNumber(num)
    const inputOperation = (op: string) => calc = calc.inputOperation(op)
    const inputDot = () => calc = calc.inputDot()
    const calculate = () => calc = calc.calculate()
    const clean = () => calc = calc.clean()

</script>



<div class="calculadora">
    <Display value={calc.value}/>

    <Row>
        <Key text="AC" triple emphasis onClick={clean}/>
        <Key text="/" operation onClick={inputOperation}/>
    </Row>

    <Row>
        <Key text="7" onClick={inputNumber}/>
        <Key text="8" onClick={inputNumber}/>
        <Key text="9" onClick={inputNumber}/>
        <Key text="*" operation onClick={inputOperation}/>
    </Row>

    <Row>
        <Key text="4" onClick={inputNumber}/>
        <Key text="5" onClick={inputNumber}/>
        <Key text="6" onClick={inputNumber}/>
        <Key text="+" operation onClick={inputOperation}/>
    </Row>

    <Row>
        <Key text="1" onClick={inputNumber}/>
        <Key text="2" onClick={inputNumber}/>
        <Key text="3" onClick={inputNumber}/>
        <Key text="-" operation onClick={inputOperation}/>
    </Row>

    <Row>
        <Key text="0" double onClick={inputNumber}/>
        <Key text="," onClick={inputDot} />
        <Key text="=" emphasis onClick={calculate}/>
    </Row>
</div>


<style>
    .calculadora {
        height: 250px;
        width:  200px;
        padding: 10px;
        border-radius: 10px;

        background-color: var(--cor-fundo);
        
        display: flex;
        flex-direction: column;
    }

</style>