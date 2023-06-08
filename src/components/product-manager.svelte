<script>
    import product from './products.svelte';
  
   let Product = [
      {
        title: '',
        data: '',
        price: '',
        size: '',
        boximgsrc: '',
        popoverimgsrc1: '',
        popoverimgsrc2: '',
        summary: ''
      },
      {
        title: '',
        data: '',
        price: '',
        size: '',
        boximgsrc: '',
        popoverimgsrc1: '',
        popoverimgsrc2: '',
        summary: ''
      },
      {
        title: '',
        data: '',
        price: '',
        size: '',
        boximgsrc: '',
        popoverimgsrc1: '',
        popoverimgsrc2: '',
        summary: ''
      }
    ];
  </script>

  <div class = "all-products">
    {#each Product as Product}
      <product {product}/>
    {/each}
  </div>