<template>
  <button
    class="el-button"
    @click="handleClick"
    :type="nativeType"
    :disabled="disabled"
    :class="[type? 'el-button--' + type : '',
      buttonSize ?'el-button--' + buttonSize : '',{
        'is-disabled':disabled
      }]">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    props: {
        disabled:Boolean,
        nativeType:{
            type:String,
            default:'button',
        },
        size: String,
        type: {
            type: String,
            default: 'default'
        }
    },
    computed: {
      buttonSize() {
        return this.size;
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
