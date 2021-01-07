<template>
    <form class="box" @submit.prevent="submit" >
    <div class="field">
          <label class="label">Name</label>
      <div class="control">
        <input
          class="input is-medium"
          name="name"
          type="text"
          placeholder="Username"
          required
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>
    <button class="button is-block is-primary is-fullwidth is-medium">
      Submit
    </button>
  
   
  </form>
</template>

<script>
    export default{
        name: "RolesCreate",
        setup(){
            const name  = ref
        }
    }

</script>