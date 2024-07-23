<script lang="ts">
    let className: string | undefined = undefined;

    export { className as class };
</script>

<button
    on:click
    class="mb-2 mr-2 px-3 py-2 w-full rounded align-middle text-white bg-slate-700 hover:bg-slate-600 {className}"
><slot /></button>
