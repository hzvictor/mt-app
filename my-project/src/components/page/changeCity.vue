<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            <hot :title="'热门城市:'" :list="hotList"/>
        </el-row>
        <el-row>
            <hot :title="'最近访问:'" :list="rencentList"/>
        </el-row>
        <el-row>
            <catagory/>
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index'
import Province from '@/components/changcity/province'
import hot from '@/components/changcity/hot'
import Catagory from '@/components/changcity/catagory'
export default {
    data(){
        return {
            hotList:[],
            rencentList:[]
        }
    },
    components:{
        Province,
        hot,
        Catagory
    },
        created() {
        api.getHotCity().then(res=> {
            if (res.data.status === 'success') {
                 this.hotList = res.data.data.map((item) => item.name);
            }
        });
        api.getRecentCity().then(res => {
              if (res.data.status === 'success') {
                 this.rencentList = res.data.data.map((item) => item.name);
            }
        })
    }
    
}
</script>
