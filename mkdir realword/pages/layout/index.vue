<template>
    <div>
        <!--顶部导航栏-->
        <nav class="navbar navbar-light">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
                    </li>
                    <template v-if="user">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/editor">
                                <i class="ion-compose"></i>&nbsp;New Post
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/settings">
                                <i class="ion-gear-a"></i>&nbsp;Settings
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/profile/dyj">
                                <img :src="user.image" class="user-pic">
                                {{ user.username }}
                            </nuxt-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/reg">Sign up</nuxt-link>
                        </li>
                    </template>


                </ul>
            </div>
        </nav>
        <!--/顶部导航栏-->
        <!--子路由-->
        <nuxt-child/>
        <!--/子路由-->
        <!--底部-->
        <footer>
            <div class="container">
                <a href="/" class="logo-font">conduit</a>
                <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
            </div>
        </footer>
        <!--/底部-->
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "LayoutIndex",
        computed: {
            ...mapState(['user'])
        }
    }
</script>

<style scoped>

</style>