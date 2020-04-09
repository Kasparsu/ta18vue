<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{data.Country}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <table>
                    <tbody>
                    <tr>
                        <td>New Confirmed</td>
                        <td>{{data.NewConfirmed}}</td>
                    </tr>
                    <tr>
                        <td>Total Confirmed</td>
                        <td>{{data.TotalConfirmed}}</td>
                    </tr>
                    <tr>
                        <td>New Deaths</td>
                        <td>{{data.NewDeaths}}</td>
                    </tr>
                    <tr>
                        <td>Total Deaths</td>
                        <td>{{data.TotalDeaths}}</td>
                    </tr>
                    <tr>
                        <td>New Recovered</td>
                        <td>{{data.NewRecovered}}</td>
                    </tr>
                    <tr>
                        <td>Total Recovered</td>
                        <td>{{data.TotalRecovered}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CountryStats",
        props: ['data']
    }
</script>

<style scoped>

</style>