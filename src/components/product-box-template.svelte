<script>
    import { Popover} from 'flowbite-svelte'
    export let product;
  </script>

<div class="box" data-item={product.data}>
    <img src="images/61.jpg" alt="none" />
  </div>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy=".btn" trigger="click">
    And here's some amazing content. 
</Popover>