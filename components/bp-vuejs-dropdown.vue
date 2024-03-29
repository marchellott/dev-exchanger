<!-- eslint-disable -->
<template>
  <div :class="{className, 'bp-dropdown--sub': role}" class="bp-dropdown">
    <span
      :class="{
        [`bp-dropdown__${role ? 'sub' : 'btn'}`]: true,
        [`bp-dropdown__${role ? 'sub' : 'btn'}--active`]: !isHidden,
        [`${className}-bp__btn`]: className,
        [`${className}-bp__btn--active`]: !isHidden
      }"
      @click="_onToggle"
      @mouseenter="_onBtnEnter"
      @mouseleave="_onBtnLeave"
    >
      <slot name="btn" />
      <slot v-if="isIcon" name="icon">
        <svg v-if="isLoading" class="bp-dropdown__icon bp-dropdown__icon--spin" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
          />
        </svg>
        <svg v-else :class="{[`bp-dropdown__icon--${align}`]: align}" class="bp-dropdown__icon" viewBox="0 0 256 512">
          <path
            fill="currentColor"
            d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
          />
        </svg>
      </slot>
    </span>
    <transition name="fade">
      <div
        v-if="!isHidden"
        :id="id"
        :style="{minWidth: `${width}px`, top: `${top}px`, left: `${left}px`}"
        :class="{[`${className}-bp__body`]: className}"
        class="bp-dropdown__body"
        @click="_onBodyClick"
        @mouseenter="_onBodyEnter"
        @mouseleave="_onBodyLeave"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-enable  */
export default {
  name: "BpVuejsDropdown",

  props: {
    role: {
      type: String,
      required: false,
      default: ""
    },

    align: {
      type: String,
      required: false,
      default: "auto"
    },

    alignOrder: {
      type: Array,
      required: false,
      default: () => [
        "right-bottom",
        "right-top",
        "left-bottom",
        "left-top",
        "bottom-left",
        "bottom-right",
        "top-left",
        "top-right"
      ]
    },

    x: {
      type: Number,
      required: false,
      default: 0
    },

    y: {
      type: Number,
      required: false,
      default: 0
    },

    beforeOpen: {
      type: Function,
      required: false,
      default: resolve => resolve()
    },

    trigger: {
      type: String,
      required: false,
      default: "click"
    },

    closeOnClick: {
      type: Boolean,
      required: false,
      default: false
    },

    isIcon: {
      type: Boolean,
      required: false,
      default: true
    },

    className: {
      type: String,
      required: false,
      default: ""
    }
  },

  data() {
    return {
      isHidden: true,
      isLoading: false,

      id: null,
      timeout: null,

      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      width: undefined
    };
  },

  watch: {},

  created() {
    const $root = this.$root;

    // --- hide dropdown if other dropdowns show
    // --- or document clicked
    $root.$on("bp-dropdown:open", () => (this.isHidden = true));
    $root.$on("bp-dropdown:hide", () => (this.isHidden = true));

    // --- hide dropdown on document click event
    if (this.trigger === "click" && !$root["is-bp-dropdown"]) {
      Object.defineProperty($root, "is-bp-dropdown", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: true
      });

      document.onmousedown = e => {
        const target = e.target;
        const dropdown = target.closest(".bp-dropdown__btn") || target.closest(".bp-dropdown__body");

        if (!dropdown) {
          $root.$emit("bp-dropdown:hide");
        }
      };
    }

    this.id = "bp-dropdown-" + this.generateRandomId();
  },

  methods: {
    // --- generate random id for query selector
    generateRandomId() {
      return Math.random()
        .toString(36)
        .substr(2, 10);
    },

    _onToggle(e) {
      if (this.trigger !== "click") {
        return;
      }

      this.checkCustomCallback(e);
    },

    _onBtnEnter(e) {
      if (this.trigger !== "hover" || !this.isHidden) {
        return;
      }

      this.checkCustomCallback(e);
    },

    _onBtnLeave(e) {
      if (this.trigger !== "hover") {
        return;
      }

      if (this.role) {
        this.timeout = setTimeout(() => (this.isHidden = true), 100);
      }

      const to = e.toElement;
      if (!to) {
        return;
      }

      const isDropdown = to.closest(".bp-dropdown__btn") || to.closest(".bp-dropdown__body");
      if (isDropdown) {
        return;
      }

      this.prepare();
    },

    _onBodyClick() {
      if (this.closeOnClick) {
        this.isHidden = true;
      }
    },

    _onBodyEnter() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    },

    _onBodyLeave(e) {
      if (this.trigger !== "hover") {
        return;
      }

      const to = e.toElement;
      if (!to) {
        return;
      }

      if (to.closest(".bp-dropdown__btn") || to.closest(".bp-dropdown__sub")) {
        return;
      }

      this.prepare();
    },

    checkCustomCallback(e) {
      if (!this.isHidden) {
        this.prepare();
        return;
      }

      // --- custom callback before open
      const promise = new Promise(resolve => {
        this.isLoading = true;
        this.beforeOpen.call(this, resolve);
      });

      promise.then(() => {
        this.isLoading = false;
        if (!e.target.closest(".bp-dropdown__body")) {
          // --- hide dropdown if other dropdowns show
          this.$root.$emit("bp-dropdown:open");
        }

        setTimeout(this.prepare, 0);
      });

      promise.catch(() => {
        throw Error("bp-dropdown promise error");
      });
    },

    prepare() {
      this.isHidden = !this.isHidden;
      if (!this.isHidden) {
        this.$nextTick(() => {
          const button = this.$el.firstElementChild;
          const container = document.getElementById(this.id);

          this.setWidth(button.offsetWidth);
          this.setPosition(button, container);
        });
      }
    },

    setWidth(width) {
      this.width = width;
    },

    setPosition(btn, body) {
      if (!btn || !body) {
        return;
      }

      let rect;
      if (this.align === "auto") {
        // --- view port size
        const vpWidth = document.documentElement.clientWidth;
        const vpHeight = document.documentElement.clientHeight;

        for (let i = 0; i <= this.alignOrder.length; i++) {
          const align = i === this.alignOrder.length ? this.alignOrder[0] : this.alignOrder[i];
          rect = this.calcRectFromAlign(btn, body, align);

          if (
            rect.left >= pageXOffset &&
            rect.top >= pageYOffset &&
            rect.right <= pageXOffset + vpWidth &&
            rect.bottom <= pageYOffset + vpHeight
          ) {
            break;
          }
        }
      } else {
        rect = this.calcRectFromAlign(btn, body, this.align);
      }

      this.top = rect.top;
      this.left = rect.left;
    },

    calcRectFromAlign(btn, body, align) {
      const coords = this.getCoords(btn);

      // --- current position
      const currentTop = coords.top;
      const currentLeft = coords.left;

      // --- btn size
      const btnWidth = btn.offsetWidth;
      const btnHeight = btn.offsetHeight;

      // --- body size
      const bodyWidth = body.offsetWidth;
      const bodyHeight = body.offsetHeight;

      let _top, _left;
      if (align === "top") {
        _top = currentTop + pageYOffset - bodyHeight;
        _left = currentLeft + pageXOffset;
      } else if (align === "top-left") {
        _top = currentTop + pageYOffset - bodyHeight;
        _left = currentLeft + pageXOffset - bodyWidth + btnWidth;
      } else if (align === "right") {
        // skip
      } else if (align === "right-bottom") {
        _top = currentTop + pageYOffset;
        _left = currentLeft + pageXOffset + btnWidth;
      } else if (align === "right-top") {
        _top = currentTop + pageYOffset - bodyHeight + btnHeight;
        _left = currentLeft + pageXOffset + btnWidth;
      } else if (align === "bottom-left") {
        _top = currentTop + pageYOffset + btnHeight;
        _left = currentLeft + pageXOffset - bodyWidth + btnWidth;
      } else if (align === "left") {
        // skip
      } else if (align === "left-bottom") {
        _top = currentTop + pageYOffset;
        _left = currentLeft + pageXOffset - bodyWidth;
      } else if (align === "left-top") {
        _top = currentTop + pageYOffset - bodyHeight + btnHeight;
        _left = currentLeft + pageXOffset - bodyWidth;
      } else if (align === "bottom") {
        // skip
      } else if (align === "bottom-right") {
        // skip
      } else {
        _top = currentTop + pageYOffset + btnHeight;
        _left = currentLeft + pageXOffset;
      }
      _top += this.y;
      _left += this.x;

      return {top: _top, left: _left, bottom: _top + bodyHeight, right: _left + bodyWidth};
    },

    getCoords(el) {
      el = el.getBoundingClientRect();
      return {
        top: el.top - pageYOffset,
        left: el.left - pageXOffset
      };
    }
  }
};
</script>

