<script>
    import product_manager from './product-manager.svelte';
    import template from './product-box-template.svelte';
  
    export let product;
  </script>

<svelte:component this={product}/>