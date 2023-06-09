<script lang="ts">
  import type { Product } from "./Product";
  import { Popover } from "flowbite-svelte";

  import { Carousel } from "flowbite-svelte";
  import { images } from "./Product";
  let showThumbs = false;
  let showCaptions = false;

  export let product: Product;
</script>

<div class="box" data-item={product.data}>
  <input
    type="image"
    class="popover-btn"
    id={product.trigger}
    src={product.boxImgSrc}
    alt="none"
  />
</div>

<Popover
  triggeredBy={product.trigger}
  class="w-96 text-sm font-light"
  trigger="click"
  title={product.title}
>
  <div class="grid grid-cols-4">
    <div class="col-span-3 p-3">
      <div class="space-y-2">
        <pre style="font-size: small;">
          Wholesale : {product.price}
          Size : {product.size}
        </pre>
      </div>
    </div>
    <!-- <img
      class="col-span-2 h-full rounded-r-lg"
      src={product.popOverImgSrc1}
      alt="null"
    /> -->
    <div class="max-w-4xl">
      <Carousel {images} {showThumbs} {showCaptions} />
    </div>
  </div>
</Popover>
