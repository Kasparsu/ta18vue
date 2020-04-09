<template>
    <div class="section">
        <div class="columns">
            <div class="column is-three-quarters">
                <input class="input" type="text" placeholder="Country" v-model="search">
            </div>
            <div class="column is-one-quarter">
                <div class="select">
                    <select v-model="sortValue">
                        <option v-for="option in sort" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="columns is-multiline">
            <div class="column is-one-quarter" >
                <country-stats :data="world"></country-stats>
            </div>
            <div class="column is-one-quarter" v-for="country in sortedCountries">
                <country-stats :data="country"></country-stats>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CountryStats from "./components/CountryStats.vue";
    export default {
        name: "App",
        components: {CountryStats},
        created() {
            axios.get('https://api.covid19api.com/summary').then(response => {
                this.countries = response.data.Countries;
                this.world = response.data.Global;
                this.world.Country = 'World';
            });
            // example of cors error
            // axios.get('https://avatars.dicebear.com/v2/male/a.svg').then(response => {
            //     console.log(response);
            // });
        },
        mounted() {

        },
        data() {
            return {
                countries: [],
                world: null,
                search: '',
                sort: [
                    {value: 'NewConfirmed', text: 'New Confirmed'},
                    {value: 'TotalConfirmed', text: 'Total Confirmed'},
                    {value: 'TotalDeaths', text: 'Total Deaths'},
                    {value: 'NewDeaths', text: 'New Deaths'},
                    {value: 'NewRecovered', text: 'New Recovered'},
                    {value: 'TotalRecovered', text: 'Total Recovered'},
                ],
                sortValue: ''
            }
        },
        methods: {

        },
        computed: {
            filteredCountries(){
                return this.countries.filter(country => {
                    let len = this.search.length;
                    let compareStr = country.Country.substr(0, len);
                    return this.search.toLowerCase() === compareStr.toLowerCase();
                });
            },
            sortedCountries(){
                if(this.sortValue != '') {
                    return this.filteredCountries.sort((a, b) => {
                        if (a[this.sortValue] < b[this.sortValue]) {
                            return 1;
                        }
                        if (a[this.sortValue] > b[this.sortValue]) {
                            return -1;
                        }
                        return 0;
                    });
                }
                return this.filteredCountries;
            }
        }
    }
</script>

<style scoped>

</style>