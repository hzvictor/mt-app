<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLive">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
     
        </dl>
        <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLive">
            <template v-for="(item,index) in curDetail.items" >
              <h4 :key="index">{{item.title}}</h4>
              <span v-for="(v,i) in item.items" :key="v + '_' + i">{{v}}</span>
            </template>
        </div>

        
    </div>
</template>
<script>
import api from '@/api/index'
export default {
    data(){
        return {
            curDetail: null,
            menuList:[]
        }
    },
    methods:{
        menuEnter(item){
            
            this.curDetail = item
        },
        menuLive(){
            var self = this
            this.timer = setTimeout(()=>{
                self.curDetail = null
            },200)
        },
        detailEnter(){
            clearTimeout(this.timer)
        },
        detailLive(){
            this.curDetail = null
        }
    },
    created(){
        api.getMenuList().then(res => {
            
            this.menuList = res.data.data
        })
    }
    
}
</script>