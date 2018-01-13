<template>
  <div class="el-badge"> 
    <slot></slot>
    <transition name="el-zoom-in-center">    </transition>
        <sup v-show="!hidden&&(content||isDot)" class="el-badge__content" :class="{'is-fixed':true, 'is-dot':isDot}" v-text="content"></sup>
  </div>
</template>

<script>
export default {
    name:'ElBadge',
    props:{
        value:{},
        max:Number,
        isDot:Boolean,
        hidden:Boolean
    },
    computed:{
        content(){
            if(this.isDot)return;
            const value =this.value
            const max = this.max
            if(typeof value === 'number' && typeof max ==='number'){
                return max< value ?`${max}+`:value;
            }
        }
    }
}
</script>

<style>

</style>
