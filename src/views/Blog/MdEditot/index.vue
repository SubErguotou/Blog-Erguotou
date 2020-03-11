<template>
    <div id="mavonEditor">
        <mavon-editor v-model="value" :scrollStyle= "true"/>
    </div>
</template>

<script>
export default {

    name : "MavonEditor",
    setup(props, {root}){
            const value = ref("");
            const defaultData = ref("preview"),

            return {
              defaultData,
              value,
            }
    },
    data() {
        return {

        };
    },
};
</script>

<style lang="less" scoped>
#mavonEditor {
  width: 100%;
  height: 100%;
  // 滚动条
  overflow:scroll;

}
</style>
