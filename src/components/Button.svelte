<script lang="ts">
    let className: string | undefined = undefined;

    export { className as class };
</script>

<button
    on:click
    class="px-3 py-2 w-full rounded-md align-middle text-white bg-slate-700 hover:bg-slate-600 not-prose {className}"
><slot /></button>
