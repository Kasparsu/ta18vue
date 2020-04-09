<template>
    <div>
    <div class="tabs">
        <ul>
            <li v-for="(el, key) in els" :class="{'is-active': key===active}">
                <a @click="active = key">{{el.title}}</a>
            </li>
        </ul>
    </div>
        <div class="section" v-html="els[active].content">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: ['els'],
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style scoped>

</style>