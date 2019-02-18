<template>
    <div>
        <span class="name">按省份选择:</span>
        <m-slect
            :list="provinceList"
            :title="'省份'"
            :value="province"
            :showWrapperActive="provinceActive"
            @change_active="changeProvinceActive"
            @change="changeProvince"
        />
        <m-slect
            :list="cityList"
            :title="'城市'"
            :value="city"
            :showWrapperActive="cityActive"
            @change_active="changeCityActive"
            @change="changeCity"
            :disabled="cityDisabled"
            chooseClass="city"
        />
        <span>直接搜索:</span>
        <el-select
            v-model="searchWord"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading"
           
        >
            <el-option
                v-for="item in searchList"
                :key="item"
                :label="item"
                :value="item"
            ></el-option>
        </el-select>
    </div>
</template>
<script>
import MSlect from "./select";
import api from "@/api/index"
export default {
    data() {
        return {
            provinceList: ["山东", "甘肃"],
            province: "省份",
            cityList: ["漯河", "许昌"],
            city: "城市",
            provinceActive: false,
            cityActive: false,
            searchWord:'',
            searchList:["山东", "甘肃"],
            loading:false,
            cityDisabled:true
        };
    },
    components: {
        MSlect
    },
    methods: {
        changeProvinceActive(flag) {
            this.provinceActive = flag;
            
            if (flag) {
                this.cityActive = false;
            }
        },
        changeCityActive(flag) {
            this.cityActive = flag;
            if (flag) {
                this.provinceActive = false;
            }
        },
        remoteMethod(val){
            
        },
        changeProvince(value){
            this.province = value.name
            this.cityDisabled = false
            this.cityList = value.cityInfoList

        },
        changeCity(item){
            this.city = item.name;
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'})
        }
    },
    created(){
        api.getProvinceList().then(res => {
            this.provinceList = res.data.data.map((item) => {
                item.name = item.provinceName
                return item
            })
        })
    }
};
</script>
<style lang="sass">
@import '@/assets/css/changeCity/iselect.scss'
</style>

