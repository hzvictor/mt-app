<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>

            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList.slice(0,4)" :key="index">
                            <router-link :to="{name:'goods', params:{name:item}}">{{item}}</router-link>
                        </dd>
                     
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                       
                       <dd v-for="(item, index) in SearchList" :key="index">
                            <router-link :to="{name:'goods', params:{name:item}}">{{item}}</router-link>
                        </dd>
                       
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
 import api from '@/api/index.js'
export default {
   
    data() {
        return {
            searchWord: "",
            isFocus:false,
            hotPlaceList:[],
            SearchList:['火锅','火锅自助餐', '火锅 重庆'],
            suggestList:[]
        };
    },
    computed:{
        isHotPlace(){
            return this.isFocus && !this.searchWord
        },
        isSearchList(){
            return this.isFocus && this.searchWord
        }
    },
    methods: {
        focus(){
            this.isFocus = true;
        },
        blur(){
            var self = this
            setTimeout(() => {
                this.isFocus = false
            }, 200);
        },
        input(){
            api.getSeachList().then(res => {
                let val = this.searchWord
                this.SearchList = res.data.data.list.filter((item, index) =>{
                    return item.indexOf(val) > -1
                })
            })
        }
    },
    created(){
        api.searchHotWord().then(res => {
            this.hotPlaceList = res.data.data
            this.suggestList = res.data.data
        })
    }
};
</script>
<style lang="sass">
    @import "@/assets/css/public/header/search.scss"
    @import "@/assets/css/public/header/index.scss"
</style>
