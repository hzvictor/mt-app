<template>
    <div class="page-login">
        <div class="login-header">
            <a class="site-logo logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img
                    src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
                    width="480"
                    height="370"
                    alt="美团网"
                >
            </div>
            <div class="form">
                <p>
                    <span>账号登录</span><span style="background-color: red">{{error}}</span>
                </p>
                <el-input v-model="username" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input
                    v-model="password"
                    placeholder="手机号/用户名/邮箱"
                    prefix-icon="password"
                    type="password"
                ></el-input>
                <div class="foot">
                    <router-link :to="{name: 'forget'}">忘记密码?</router-link>
                </div>
                <el-button class="btn-login" type="success" @click="submit">登录</el-button>
                <p class="signup-guide">还没有账号？
                    <router-link :to="{name:'register'}" >免费注册</router-link>
                </p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper">
                        <span class="title">用合作网站账号登录</span>
                    </h3>
                    <div class="oauth cf">
                        <a
                            class="oauth__link oauth__link--qq"
                            href="/account/connect/tencent"
                            data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
                            target="_blank"
                        ></a>
                        <a
                            class="oauth__link oauth__link--weibo"
                            href="/account/connect/sina"
                            data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
                            target="_blank"
                        ></a>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="site-info-nav cf">
                <ul>
                    <li class="first">
                        <a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a>
                    </li>
                    <li>
                        <a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a>
                    </li>
                    <li>
                        <a
                            rel="nofollow"
                            href="http://emis.meishi.meituan.com/merchantsSettled"
                        >商家入驻</a>
                    </li>
                    <li>
                        <a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a>
                    </li>
                    <li class="last">
                        <a href="http://meituan.com/mobile">美团手机版</a>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <p>
                    ©
                    <span>2019</span>
                    <a href="https://www.meituan.com">美团网团购</a>
                    meituan.com
                    <a
                        href="http://www.miibeian.gov.cn/"
                        target="_blank"
                    >京ICP证070791号</a>
                    京公网安备11010502025545号
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            username: "",
            password: "",
            error:""
        };
    },
    methods: {
        submit() {
            api.login({
                userName: this.username,
                password: this.password
            }).then(res => {
                console.log(res);
                if (res.data.status == "success") {
                    this.$store.dispatch("setUser", this.username);
                    this.$router.push({ name: "index" });
                }else{
                    this.error = res.data.msg
                }
            });
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>

