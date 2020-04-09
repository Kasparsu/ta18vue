<template>
    <div>
        <tabs :els="titles">
            
        </tabs>
    </div>
</template>

<script>
    import Tabs from "./components/Tabs.vue";
    export default {
        name: "App",
        components: {Tabs},
        data() {
            return {
                titles: [
                    {title:'Pictures', content: '<b>Some cool Image content here!</b>'},
                    {title:'Music', content: 'Some cool music content here!'},
                    {title:'Videos', content: 'Some cool video content here!'},
                    {title:'Documents', content: 'Some cool document content here!'},
                    {title:'Games', content: 'Some cool gaming content here!'},
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>