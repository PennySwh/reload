<template>
    <div class="TableList">
        <h3>{{dataValue}}</h3>
        <button @click="newData()">点击我刷新数值</button>
    </div>
</template>

<script>
var datajson = require('../data.json');
export default {
    name: 'TableList',
    data () {
        return {
            dataValue: datajson.val
        }
    },
    inject:['reload'],//注入reload方法
    methods:{
        newData(){
            this.reload();
        }
    }
}
console.log(datajson.val);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
