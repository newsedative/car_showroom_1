<script>

export default {
  name: "CarPartPage",
  data() {
    return {
      countries: [],
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Название', value: 'country_name'},
        {text: 'Код', value: 'code', sortable: false,},
        {text: 'Валюта', value: 'currency', sortable: false,},
        {text: 'Действие', value: 'actions', sortable: false,},
      ],
      search: '',
      dialog: false,
      dialogDelete: false,
      desserts: [],
      editedItem: {
        country_name: '',
        code: '',
        currency: '',
      },
      editedIndex: -1,
      currIndex: -1,
      country: {
        country_name: '',
        code: '',
        currency: '',
      },
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  methods: {
    createCountry() {
      let country = {...this.country}
      const content = {
        country_name: country.country_name,
        code: country.code,
        currency: country.currency
      }
      this.$ajax.post('api/country/', content)
                .then(response => this.countries.push({...country, id:response.data.id}))
      this.close()
    },
    deleteItem(item) {
      this.$ajax.delete(`api/country/${item.id}/`)
      this.countries = this.countries.filter(elem => elem.id !== item.id)
    },
    editItem(item) {
      this.editedIndex = 1
      this.editedItem = item
      this.country = {country_name: item.country_name, code: item.code, currency: item.currency}
      this.currIndex = Object.keys(this.countries).find(key => this.countries[key].id === item.id);
      this.dialog = true
    },
    updateChange() {
      let country = {...this.country}
      const content = {
        country_name: country.country_name,
        code: country.code,
        currency: country.currency
      }
      this.$ajax.put(`api/country/${this.editedItem.id}/`, content)
          // eslint-disable-next-line no-unused-vars
          .then(response => this.countries[this.currIndex] = content)
      this.close()
      this.$router.go(0);
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
    async fetchCountry() {
       try {
        const response = await this.$ajax.get('api/country/');
        console.log(response);
        this.countries = response.data;
      } catch (e) {
        alert('error');
      }
    }
  },
  mounted() {
    this.fetchCountry();
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
          :items="countries"
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
                            v-model="country.country_name"
                            label="Название"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="country.code"
                            label="Код"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="country.currency"
                            label="Валюта"
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
                        @click="createCountry"
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