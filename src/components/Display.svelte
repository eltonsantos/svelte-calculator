<script lang="ts">
    export let value: string

    $: FontSize = value.length > 20 ? 'pequena' : `s-${value.length}`

</script>

<div class={`display ${FontSize}`}>
    <span>{value}</span>
</div>

<style>
    .display {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 5px;
        font-size: 1.7rem;
        background-color: aliceblue;
        overflow: hidden;
        margin: 2px 1px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .s-14 { font-size: 1.5rem; }
    .s-15 { font-size: 1.4rem; }
    .s-16 { font-size: 1.3rem; }
    .s-17 { font-size: 1.25rem; }
    .s-18 { font-size: 1.19rem; }
    .s-19 { font-size: 1.13rem; }
    .s-20 { font-size: 1.06rem; }
    .pequena { font-size: 0.9rem; }

</style>