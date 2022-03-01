<template>
  <transition name="modal">
    <div class="modal-backdrop" v-if="visible" @click.self="hide">
      <div class="modal">
        <div class="modal-title">
          {{ title }}
        </div>
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "Title"
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    toggle() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 10001;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(8px);

  
}
.modal-backdrop .modal {
    background-color: #F8F8F8;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    
  }
.modal-backdrop .modal .modal-title {
      font-size: 20px;
      font-weight: bold;
    }
.modal-backdrop .modal .modal-content {
      margin-top: 20px;
      font-size: 18px;
      font-weight: normal;
    }

.modal-enter-active, .modal-leave-active {
  transition: .2s;

  
}
.modal-enter-active, .modal-leave-active .modal {
    transition: .2s;
  }

.modal-enter-from, .modal-leave-to {
  transition: opacity .5s;
  opacity: 0;

  
}
.modal-enter-from, .modal-leave-to .modal {
    transform: scale(0.95) translate(-52.5%, -52.5%);
  }
</style>