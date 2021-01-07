<template>
      <div class="columns dash">
      <div class="column is-12">
        <div class="card events-card">
          <div class="buttons" style="">
            <router-link to="/user/create" class="button is-primary mt-2" style="margin-left: 1rem">New Role</router-link>
            
          </div>
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
                    <th><abbr title="Lost">Action</abbr></th>
                  </tr>
                </thead>

                <tfoot>
                  <tr>
                    <th><abbr title="Position"> #</abbr></th>
                    <th><abbr title="Played">Name</abbr></th>
                    <th><abbr title="Lost">Action</abbr></th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr v-for="role in roles" :key="role.id">
                    <td>{{role.id}}</td>
                    <td>{{role.name}}</td>
                    
                    <td>
                      <router-link
                        :to="`/roles/${role.id}/edit`"
                        class="button is-small is-primary"
                        >Edit</router-link
                      >
                      &nbsp;
                      <a
                        href="javascript:void(0)"
                        class="button is-small is-danger"
                        @click="del(role.id)"
                        >Delete</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <footer class="card-footer" style="margin-top: 4rem">
            <nav class="pagination" role="navigation" aria-label="pagination">
              <a
                href="javascript:void(0)"
                class="pagination-previous"
                @click="prev"
                >Previous</a
              >
              <a href="javascript:void(0)" class="pagination-next" @click="next"
                >Next page</a
              >
              <ul class="pagination-list"></ul>
            </nav>
          </footer>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import axios from "axios"
import { onMounted, ref } from 'vue'
import { Entity } from '../../interfaces/entity';
    export default {
        name: "Roles",
        setup(){
            const roles = ref([]);

            onMounted(async () => {
                const response = await axios.get('roles')

                roles.value = response.data.data
            })

            const del = async (id: number) => {
                if(confirm("Are you sure to delete this record?")){
                    await axios.delete(`roles/${id}`)

                    roles.value = roles.value.filter((e:Entity) => e.id !== id)
                }
            }

            return{
                roles,
                del
            }
        }
    }
</script>