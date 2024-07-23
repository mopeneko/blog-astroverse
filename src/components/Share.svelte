<script lang="ts">
    import { SITE_TITLE } from "@consts";
    import Button from "@components/Button.svelte";

    export let src: string;
    export let title: string;

    export const text = `${title} - ${SITE_TITLE}`;

    export const tweetURL = new URL("https://twitter.com/intent/tweet");
    tweetURL.searchParams.set("text", text);
    tweetURL.searchParams.set("url", src.toString());

    export const lineURL = new URL("https://line.me/R/share");
    lineURL.searchParams.set("text", `${text}\n${src}`);

    export const shareData: ShareData = {
        title: SITE_TITLE,
        text: title,
        url: src.toString(),
    };

    export const onClickShare = async () => {
        if (typeof navigator.share !== "function") {
            navigator.clipboard.writeText(text);
            return;
        }

        await navigator.share(shareData);
    }
</script>

<div class="not-prose text-white text-xl stroke-white">
    <a href="{tweetURL.toString()}" rel="noopener noreferrer" target="_blank">
        <Button class="text-xl"><span class="iconify prime--twitter" aria-label="X"></span> でシェア</Button>
    </a>
    <a href="{lineURL.toString()}" rel="noopener noreferrer" target="_blank">
        <Button class="text-xl"><span class="iconify jam--line" aria-label="X"></span> でシェア</Button>
    </a>
    <Button class="text-xl" on:click="{onClickShare}"><span class="iconify ion--share"></span> シェア</Button>
</div>
