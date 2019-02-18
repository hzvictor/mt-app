<template>
<div class="m-header-topbar m-header">
    <el-row>
        <el-col :span="10">
            <geo/>
        </el-col>
        <el-col :span="14">
            <m-nav/>
        </el-col>
    </el-row>
</div>
    
</template>
<script>
import geo from "./geo"
import mNav from "./nav"


export default {
    components: {
        geo,
        mNav,
    }  
}
</script>

<style lang="sass">
    @import '@/assets/css/public/header/topbar.scss'
</style>
