<template>
  <div class="columns dash">
    <div class="column is-12">
      <div class="card events-card">
        <header class="card-header">
          <p class="card-header-title">Events</p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-table">
          <div class="content">
            <table class="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th><abbr title="Position">#</abbr></th>
                  <th><abbr title="Played">Name</abbr></th>
                  <th><abbr title="Won">Email</abbr></th>
                  <th><abbr title="Drawn">Roles</abbr></th>
                  <th><abbr title="Lost">Action</abbr></th>
                </tr>
              </thead>

              <tfoot>
                <tr>
                  <th><abbr title="Position"> #</abbr></th>
                  <th><abbr title="Played">Name</abbr></th>
                  <th><abbr title="Won">Email</abbr></th>
                  <th><abbr title="Drawn">Roles</abbr></th>
                  <th><abbr title="Lost">Action</abbr></th>
                </tr>
              </tfoot>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role.name }}</td>
                  <td>
                    <a href="javascript:void(0)" class="button is-small is-primary">Edit</a>
                    &nbsp;
                    <a href="javascript:void(0)" class="button is-small is-danger" @click="del(user.id)">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer class="card-footer" style="margin-top:4rem; ">
          <nav class="pagination" role="navigation" aria-label="pagination">
            <a href="javascript:void(0)" class="pagination-previous" @click="prev">Previous</a>
            <a href="javascript:void(0)" class="pagination-next" @click="next">Next page</a>
            <ul class="pagination-list">   
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import {Entity} from "../../interfaces/entity"
import axios from "axios";

export default {
  name: "Users",
  setup() {
    const users = ref([]);
    const page = ref(1);
    const last = ref(0)

    const load = (async ( ) => {
      const res = await axios.get(`users?page=${page.value}`);

      users.value = res.data.data;
      last.value = res.data.meta.last_page
    });

    const next = async() => {
       if(page.value === last.value) return;
        page.value++;
        await load()
    }

    const prev = async () => {
      if(page.value === 1) return;
        page.value--
        await load()
    }
     onMounted(load)

     const del = async (id: number) => {
       if(confirm('Are you sure to delete.!!')){
         const res = await axios.delete(`user/${id}`)

         users.value =users.value.filter((e: Entity)=> e.id !== id)
       }
     }

     const edit = () => {

     }

    return {
      users,
      next,
      prev,
      del,
    };
  },
};
</script>