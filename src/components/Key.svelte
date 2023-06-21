<script lang="ts">
    export let text: string;
    export let triple: boolean = false;
    export let double: boolean = false;
    export let operation: boolean = false;
    export let emphasis: boolean = false;
    export let onClick: (value: string) => void = () => {}
</script>

<button 
    on:click={() => onClick(text)}
    class="key" 
    class:triple 
    class:double 
    class:operation 
    class:emphasis
>
    {text}
</button>

<style>
    .key {
        margin: 0;
        flex-basis: 25%;
        border: 1px solid var(--cor-fundo);
    }

    .triple {
        flex-basis: 75%;
    }

    .double {
        flex-basis: 50%;
    }

    .operation {
        background-color: orange;
        color: white;
    }

    .emphasis {
        background-color: red;
        color: white;
    }

</style>