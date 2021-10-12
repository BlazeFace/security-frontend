<template>
    <div class="question">
        <div class="question-content">
            <strong><h2>{{ question }}</h2></strong>
            <p><em>{{ description }}</em></p><br/>
            <table>
                <tr>
                    <th><BaseButton href="#" title="YES"></BaseButton></th>
                    <th><BaseButton href="#" title="NO"></BaseButton></th>
                </tr>
            </table>
        </div>
    </div>
    <br/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue'
export default {
    props: {
        question: String,
        description: String
    },
    data() {
        return {
            buttonValue:{clicked:false,value:0}
        }
    },
    methods: {
        yesButtonClick(): void {
            // this.buttonValue = {clicked:true,value:1}
        },
        noButtonClick(): void {
            // this.buttonValue = {clicked:true,value:0}
        }
    },
    components: {
        BaseButton
    }
}
</script>

<style scoped>
table {
    width: 100%;
}
th {
    display: inline-block;
}
.question {
    background-color: orange;
    border-radius: 8px;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    border: 2px DarkOrange solid;
}
.question-content {
    padding: 8px 8px 8px 8px;
}
</style>