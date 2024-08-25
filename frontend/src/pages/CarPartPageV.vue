<script>

export default {
  name: "CarPartPageV",
  data() {
    return {
      carparts: [],
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Наименование', value: 'name'},
        {text: 'Страна', value: 'country'},
        {text: 'Описание', value: 'description'},
        {text: 'Автомобили', value: 'autos'},
        {text: 'Действие', value: 'actions'},
      ],
      search: '',
      dialog: false,
      dialogDelete: false,
      desserts: [],
      editedItem: {
        name: '',
        country: null,
        description: '',
        autos_names: [],
      },
      editedIndex: -1,
      currIndex: -1,
      carpart: {
        name: '',
        country: null,
        description: '',
        autos_names: [],
      },
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  methods: {
    createCar() {
      let carpart = {...this.carpart}
      const content = {
        name: carpart.name,
        country: null,
        description: carpart.description,
        autos: [],
      }
      this.$ajax.post('api/carpart/', content)
                .then(response => this.carparts.push({...carpart, id:response.data.id}))
      this.close()
    },
    deleteItem(item) {
      this.$ajax.delete(`api/carpart/${item.id}/`)
      this.carparts = this.carparts.filter(elem => elem.id !== item.id)
    },
    editItem(item) {
      this.editedIndex = 1
      this.editedItem = item
      this.carpart = {name: item.name, country: null, description: item.description, autos: []}
      this.currIndex = Object.keys(this.carparts).find(key => this.carparts[key].id === item.id);
      this.dialog = true

    },
    updateChange() {
      let carpart = {...this.carpart}
      const content = {
        name: carpart.name,
        country: null,
        description: carpart.description,
        autos: [],
      }
      console.log(content)
      this.$ajax.put(`api/carpart/${this.editedItem.id}/`, content)
          // eslint-disable-next-line no-unused-vars
          .then(response => this.carparts[this.currIndex] = content)
      this.close()
      //this.$router.go(0);
      this.editedIndex = -1
      this.currIndex = -1
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    },
    logout() {
      this.$store.commit('login/removeToken')
      this.$router.push('/login')
    },
    async fetchCarParts() {
       try {
        this.isPartLoading = true;
        const response = await this.$ajax.get('api/carpart/');
        console.log(response);
        this.carparts = response.data;
      } catch (e) {
        alert('error');
      } finally {
        this.isPartLoading = false;
      }
    }
  },
  mounted() {
    this.fetchCarParts();
  },
}
</script>

<template>
  <v-app>
    <v-container>
      <v-toolbar flat>
        <v-toolbar-title>Машинова Дарья</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-btn color="#D05353" @click="logout">Выход</v-btn>
        </div>
      </v-toolbar>
      <v-app-bar
          elevation="4"
          color="#D05353"
      >
        <v-tabs align-with-title>
          <v-tab @click="$router.push('/country')">Страны</v-tab>
          <v-tab @click="$router.push('/cars')">Автомобили</v-tab>
          <v-tab @click="$router.push('/carpart')">Запчасти</v-tab>
        </v-tabs>

      </v-app-bar>

      <div>
        <v-text-field
            v-model="search"
            label="Поиск..."
            :rules="rules"
            hide-details="auto"
        ></v-text-field>
      </div>

      <v-data-table
          :headers="headers"
          :items="carparts"
          class="elevation-1"
          :search="search"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  Добавить
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="carpart.name"
                            label="Наименование"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="carpart.description"
                            label="Описание"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="carpart.country"
                            label="Страна"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="carpart.autos_names"
                            label="Автомобили"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    Cancel
                  </v-btn>
                  <div>
                    <v-btn v-if="editedIndex===-1"
                        color="blue darken-1"
                        text
                        @click="createCar"
                    >
                      Сохранить
                    </v-btn>
                    <v-btn v-if="editedIndex===1"
                        color="blue darken-1"
                        text
                        @click="updateChange"
                    >
                      Изменить
                    </v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            class="me-2"
            size="small"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>


    </v-container>
  </v-app>
</template>


<style scoped>
</style>