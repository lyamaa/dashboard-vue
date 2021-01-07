<template>
    <div class="column col is-3">
      <aside class="menu is-hidden-mobile">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li><router-link to="/dashboard" active-class="active" >Dashboard</router-link></li>
          <li><router-link to="/users" active-class="active">Users</router-link></li>
          <li><router-link to="/roles" active-class="active">Roles</router-link></li>
        </ul>
        
      </aside>
    </div>
</template>

<style src="../_main.scss" lang="scss">

</style>