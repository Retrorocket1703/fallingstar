<script lang="ts">
  import type { Product } from "./Product";
  import { Popover } from "flowbite-svelte";

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
  <p>Blank</p>
</div>

<Popover
  triggeredBy={product.trigger}
  class="w-96 text-sm font-light color-black"
  trigger="click"
  title={product.title}
>
  <div class="grid grid-cols-6">
    <div class="col-span-3 p-1">
      <div class="space-y-3">
        <pre style="font-size: small;">
          Wholesale : ${product.price}
          Size : {product.size}
          Category : {product.data}
          Summary : {product.summary}
        </pre>
      </div>
    </div>
    <div class="card w-40">
      <img src={product.popOverImgSrc1} alt="Card Back" />
      <img src={product.popOverImgSrc2} class="img-top" alt="Card Front" />
    </div>
  </div></Popover
>
