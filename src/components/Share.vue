<script setup lang="ts">
import Button from "@components/Button.vue";
import { SITE_TITLE } from "@consts";
import XIcon from "@components/icons/XIcon.vue";
import LineIcon from "@components/icons/LineIcon.vue";
import ShareIcon from "@components/icons/ShareIcon.vue";

const { src, title } = defineProps<{
    src: URL
    title: string
}>();

const text = `${title} - ${SITE_TITLE}`;

const tweetURL = new URL("https://twitter.com/intent/tweet");
tweetURL.searchParams.set("text", text);
tweetURL.searchParams.set("url", src.toString());

const lineURL = new URL("https://line.me/R/share");
lineURL.searchParams.set("text", `${text}\n${src}`);

const shareData: ShareData = {
    title: SITE_TITLE,
    text: title,
    url: src.toString(),
};

const onClickShare = async () => {
    if (typeof navigator.share !== "function") {
        navigator.clipboard.writeText(text);
        return;
    }

    await navigator.share(shareData);
}
</script>

<template>
    <div>
        <a :href="tweetURL.toString()" rel="noopener noreferrer" target="_blank">
            <Button><XIcon class="inline text-base" /> でシェア</Button>
        </a>
        <a :href="lineURL.toString()" rel="noopener noreferrer" target="_blank">
            <Button><LineIcon class="inline text-base" /> でシェア</Button>
        </a>
        <Button @click="onClickShare"><ShareIcon class="inline text-base" /> シェア</Button>
    </div>
</template>
