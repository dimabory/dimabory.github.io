<template>
    <b-navbar tag="header" class="top-bar" toggleable="sm" type="dark" variant="primary" text-variant="white">

        <transition name="running">
            <img @click="isRunning = !isRunning" src="./assets/runner.gif" class="runner" :class="{active: isRunning}"/>
        </transition>

        <b-navbar-toggle target="nav_dropdown_collapse" class="order-first"></b-navbar-toggle>

        <b-navbar-brand href="https://github.com/dimabory" target="_blank"
                        class="ml-auto text-uppercase order-sm-last">
            <img src="https://avatars1.githubusercontent.com/u/11414342?s=40&v=4" class="d-inline-block" alt="BV">
            Dmytro Borysovskyi
        </b-navbar-brand>

        <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
                <li class="nav-item--socials">
                    <b-link href="https://www.linkedin.com/in/dmytroborysovkyi"
                            target="_blank" class="text-secondary">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg"/>
                    </b-link>
                    <b-link href="https://github.com/dimabory" target="_blank" class="text-secondary">
                        <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
                    </b-link>
                    <b-link href="https://t.me/dmtrbrskvsk" target="_blank" class="text-secondary">
                        <font-awesome-icon :icon="['fab', 'telegram']" size="lg"/>
                    </b-link>

                    <b-link href="https://soundcloud.com/auddqrahhlyj"
                            target="_blank" class="text-secondary">
                        <font-awesome-icon :icon="['fab', 'soundcloud']" size="lg"/>
                    </b-link>

                    <b-link href="mailto:bbbara10@gmail.com?subject=Hi!"
                            target="_blank" class="text-secondary">
                        <font-awesome-icon :icon="['fas', 'at']" size="lg" spin/>
                    </b-link>
                </li>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faLinkedinIn, faGithub, faTelegram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
  import { faAt } from '@fortawesome/free-solid-svg-icons'

  library.add(faLinkedinIn, faGithub, faTelegram, faSoundcloud, faAt)

  export default {
    name: 'AppTopBar',
    data: function () {
      return {
        isRunning: true
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
    .top-bar {
        border-radius: 0 0 10px 10px;
        margin: 0 1px;
        box-shadow: 1px 0 5px 1px rgba(0, 155, 58, 0.5);
    }

    .nav-item--socials > a {
        padding: 15px;
    }

    .runner {
        box-shadow: inset 0 -7px 13px -10px rgba(0, 0, 0, 0.75);
        position: absolute;
        bottom: 0;
        width: 60px;
        height: 65px;
        animation: running 20s infinite both cubic-bezier(.2, .01, 0, 1), rotate 20s infinite both;
        animation-play-state: paused;
    }

    .runner.active {
        animation-play-state: running;
    }

    @keyframes running {
        0% {
            left: 0;
        }
        50% {
            left: 75%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes rotate {
        0% {
            transform: scaleX(1);
        }
        49% {
            transform: scaleX(.9);
        }
        50% {
            transform: scaleX(-1);
        }
        99% {
            transform: scaleX(-.9);
        }
        100% {
            transform: scaleX(1);
        }
    }
</style>