<template>
    <div class="section">
        <button class="button is-primary" @click="modal1Active=true">Click Me!</button>
        <modal :active="modal1Active" @close="modal1Close">
            <p class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
            </p>
        </modal>
        <button class="button is-warning" @click="modal2Active=true">Click Me!</button>
        <modal :active="modal2Active" @close="modal2Active=false">
            <div class="notification is-primary">
                Primar lorem ipsum dolor sit amet, consectetur
                adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                consectetur adipiscing elit
            </div>
        </modal>
    </div>
</template>

<script>
    import Modal from "./components/Modal.vue";
    export default {
        name: "App",
        components: {Modal},
        data() {
            return {
                modal1Active: false,
                modal2Active: false
            }
        },
        methods: {
            modal1Close(){
                this.modal1Active = false;
                this.modal2Active = true;
            }
        }
    }
</script>

<style scoped>

</style>