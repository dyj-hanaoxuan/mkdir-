<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up'}}</h1>
                    <p class="text-xs-center">
                        <nuxt-link v-if="isLogin" to="/reg">Need an account?</nuxt-link>
                        <nuxt-link v-else to="/login">Have an account?</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(messages, field) in errors">
                            <li v-for="(messages, index) in messages" :key="index">
                                {{field}}{{messages}}
                            </li>
                        </template>

                    </ul>

                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group" v-if="!isLogin">
                            <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="Password" required>
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{isLogin ? 'Sign in' : 'Sign up'}}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { login, reg } from '../../api/user'
    //只在客户端加载
    const Cookie = process.client ? require('js-cookie') : undefined
    export default {
      middleware: 'notAuthticated',//验证登录
        name: "loginIndex",
        data () {
            return {
                user: {
                    username:'',
                    email:'',
                    password:''
                },
                errors:{} //错误信息
            }
        },
        computed: {
            isLogin () {
                return this.$route.name === 'login'
            }
        },
        methods: {
            async onSubmit () {
                try {
                    const { data } = this.isLogin
                        ? await login({
                        user:this.user
                    })
                        : await reg({
                            user:this.user
                        })
                    console.log(data,'登陆成功')
                    this.$store.commit('setUser', data.user)
                    //TODO：数据持久化
                    Cookie.set('user', data.user)
                    this.$router.push('/')
                } catch (err) {
                    this.errors = err.response.data.errors
                }
            }
        }
    }
</script>

<style scoped>

</style>