<style>
.bp-dropdown--sub {
  width: 100%;
}

.bp-dropdown--sub .bp-dropdown__btn,
.bp-dropdown--sub .bp-dropdown__sub {
  width: 100%;
}

.bp-dropdown--sub .bp-dropdown__icon {
  margin-left: auto;
}

.bp-dropdown__btn {
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border: 1px solid #efefef;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.bp-dropdown__sub {
  display: inline-flex;
  align-items: center;
}

.bp-dropdown__btn--active {
  background-color: #eee;
}

.bp-dropdown__icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  overflow: visible;
  transition: transform 0.1s ease;
}

.bp-dropdown__icon--spin {
  width: 12px;
  height: 12px;
  animation: spin 2s infinite linear;
}

.bp-dropdown__icon--top {
  transform: rotate(-180deg);
}

.bp-dropdown__icon--right {
  transform: rotate(-90deg);
}

.bp-dropdown__icon--bottom {
  transform: rotate(0);
}

.bp-dropdown__icon--left {
  transform: rotate(-270deg);
}

.bp-dropdown__btn--active .bp-dropdown__icon--top,
.bp-dropdown__sub--active .bp-dropdown__icon--top {
  transform: rotate(0);
}

.bp-dropdown__btn--active .bp-dropdown__icon--right,
.bp-dropdown__sub--active .bp-dropdown__icon--right {
  transform: rotate(-270deg);
}

.bp-dropdown__btn--active .bp-dropdown__icon--bottom,
.bp-dropdown__sub--active .bp-dropdown__icon--bottom {
  transform: rotate(-180deg);
}

.bp-dropdown__btn--active .bp-dropdown__icon--left,
.bp-dropdown__sub--active .bp-dropdown__icon--left {
  transform: rotate(-90deg);
}

.bp-dropdown__body {
  position: fixed;
  top: 0;
  left: 0;
  padding: 6px 8px;
  background-color: #fff;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
